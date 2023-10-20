import bcyrpt from "bcrypt"


const hashPassword = async (userPassword) => {

    const saltRounds = 10;
    const salt = await bcyrpt.genSalt(saltRounds);
    const hashedPassword = await bcyrpt.hash(userPassword, salt);
    // console.log('hashedPassword', hashedPassword)

    return hashedPassword;

};

export { hashPassword };