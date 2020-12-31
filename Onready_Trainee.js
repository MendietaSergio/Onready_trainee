let autos = [
        {
            marca : 'Peugeout',
            modelo : "206",
            puertas : 4,
            precio : '200.000,00',
        },
        {
            marca : "Honda",
            modelo : "Titan",
            cilindrada : "125cc",
            precio : '60.000,00',
        },
        {
            marca : "Peugeout",
            modelo : "208",
            puertas : 5,
            precio : '250.000,00',
        },
        {
            marca : "Yamaha",
            modelo : "YBR",
            cilindrada : "160cc",
            precio : '85.500,50',
        }
]
//FIN DEL OBJETO

function vehiculoCaro(autos){
    let precioAuto =0;
    let masCaro = "";
    autos.forEach(auto=> {
        
        if(precioAuto<=parseFloat(auto.precio)){
            precioAuto = parseFloat(auto.precio);
            masCaro="El vehiculo mas caro es el "+auto.marca+" "+auto.modelo;
        }
    });
    return console.log(masCaro);
    
}

console.log(autos);
console.log(vehiculoCaro(autos));
