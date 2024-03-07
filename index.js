// const arr=[2,4,7,1,3,8,3]
// let ans=arr.filter((i)=>{
//     //console.log(i)
//     return i>3
// })

// const fs=require('fs')
// fs.writeFileSync("file.txt","this is my first file")
// const path=fs.path("file.txt")
// const con=fs.readSync()
// console.log(con.toString)
//
//const http=require('http')
//http.createServer((req,res)=>{
//    res.write("<h1>Hello server</h1>")
//    res.end();
//}).listen(8000);

//const color=require('colors')
//console.log("hello".red)
//console.warn("hello programmer")
//console.log("hello coder")

const fs=require('fs')
const path=require('path')
const dirpath=path.join(__dirname,'files');

//fs.writeFileSync("main.txt","this is new file");
for(i=0;i<5;i++){
  fs.writeFileSync(dirpath+"/main"+i+".txt","this is new file"+" "+i);
}
fs.readdir(dirpath,(err,files)=>{
files.forEach((item)=>{
//console.log(item);
})
})


















