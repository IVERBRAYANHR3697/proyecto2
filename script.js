var tarjetaId = 0;
agregar();
function agregar(){
    
    var newTarjeta = generarTarjetaNueva();

    var tarjetas = document.getElementById("tarjetas");

    var element = document.createElement("div");
    element.className = "card";
    element.id = tarjetaId;
    element.innerHTML = newTarjeta;
    tarjetas.appendChild(element);
    tarjetaId++;

    verificarSiPuedeAgregarOQuitar();

}

function eliminar(){

    var tarjetas = document.getElementById("tarjetas");
    var ultimoElemento = tarjetas.childNodes[tarjetas.childNodes.length-1];
    
    tarjetas.removeChild(ultimoElemento);
    tarjetaId--;
    verificarSiPuedeAgregarOQuitar();

}

function verificarSiPuedeAgregarOQuitar(){

    
    var botonAgregar = document.getElementById("botonAgregar");
    var botonEliminar = document.getElementById("botonEliminar");
    if(tarjetaId >= 10)
    {
        botonAgregar.disabled = true;
        botonAgregar.style.backgroundColor = 'hsl(234, 9%, 50%)';
    }else if(tarjetaId <= 0)
    {
        botonEliminar.disabled = true;
        botonEliminar.style.backgroundColor = 'hsl(234, 9%, 50%)';
    }else{
        
        botonEliminar.style.backgroundColor = 'hsl(217, 54%, 11%)';
        botonAgregar.style.backgroundColor = 'hsl(217, 54%, 11%)';
        botonEliminar.disabled = false;
        botonAgregar.disabled = false;
    }
    

}

function generarTarjetaNueva (){
    var html =   
      '<div class="card-view">'+
        '<img class="card-view-img" src="images/icon-view.svg" alt="">'+
     ' </div>' +
      '<img class="card-equilibrium-img" src="images/image-equilibrium.jpg" alt="Equilibrium">' +
      '<h1>'+
        'Equilibrium #3429'+
      '</h1>'+
      '<p>'+
        'Our Equilibrium collection promotes balance and calm.'+
      '</p>'+
      '<div class="card-caracteristics">'+
        '<div class="card-caracteristics-icon">'+
          '<div class="card-price">'+
            '<img src="images/icon-ethereum.svg" alt="Ethereum icon">'+
            '<span>0.041 ETH</span>'+
          '</div>'+
          '<div class="card-daysleft">'+
            '<img src="images/icon-clock.svg" alt="Clock icon">'+
            '<span>3 days left</span>'+
          '</div>'+
        '</div>'+
        '<div class="card-avatar">'+
          '<img src="images/image-avatar.png" alt="Avatar image">  '    +
          '<p>Creation of <span>Jules Wyvern</span></p>'+
        '</div>'+
      '</div>';

    return html;
}
