const express= require('express');
const booksRouter = express.Router();
function Router(nav){
    var books=[
        {
            title:'TOM N JERRY',
            author:'Barbara',
            genre:'cartoon',
            img:'tomnjerry.jpg'
        },
        {
            title:'HARRY POTTER',
            author:'Barbara',
            genre:'fantasy',
            img:'harrypotter.jpg'
        },
        {
            title:'PATHUMAYUDE ADDU',
            author:'Basheer',
            genre:'Drama',
            img:'basheer.jpg'
        },
        {
            title:'TOM N JERRY',
            author:'Barbara',
            genre:'cartoon',
            img:'tomnjerry.jpg'
        },
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
           
            nav,
            title:"Library",
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("book",
        {
           
            nav,
            title:"Library",
            book: books[id]
        });
    });
    
    return booksRouter;
}


module.exports = Router;