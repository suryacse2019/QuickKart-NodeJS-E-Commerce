// addEmailJob.js
import { Queue } from "bullmq";

async function sendEmailJob() {
  await emailQueue.add('sendEmail', {
    to: 'user@gmail.com',
    subject: 'Welcome!',
    text: 'Hello, this email is sent using queue 🚀',
  });

  console.log('Email job added');
}

sendEmailJob();