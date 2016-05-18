'use strict'

const User = require('./models/users');
const nodemailer = require('nodemailer');
const path = require('path');

module.exports = app => {

    app.get('/', function (req, res) {
        res.sendfile('./public/index.html');
    });

    app.get('/api/file?', function (req, res) {
        res.cookie('host', req.headers.host).sendFile(path.join(__dirname, '../public/files/' + req.query.filename + '.doc'));
    });

    app.post('/api/user', (req, res) => {
        let user = new User();
        user.phone = req.body.phone;
        user.email = req.body.email;

        user.save((err) => {
            if (err) return res.send(err);
            res.status(200).send('Success')
        })
    });

    app.get('/api/restore?', (req, res) => {
        const transporter = nodemailer.createTransport('smtps://user@gmail.com:pass@smtp.gmail.com');
        User.findOne({email: req.query.email}, (err, data) => {
            if (err) return res.send(err);
            let mailOptions = {
                from: 'user@gmail.com', // sender address
                to: 'user@gmail.com', // list of receivers
                subject: 'Hello ✔', // Subject line
                text: 'Hello world 🐴', // plaintext body
                html: `<b> Your phone number: ${data._doc.phone}</b>` // html body
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return res.send(error);
                }
                console.log('Message sent: ' + info.response);
                res.send(info.response);
            });
        });

    });
};
