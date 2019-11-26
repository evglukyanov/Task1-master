const Books=require('./Books')
console.log(Books)
const app=require('express')()
// allow CORS for all http-GET
app.get('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get("/api/books", (req, res) => {
    res.send( Books.map((x)=> {
        return {"id": x.id, "title": x.name}
    }))
   })

app.get("/api/book/:book_id", (req, res) => {
    const ID = req.params.book_id
    let book = Books.find((x)=> x.id == ID )
    res.send (book)
 });
app.listen(30000, ()=>{console.log('Server started')})