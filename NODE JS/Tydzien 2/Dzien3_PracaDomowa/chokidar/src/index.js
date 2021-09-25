const {watch} = require('chokidar');

watch('./**/*',{
    ignoreInitial:true,
})
.on('all', (event, path)=>{
    console.log(event, path)
})