const Africastalking = require('africastalking');
const africastalking = Africastalking({
  apiKey: process.env.AFRICASTALKING_API_KEY,
  username: process.env.AFRICASTALKING_USERNAME
});

const sms = africastalking.SMS;

const sendSMSNotification = async (phoneNumber, message) => {
  try {
    const response = await sms.send({
      to: [phoneNumber],
      message: message,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};


module.exports = { sendSMSNotification };