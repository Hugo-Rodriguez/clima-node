// const  require  = require('yargs');

const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad para obtener el clima",
    demand: true,
  },
}).argv;


let getInfo = async ( direccion ) => {

    try{

        let coors = await lugar.getLugarLatLng( direccion );
        let temp  = await clima.getClima( coors.lat, coors.lng  );

        return `El clima en ${ coors.direccion } es: ${temp}º`;

    }catch (e) {

        return `No se pudo determinar el clima en ${ direccion } `;

    }

}


getInfo( argv.direccion )
    .then( mensaje => console.log( mensaje) )
    .catch( e =>  console.log(e) );




// console.log(argv);

// lugar
//   .getLugarLatLng(argv.direccion)
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((e) => console.log(e));

// // console.log(argv.direccion);

//  let lat = -34.6036844;
//  let lng = -58.3815591;

// clima
//   .getClima( lat, lng)
//   .then((temp) => {
//     console.log(`Temperatura actual: ${temp} ºC`);
//   })
//   .catch((e) => console.log(e));
