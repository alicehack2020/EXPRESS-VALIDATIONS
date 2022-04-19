const express=require("express")
const router=express.Router()
const registerController=require("../controller/register")
const { body, validationResult } = require('express-validator');



router.post('/register',
body('first_name').not().isEmpty().withMessage("first_name required"),
body('last_name').not().isEmpty().withMessage("last_name required"),
body('email').not().isEmpty().withMessage("email required").isEmail(),
body('pincode').not().isEmpty().isLength({min: 6}).withMessage('pincode must be 6 digit'),
body('age').not().isEmpty().isInt({min: 1,max:100}).withMessage('age limi 1 to 100'),
body('gender').not().isEmpty().withMessage("please enter gender"),
registerController.register);
module.exports=router;