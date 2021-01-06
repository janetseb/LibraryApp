const express= require('express');
const authorsRouter = express.Router();
function Router(nav){
    var authors=[
        {
            
            name:'Barbara',
           details:'Dame Mary Barbara Hamilton Cartland, DBE, DStJ (9 July 1901 – 21 May 2000) was an English novelist who wrote romance novels, one of the best-selling authors as well as one of the most prolific and commercially successful worldwide of the 20th century. Her 723 novels were translated into 38 languages[1] and she continues to be referenced in the Guinness World Records for the most novels published in a single year in 1977',
            img:'barbara.jpg'
        },
        {
            name:'JK Rowling',
            details:'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965), better known by her pen name J. K. Rowling, is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[2][3] becoming the best-selling book series in history.[4] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith.',
            img:'rowling.jpg'
        },
        {
            
            name:'Basheer',
            details:'Vaikom Muhammad Basheer (21 January 1908 – 5 July 1994), also known as Beypore Sultan, was an Indian independence activist and writer of Malayalam literature . He was a writer, humanist, freedom fighter, novelist and short story writer, noted for his path-breaking, down-to-earth style of writing that made him equally popular among literary critics as well as the common man. His notable works include Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu, Janmadinam and Anargha Nimisham and the translations of his works into other languages have earned him worldwide acclaim. The Government of India awarded him the fourth highest civilian honor of the Padma Shri in 1982. He was also a recipient of the Sahitya Academy Fellowship, Kerala Sahitya Academy Fellowship, and the Kerala State Film Award for Best Story.',
            img:'basheerimg.jpg'
        },
        
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
           
            nav,
            title:"Library",
            authors
        });
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("author",
        {
           
            nav,
            title:"Library",
            author: authors[id]
        });
    });
    return authorsRouter;
}


module.exports = Router;