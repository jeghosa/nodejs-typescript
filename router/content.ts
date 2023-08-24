

import createi from  "../controllers/icont"
const  {geti} = require("../controllers/icont")
const router = require("express").Router()


router.post("/", createi)

router.get("/", geti)

export default router