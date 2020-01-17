const express = require('express');
const PORT = process.env.PORT || 8080; //jos porttia ei ole asetettu ympäristömuuttujaan, käytä porttia 8080
let app = express();

//app.use(); kuunnellaan kaikkia sisääntulevia viestejä
//app.get(); 
//app.post();

app.use((req, res, next) => { //next parametri on "jatka seuraavaankin kuuntelijaan"
    console.log(`path: ${req.path}`);
    next(); // "seuraava kuuntelija"
});




app.get('/', (req, res, next) => {
    res.send('Hello world');
    //res.write
    //res.end();
});

app.get('/', (req, res, next) => {
    res.send('Hello world3');
    //res.write
    //res.end();
});



app.use((req, res, next) => {
    res.status(404);
    res.send(`
    page not found`)


})


app.listen(PORT);