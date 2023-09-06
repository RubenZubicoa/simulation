const sql = require('mssql');

async function simulation(req, res){
        await sql.connect('mssql://admCastingCalc:akg234FMQV@castingcalc.database.windows.net/optimacasting?encrypt=true');
         console.log('DB is connected');

    try {
        
        const data = await sql.query("select * from formulas_simulacion")
        res.json(data)
    } catch (error) {
        res.status(400).send("Error")
    }
}

module.exports.simulation = simulation