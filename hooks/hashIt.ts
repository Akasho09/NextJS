const bcrypt = require('bcrypt');
const saltRounds = 3;

export default async function hashIt (pass : string) {

const salt = await bcrypt.genSalt(saltRounds);
const hashedPass = await bcrypt.hash(pass ,salt);
return hashedPass;
}