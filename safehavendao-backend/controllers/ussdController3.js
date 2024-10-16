// Importing necessary modules
import EnsMapping from "../models/ensMapping.js";

// Helper function to check ENS mapping
const checkEnsMapping = async (phoneNumber) => {
  try {
    const mapping = await EnsMapping.findOne({ phoneNumber });
    if (mapping) {
      return `END Your phone number is linked to the ENS domain: ${mapping.ensBasename}`;
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

  console.log(response); // Log response before sending
  res.send(response);
};
