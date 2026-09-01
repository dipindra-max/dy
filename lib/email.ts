import nodemailer from 'nodemailer';
export async function sendContactNotification(data:{name:string,email:string,subject:string,message:string}) {
  const {SMTP_HOST,SMTP_PORT,SMTP_USER,SMTP_PASSWORD,SMTP_FROM,CONTACT_TO_EMAIL}=process.env;
  if(!SMTP_HOST||!SMTP_USER||!SMTP_PASSWORD||!SMTP_FROM||!CONTACT_TO_EMAIL)return {sent:false,reason:'SMTP not configured'};
  const transporter=nodemailer.createTransport({host:SMTP_HOST,port:Number(SMTP_PORT||587),secure:Number(SMTP_PORT||587)===465,auth:{user:SMTP_USER,pass:SMTP_PASSWORD}});
  await transporter.sendMail({from:SMTP_FROM,to:CONTACT_TO_EMAIL,replyTo:data.email,subject:`Website contact: ${data.subject}`,text:`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`});
  return {sent:true};
}
