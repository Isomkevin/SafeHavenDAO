// Importing necessary modules
import EnsMapping from "../models/ensMapping.js";

// Handling USSD request
export const handleUssd = async (req, res) => {
  const { text, phoneNumber } = req.body;

  let response;

  if (text === "") {
    // First interaction: Display a welcome message and let the user know what the service does
    response = `CON Welcome to SafeHavenDAO. What would you like to check
        1. My SafeHavenDAO account
        2. My phone number`;

  } else if (text === "1") {
    // First interaction: Display a welcome message and let the user know what the service does
    response = "CON Welcome to SafeHavenDAO ENS to Phone Mapper\nChecking ENS domain for your number...";
    
    try {
      // Check if there's an existing ENS domain linked to this phone number
      const mapping = await EnsMapping.findOne({ phoneNumber });
      
      if (mapping) {
        // If mapping exists, display the ENS domain to the user
        response = `END Your phone number is linked to the ENS domain: ${mapping.ensBasename}`;
      } else {
        // If no mapping exists, inform the user
        response = "END No ENS base name is attached to this number.";
      }
    } catch (error) {
      // Handle any potential errors
      response = "END Error checking ENS domain. Please try again later.";
    }

  } else if ( text == '2') {
    // Business logic for first level responses
    response = `END Your phone number is ${phoneNumber}`;
  } else {
    // Handle other USSD interactions or future features here
    response = "END Invalid selection. Please try again.";
  }

  console.log(response); // Log response before sending
  res.send(response);
};
