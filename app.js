const express= require('express');


const app= express();

const nav = [
    {link:"/books",name:"Books"},
    {link:"/Authors",name:"Authors"},
    {link:"/login",name:"Login"},
    {link:"/signup",name:"Signup"},
 

];
const navadmin = [
  
    {link:"/login",name:"Login"},
 

];


const booksRouter = require('./src/routes/bookRoute')(nav);
const authorsRouter = require('./src/routes/authorRoute')(nav);
const signupRouter = require('./src/routes/signupRoute')(navadmin);
const loginRouter = require('./src/routes/loginRoute')(nav);





app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

app.get('/',function(req,res){
    res.render("index",
    {
       
        nav,
        title:"Library"
    });
});



app.listen(5000);
