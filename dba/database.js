var mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProjectManager', { useNewUrlParser: true }, function(err){  // For local run
// mongoose.connect('mongodb://mongo:27017/ProjectManager', { useNewUrlParser: true }, function(err){   // For Docker run
        if(!!err){
        console.error(err);
    } else {
        console.log("Connection established successfully..");
    }
});

