const bcrypt = require('bcrypt')
export default async function checkHash (pass:string , storedpass : string) {
    const ifff = await bcrypt.compare(pass,storedpass);
    return ifff
}