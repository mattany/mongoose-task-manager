const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'mattany@gmail.com',
    from: 'mattany@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually gets to you.'
})