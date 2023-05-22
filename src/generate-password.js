
const generatePassword = require ('generate-password');

// generer un mot de passe aleatoire
const password = generatePassword.generate();

console.log(password);