function setup() { //Se llama y se ejecuta una sola vez. Se puede usar para establecer valores predeterminados para tu proyecto.
  createCanvas(800, 600); //w x h 
//El lienzo tiene un sistema de coordenadas invisible que comienza en la 
//posición horizontal 0 y vertical 0 en la esquina superior izquierda.
}
function draw() { //se llama directamente después de setup() y ejecuta las líneas de código dentro de sus llaves 60 veces por segundo hasta que el programa se detiene o se llama a la función noLoop().
//Cielo (background)
//los tres argumentos que se observan en el código representan los valores para rojo, verde y azul (RGB), los cuales corresponden al color azul que se muestra en el lienzo.
   background(135, 206, 235);//La función background() y otros comandos de p5.js, como los relacionados con formas, también son funciones. La función background() cambia específicamente el color del fondo del lienzo.
//Sol (circle)
  fill("yellow"); //Todas las formas serán blancas por defecto. Para cambiar el color de cualquier forma en el canvas, debes llamar a la función fill() antes de dibujar la forma.
  stroke("orange");
  strokeWeight(10)   
  circle(690,100,150);
//El primer argumento es la coordenada x del punto central (690). Esto significa que el centro está ubicado 550 píxeles a la derecha del borde izquierdo del lienzo. 
//El segundo argumento (100) es la coordenada y del punto central. Esto significa que el centro está 50 píxeles debajo del borde superior del lienzo
//El tercer argumento (150) es el tama;o de la circunferencia, 50px de ancho y 50px de alto = 100  
//Pasto
  fill("green");
  stroke("green");
  rect(0,400,800,600);//los primeros dos parametros corresponden a x e y y los otros dos a el with y el height
//Arbol 
  textSize(180);
  text("​🌲​",80,390);
//Conejo
  textSize(60);
  text("🐇​",mouseX,mouseY);
}                          
 