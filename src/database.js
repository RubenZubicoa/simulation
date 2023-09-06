const sql = require('mssql');
try{
     sql.connect('mssql://admCastingCalc:akg234FMQV@castingcalc.database.windows.net/optimacasting?encrypt=true');
     console.log('DB is connected');
}catch(err){
    console.log(err)
}
module.exports.sql = sql;