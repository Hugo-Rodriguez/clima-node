const axios = require("axios");

const getLugarLatLng = async (direccion) => {

  let encodedUrl = encodeURI( direccion );

  let clave = `AIzaSyCCrfzS1qiajVpYnodDydoFNGdmonggM8U`;

  let resp = await axios.
    get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=${clave}`)

    if ( resp.data.status === 'ZERO_RESULTS' ){
    
        throw new Error(`No hay resultados para la ciudad ${ direccion}`);
    }
   
    //  console.log(JSON.stringify(resp.data, undefined, 2));
     // console.log(resp.status);

      let location = resp.data.results[0];
      let coors = location.geometry.location;

    //   let dire = location.formatted_address;
    //   let lat = coors.lat;
    //   let long = coors.lng;

    //   console.log("Direccion: ", dire);
    //   console.log("Latitud: ", lat);
    //   console.log("Longitud  ", long);

      // Direccion:  Buenos Aires, Argentina
      // Latitud:  -34.6036844
      // Longitud   -58.3815591   

  return {
    direccion: location.formatted_address,
    lat: coors.lat,
    lng: coors.lng,
  };
};

// Buenos Aires, Argentina

module.exports = {
    getLugarLatLng
}