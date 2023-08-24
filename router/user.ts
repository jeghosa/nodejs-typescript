const express = require("express")
import signu, { loginu } from "../controllers/usersc"

const router= express.Router()


router.post("/sign",signu)

router.route("/login").post(loginu)

export default router