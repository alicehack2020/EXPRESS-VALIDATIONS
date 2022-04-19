const { body, validationResult } = require('express-validator');
const registerController={
    register(req,res,next){
        const { first_name, last_name, email, pincode, age, gender } = req.body;
       // const errors = validationResult(req);

       const errors = validationResult(req);
       if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
       }
       else{
        const User={
            first_name,
            last_name,
            email,
            pincode,
            age,
            gender
         }

         res.send(User)
       }


        
        
    }


}


module.exports=registerController;
