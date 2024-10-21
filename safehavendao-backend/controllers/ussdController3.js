// Importing necessary modules
import EnsMapping from "../models/ensMapping.js";
import eventEmitter from '../events/eventEmitter.js'; // Import the event emitter

// Function to check ENS mapping
export const checkEnsMapping = async (phoneNumber) => {
  try {
    // Check if ENS domain is linked to the phone number
    const mapping = await EnsMapping.findOne({ phoneNumber });

    if (mapping) {
      const ensBasename = mapping.ensBasename;
      
      // Emit the 'sendSMS' event to trigger the SMS sending process asynchronously
      eventEmitter.emit('sendSMS', phoneNumber, `Your phone number is linked to the ENS domain: ${ensBasename}`);
      
      return `END Your phone number is linked to the ENS domain: ${ensBasename}`;
    } else {
      return "END No ENS base name is attached to this number.";
    }
  } catch (error) {
    return "END Error checking ENS domain. Please try again later.";
  }
};


// Handling USSD request
export const handleUssd = async (req, res) => {
  const { text, phoneNumber } = req.body;

  let response;

  switch (text) {
    case "":
      // Initial interaction: Display welcome message with options
      response = `CON Welcome to SafeHavenDAO. What would you like to check
      1. My SafeHavenDAO account
      2. My phone number`;
      break;

    case "1":
      // ENS check for phone number
      response = "CON Welcome to SafeHavenDAO ENS to Phone Mapper\nChecking ENS domain for your number...";
      response = await checkEnsMapping(phoneNumber);
      break;

    case "2":
      // Display the phone number to the user
      response = `END Your phone number is ${phoneNumber}`;
      break;

    default:
      // Handle invalid input
      response = "END Invalid selection. Please try again.";
      break;
  }

  process.env.NODE_ENV === 'development' ? console.log(response) : null; // Log response before sending if in development
  res.send(response);
};
