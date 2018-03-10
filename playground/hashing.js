const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// var SHA256 = crypto.createHash('sha256');
const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$qfhVSqh63xDvt4JRKP68..79GR0z05ngRIzmqUq3ejNyyeK3kp2cW';
bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);

// var message = 'I am user number 3';

// // SHA256.update(message);
// // var hash2 = SHA256.digest('hex');

// var hash = crypto.createHash('sha256').update(message).digest('hex');

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: crypto.createHash('sha256').update(JSON.stringify(data) + 'somesrcret').digest('hex')
// }

// // token.data.id = 5;
// // token.hash = crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');

// var resultHash = crypto.createHash('sha256').update(JSON.stringify(data) + 'somesrcret').digest('hex')

// if (resultHash === token.hash) {
//     console.log('Data was not changed')
// } else {
//     console.log('Data was changed');
// }

