const axios = require("axios")

const getClima = async (lat, lng) => {

    let clave = 'e47ab259de3f76ead97038482d3ffb43';


     // Direccion:  Buenos Aires, Argentina
      // Latitud:  -34.6036844
      // Longitud   -58.3815591  
    // let lat = -34.6036844;
    // let lng = -58.3815591 

    //  api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
    let resp = await axios.
        get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${clave}`)

    return resp.data.main.temp ;


};


module.exports = {
    getClima
}


// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}