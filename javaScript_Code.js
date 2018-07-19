document.addEventListener("keydown",dibujar);
var lienzo= document.getElementById("lienzo");		
var area= lienzo.getContext("2d");
var x=250;
var y=250;
var color="red"; var longitud=10;

var teclas =
{
  UP:38, 
  DOWN:40, 
  RIGHT:39, 
  LEFT:37
};

dibujarLinea("blue",0,0,0,500,area);
dibujarLinea("blue",0,0,500,0,area);
dibujarLinea("blue",500,500,500,0,area);
dibujarLinea("blue",500,500,0,500,area);
dibujarLinea(color,x-1,y-1,x+1,y+1,area);
dibujarLinea(color,x+1,y+1,x-1,y-1,area);

function dibujar(evento)
{
  console.log("se detecto una tecla presionada");

  switch(evento.keyCode)
  {
    case teclas.UP:
    console.log("arriba");
    ar();	
    break;

    case teclas.DOWN:
    console.log("abajo");	
    ab();
    break;

    case teclas.LEFT:
    console.log("izquierda");
    iz();
    break;

    case teclas.RIGHT:
    console.log("derecha");	
    de();
    break;

    default:
    console.log("tecla invalida");
    break;
  }

}

function de()
{
  dibujarLinea(color,x,y,x+longitud,y,area);			
  x=x+longitud;
}

function iz()
{
  dibujarLinea(color,x,y,x-longitud,y,area);
  x=x-longitud;
}

function ar()
{
  dibujarLinea(color,x,y,x,y-longitud,area);
  y=y-longitud;
}

function ab()
{
  dibujarLinea(color,x,y,x,y+longitud,area);
  y=y+longitud;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
{
    lienzo.beginPath();
  lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
