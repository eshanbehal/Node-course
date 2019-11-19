const fs = require('fs');
//more fs methods.

//delete a file
fs.unlink("file.txt", err =>
{
    if(err){
        console.log(`Error: ${err}`);
    }else{
        console.log("file.txt has been deleted");
    }
});