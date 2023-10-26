import passport from "passport"


//* Turn passport into a middleware, so we can use it in our routes
const jwtAuth = passport.authenticate("jwt", { session: false })


export default jwtAuth;