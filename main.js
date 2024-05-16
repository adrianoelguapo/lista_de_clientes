let clientes = [
    {
        nombre: "Adriano",
        apellidos: "Condines Celada",
        descripcion: "Cliente 1 de la mejor empresa del mundo",
        foto: "./images/adriano.jpg"
    },
    {
        nombre: "Bruno",
        apellidos: "Fandño Veiga",
        descripcion: "Cliente 2 de la mejor empresa del mundo",
        foto: "./images/bruno.png"
    },
    {
        nombre: "Noel",
        apellidos: "Santiañez Rodriguez",
        descripcion: "Cliente 3 de la mejor empresa del mundo",
        foto: "./images/noel.jpg"
    },
    {
        nombre: "Javier",
        apellidos: "Pastor Rodríguez",
        descripcion: "Cliente 4 de la mejor empresa del mundo",
        foto: "./images/javi.jpg"
    },
    {
        nombre: "Nico",
        apellidos: "Acuña Marcote",
        descripcion: "Cliente 5 de la mejor empresa del mundo",
        foto: "./images/nico.jpg"
    },
    {
        nombre: "Nico",
        apellidos: "Fernández Mosquera",
        descripcion: "Cliente 6 de la mejor empresa del mundo",
        foto: "./images/nicofer.jpg"
    },
    {
        nombre: "Eder",
        apellidos: "Martínez Castro",
        descripcion: "Cliente 7 de la mejor empresa del mundo",
        foto: "./images/eder.png"
    },
    {
        nombre: "Birhan",
        apellidos: "Fernández Fernández",
        descripcion: "Cliente 8 de la mejor empresa del mundo",
        foto: "./images/birhan.png"
    },
    {
        nombre: "Astor",
        apellidos: "Fernández Estévez",
        descripcion: "Cliente 9 de la mejor empresa del mundo",
        foto: "./images/astor.jpg"
    },
    {
        nombre: "Roberto",
        apellidos: "Castro Liste",
        descripcion: "Cliente 10 de la mejor empresa del mundo",
        foto: "./images/rober.jpg"
    },
    {
        nombre: "David",
        apellidos: "Álvarez Durán",
        descripcion: "Cliente 11 de la mejor empresa del mundo",
        foto: "./images/david.webp"
    }
]

$(function(){

    for (let i = 0; i < clientes.length; i++){
        $(".clientes").append('<div class = "tarjeta">' + '<div class = "fotocliente">' + '<img src = "' + clientes[i].foto + '">' + '</div>' + '<div class = "datoscliente">' + '<div class = "nombrecliente">' + '<p>' + clientes[i].nombre +'</p>' + '</div>' + '<div class = "apellidoscliente">' + '<p>' + clientes[i].apellidos +'</p>' + '</div>' + '<div class = "descripcioncliente">' + '<p>' + clientes[i].descripcion +'</p>' + '</div>' + '</div>' + '</div>')
    } 

    $(".buscador").keyup(function(){
        let valorBusqueda = $(".buscador").val();
        $(".clientes").empty();

        for (let i = 0; i < clientes.length; i++){
            if (clientes[i].nombre.toLowerCase().includes(valorBusqueda.toLowerCase())){
                $(".clientes").append('<div class = "tarjeta">' + '<div class = "fotocliente">' + '<img src = "' + clientes[i].foto + '">' + '</div>' + '<div class = "datoscliente">' + '<div class = "nombrecliente">' + '<p>' + clientes[i].nombre +'</p>' + '</div>' + '<div class = "apellidoscliente">' + '<p>' + clientes[i].apellidos +'</p>' + '</div>' + '<div class = "descripcioncliente">' + '<p>' + clientes[i].descripcion +'</p>' + '</div>' + '</div>' + '</div>');
            }
        }
    });
});
