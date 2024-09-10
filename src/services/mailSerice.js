const nodemailer = require("nodemailer");

const sendConfirmationEmail = async (email, confirmationLink) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Sử dụng dịch vụ email bạn muốn
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Xác nhận email",
    text: `Vui lòng xác nhận email của bạn bằng cách nhấp vào liên kết sau: ${confirmationLink}`,
  };

  await transporter.sendMail(mailOptions);
};
