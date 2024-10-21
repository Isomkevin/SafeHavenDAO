import Africastalking from 'africastalking';

// Initialize Africa's Talking API
const africastalking = Africastalking({
  apiKey: process.env.AFRICASTALKING_API_KEY,
  username: process.env.AFRICASTALKING_USERNAME
});

const shortCode = process.env.AFRICASTALKING_SHORTCODE

const sms = africastalking.SMS;

// Function to send an SMS
export const sendSMSNotification = async (phoneNumber, message, senderCode=shortCode) => {
  try {
    const response = await sms.send({
      to: [phoneNumber],
      from: senderCode,
      message: message,
    });
    console.log(`${phoneNumber} SMS response:`, response);
  } catch (error) {
    console.error(`Error sending SMS to ${phoneNumber}:`, error);
  }
};