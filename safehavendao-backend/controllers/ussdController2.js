const Africastalking = require('africastalking');
const EnsMapping = require('../models/ensMapping');

// Initialize Africa's Talking
const africastalking = Africastalking({
  apiKey: process.env.AFRICASTALKING_API_KEY,
  username: process.env.AFRICASTALKING_USERNAME
});

const sms = africastalking.SMS;

// Function to send SMS notification
const sendSMSNotification = async (phoneNumber, message) => {
  try {
    const response = await sms.send({
      to: [phoneNumber],
      message: message,
    });
    console.log(response);
  } catch (error) {
    console.error('SMS send error:', error);
  }
};

// Handle incoming USSD requests
const handleUssd = async (req, res) => {
  const { text, phoneNumber } = req.body;

  let response;

  if (text === '') {
    // First interaction (Welcome message)
    response = 'CON Welcome to ENS to Phone Mapper\nEnter your ENS Basename';
  } else {
    const ensBasename = text.trim();

    // Save ENS Basename to the database
    const newMapping = new EnsMapping({
      phoneNumber,
      ensBasename
    });

    try {
      await newMapping.save();

      // Send SMS notification to the user
      const smsMessage = `Your ENS ${ensBasename} has been successfully mapped to your number.`;
      sendSMSNotification(phoneNumber, smsMessage);

      response = `END Your ENS ${ensBasename} has been linked to your number ${phoneNumber}.`;
    } catch (error) {
      console.error('Database error:', error);
      response = 'END Error linking ENS to phone number. Please try again.';
    }
  }

  res.send(response);
};

module.exports = { handleUssd };
