const express= require('express');
const signupRouter = express.Router();
function Router(navadmin){
    
    signupRouter.get('/',function(req,res){
        res.render("signup",
        {
           
            navadmin,
            title:"Library",
            
        });
    });
   
   
    return signupRouter;
}


module.exports = Router;