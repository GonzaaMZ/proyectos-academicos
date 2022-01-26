const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base, listar, limite) =>{
    try {
        let salida = "";
        let consola = "";
        let h = limite;

        for(let i = 1; i <= h; i ++){
            salida += (`${base} x ${i} = ${base*i}\n`);
            consola +=  (`${colors.green(base)} x ${i} = ${base*i}\n`);
        }
        
        if(listar){
            console.log("==================".red);
            console.log("   Tabla del ".red,base);
            console.log("==================".red);
        
            console.log(consola.bold.blue);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`.yellow;
    
        
    } catch (err) {
        throw err;  
    }
    
}


module.exports = {
    crearArchivo
}

