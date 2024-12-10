const fs = require('fs') ;
console.log("hello");
console.log("good morning");
//          Read system
// ays
// fs.readFile('data.txt','utf-8',(err , data) =>{  // last ma print kare
//     if(!err)
//     {
//         console.log(data);
//     }
//     else
//     {
//         console.log(err);
        
//     }
// })

// sync
// const data = fs.readFileSync('data.txt','utf-8') //line by line chaek kare
// console.log(data);
 

//        Write system
// ays
// fs.writeFile('data.txt','write system',(err) =>{
//     if(err)
//     {
//         console.log(err);
//     }
// })
// sync
//  fs.writeFileSync('data12.txt','write system sync')


//      append  system
// Sync
// fs.writeFileSync('data12.txt','write system sync')

//      unlink system
fs.unlinkSync('data78.txt')
console.log("good afternoon");
console.log("good night");
