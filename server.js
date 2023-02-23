const express=require("express")
const https=require('https')

const app=express()
var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000,function(){
    console.log("Server is running and up")

})

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req,res){
    let s=req.body.dob
    
    s=String(s)
    var num=s.split("-")
    var dig=num.join("")
     var sum=dig.split("")

let tot=0;
for (var i=0; i<sum.length;i++){
   

    tot+=parseInt((sum[i]))
}

res.send(String(tot))
    
});