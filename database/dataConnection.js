const mongoose = require('mongoose');
module.exports = {
    connect :() => connect()
    
}
function connect  () {
return mongoose.connect('mongodb://netsparkcosmos:Lo5Y6l01Dd0YUkHGYYLorizWQOBuQmQlO8caHESAD3pHyVMIOfeMIU52uquqhhc5Cl3DDZJ0cuVjHnFjOMJUwA%3D%3D@netsparkcosmos.documents.azure.com:10255/?ssl=true&replicaSet=globaldb', {
        auth: {
            user: 'netsparkcosmos',
            password: 'Lo5Y6l01Dd0YUkHGYYLorizWQOBuQmQlO8caHESAD3pHyVMIOfeMIU52uquqhhc5Cl3DDZJ0cuVjHnFjOMJUwA=='
        }
    })
}