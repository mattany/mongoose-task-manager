const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mattany@gmail.com',
        subject: 'Welcome to task app!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mattany@gmail.com',
        subject: 'Bye!',
        text: `Sorry ${name}. I hope next time you enjoy the app more.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}