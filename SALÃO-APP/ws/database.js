const mongoose  = require('mongoose');
const URI = 'mongodb+srv://marianajudice:M85DlEpMxLDEip9C@clusterdev.gp5lojt.mongodb.net/salao-conceito?retryWrites=true&w=majority';


mongoose.connect(URI).then(() => console.log('DB is Up!')).catch(() => console.log(err));