import { sendSMSNotification } from '../controllers/smsController.js';
import eventEmitter from './eventEmitter.js'; // Import the event emitter

// Set up the event listener for 'sendSMS'
eventEmitter.on('sendSMS', async (phoneNumber, message) => {
  try {
    // Send the SMS asynchronously
    await sendSMSNotification(phoneNumber, message);
    console.log('SMS sent successfully.');
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
});
