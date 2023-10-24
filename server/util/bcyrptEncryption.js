import bcyrpt from "bcrypt"


const hashPassword = async (userPassword) => {

    const saltRounds = 10;
    const salt = await bcyrpt.genSalt(saltRounds);
    const hashedPassword = await bcyrpt.hash(userPassword, salt);
    // console.log('hashedPassword', hashedPassword)

    return hashedPassword
};
const verifypassword = async (userPassword, hashedPassword) => {
    try {
        const isVerified = await bcyrpt.compare(userPassword, hashedPassword);
        // console.log('isMatch', isMatch)
        return isVerified

    } catch (error) {
        console.log('error', error)
    }
}
export { hashPassword, verifypassword };