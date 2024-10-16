// Importing necessary modules using ES modules syntax
import Africastalking from "africastalking";
import EnsMapping from "../models/ensMapping.js";

// Initializing the Africastalking SDK
// const africastalking = Africastalking({
//   apiKey: process.env.AFRICASTALKING_API_KEY,
//   username: process.env.AFRICASTALKING_USERNAME,
// });

// Handling USSD request
export const handleUssd = async (req, res) => {
  const { text, phoneNumber } = req.body;

  let response;

  if (text === "") {
    // First interaction
    response = "CON Welcome to ENS to Phone Mapper\nEnter your ENS Basename";
  } else {
    const ensBasename = text.trim();

    // Store the ENS mapping to the database
    const newMapping = new EnsMapping({
      phoneNumber,
      ensBasename,
    });

    try {
      await newMapping.save();
      console.log(`ENS Name ${ensBasename} linked mobile number ${phoneNumber}`);
      response = `END Your ENS ${ensBasename} has been linked to your number ${phoneNumber}.`;
    } catch (error) {
      // If there's a duplicate key error (phone number already exists)
      if (error.code === 11000) {
        response = "END This phone number is already linked to an ENS. Please try a different number.";
      } else {
        response = "END Error linking ENS to phone number. Please try again.";
      }
    }
  }

  console.log(response); // Log response before sending
  res.send(response);
};
