import express from "express"
const router = express.Router();

import signupHandler from "../controller/signupController.js"
import loginHandler from "../controller/loginController.js"

router.route('/signup')
.post(signupHandler)

router.route('/login')
.post(loginHandler);

export default router