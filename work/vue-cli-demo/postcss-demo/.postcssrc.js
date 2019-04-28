const autoprefixer = require("autoprefixer");;
module.exports={
    plugins:[
        autoprefixer({
            browsers:['>0%']
            // browsers:['last 2 version']
        })
    ]
}
