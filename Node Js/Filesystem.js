const fs = require('fs');
fs.writeFileSync("fs1Test.txt", "this is generated by filesystem.",(err)=>{
    if (err) throw err;
    // else part
    console.log("the file is updated.")
})