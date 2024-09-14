const express = require('express');
const app = express();
const path =  require("path");
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,"public")))

// app.get('/', function (req, res) {
//     console.log(req);
//     res.send('<h1>Hello World！</h1>');
// })

app.post("/api/v1/quiz", function(req,res){
    anser = req.body.anser ;
    if(anser === "2"){
        res.send("正解")
    }　else {
        res.send("不正解")
    }
    // res.send(anser);


}
)



app.get('/about', function (req, res) {
    res.send('アバウト')
  })

app.listen(3000,function(){
    console.log("ランニング");
});

console.log("最終行");