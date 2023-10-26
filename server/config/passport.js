import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt"
import * as dotenv from "dotenv";
import userModel from "../models/userModel.js";



dotenv.config();
const opts = {
    secretOrKey: process.env.TOKEN_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};


//* Define Strategy
const JwtPassportStrategy = new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
        const user = await userModel.findOne(jwt_payload.sub)
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
});

//* Use Strategy with passport

const passportConfig = (passport) => {
    passport.use(JwtPassportStrategy);
}

export default passportConfig;