<canvas width="600" height="400"></canvas>

<script>
function desenhaQuadrado(x, y, cor){
	var tela = document.querySelector('canvas');
	var pincel = tela.getContext('2d');

	pincel.fillStyle = cor;
	pincel.fillRect(x, y, 50, 50);//coordenada x horizontal superior, coordenada y vertical esquerda.
	pincel.fillStroke = 'black';
	pincel.strokeRect(x, y, 50 , 50);//borda
}
/*
var x = 0;
while(x < 600){
desenhaQuadrado(x, 0, 'green');
desenhaQuadrado(x, 50, 'red');
desenhaQuadrado(x, 100, 'blue');
x = x + 50; //50
}
*/


for (var x = 0; x <600; x = x + 50 ) {
	desenhaQuadrado(x, 0, 'green');
	
}






</script>
