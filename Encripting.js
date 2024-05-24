const crypto = require('crypto');

// Generate keys
const key = crypto.randomBytes(32); // AES-256 key
const iv = crypto.randomBytes(16); // IV for AES

function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Example usage
const namespace = '1b671a64-40d5-491e-99b0-da01ff1f3341';
const name = 'example';

const encryptedNamespace = encrypt(namespace);
const encryptedName = encrypt(name);

console.log('Encrypted Namespace:', encryptedNamespace);
console.log('Encrypted Name:', encryptedName);

const decryptedNamespace = decrypt(encryptedNamespace);
const decryptedName = decrypt(encryptedName);

console.log('Decrypted Namespace:', decryptedNamespace);
console.log('Decrypted Name:', decryptedName);
