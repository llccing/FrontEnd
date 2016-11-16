var fs = require('fs'),
    files = [];

function walk(path){
    var dirList = fs.readdirSync(path);
    dirList.forEach(function(item){
        if(fs.statSync(path + '/'+item).isDirectory()){
            walk(path + '/' + item);
        }else{
            files.push(path+'/'+item);
        }
    });
}

walk('./js');
console.log(files);