const path = require('path');
const nodemailer = require('nodemailer');
let _ = require('lodash')
const ejs = require('ejs');
const fs = require('fs');
var smtpTransport = require('nodemailer-smtp-transport');


let SOURCE_EMAIL = 'krishnkant120@gmail.com';


// Use sensible defaults for SMTP connection pooling
var emailConfig = _.defaults({host: process.env.SMTP_HOST,
		secureConnection: process.env.SMTP_SECURE_CONNECTION === 'true' ? true : false,
		port: parseInt(process.env.SMTP_PORT),
		auth: {
			user: process.env.SMTP_AUTH_USER,
			pass: process.env.SMTP_AUTH_PASSWORD
		}}, {
	maxConnections: 15,
	maxMessages: Infinity
});

let transporter = nodemailer.createTransport(smtpTransport(emailConfig));


module.exports.sendMail = async (data) => {
	console.log(data)
	if (!data.hasOwnProperty('html')) {
		//Get email Template path //Point Folder - Project > emailTemplate
		// let currentPath = path.join(__dirname, '..', 'templates', 'email');
		var templatePath = path.join(__dirname, '..', 'templates', data.template + '.ejs');
		var templateHtml = fs.readFileSync(templatePath, 'utf-8');

		data.html = ejs.render(templateHtml, data);
	}

	let fromEmail = `<${SOURCE_EMAIL}>`;

	let mailOptions = {
		from: fromEmail, // Default From receipent [String]
		to: data.to, // Eamil To receipent [Array or String]
		subject: data.subject, // Email subject [String]
		text: data.html, // Renderer text data [String]
		html: data.html, // Renderer Html data [String]
		// replyTo: data.replyTo,
		ses: {
			// Optional extra arguments for SendRawEmail
			// Not nessasary for the now
		},
		attachments: [] //Default empty attachment [Array[{}]]
	};

	if (data.cc) {
		//If email cc available
		mailOptions.cc = data.cc; //Eamil cc receipent [Array or String]
	}
	if (data.bcc) {
		//If email bcc avaibale
		mailOptions.bcc = data.bcc; //Eamil bcc receipent [Array or String]
	}
	// send mail with defined transport object
	return await transporter.sendMail(mailOptions);
};