import bcrypt from "bcrypt";

const saltRounds = 15;

export default bcrypt.genSaltSync(saltRounds);
