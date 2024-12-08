const mongoose = require('mongoose');

const getConnection = async () => {

    try {

        const url = 'mongodb://carlospareja:Mvpemq100v@ac-p1s3uua-shard-00-00.8ncpapw.mongodb.net:27017,ac-p1s3uua-shard-00-01.8ncpapw.mongodb.net:27017,ac-p1s3uua-shard-00-02.8ncpapw.mongodb.net:27017/?ssl=true&replicaSet=atlas-11p57j-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

        await mongoose.connect(url);

        console.log('conexion exitosa');

    } catch (error) {
        console.log(error);
    }

    
}

module.exports = {
    getConnection
}