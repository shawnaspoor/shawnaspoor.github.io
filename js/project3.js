$(document).ready(function(){
	

	
	//make a smiley face appear
	$('#smiley-button').click( function (){
	// Draw a smiley face, also chained methofds
	$('#canvas').drawPolygon({
	  strokeStyle: '#000',
	  strokeWidth: 6,
	  x: 100, y: 100,
	  radius: 25,
	  sides: 3
	}).drawPolygon({
		  strokeStyle: '#000',
		  strokeWidth: 6,
		  x: 200, y: 100,
		  radius: 25,
		  sides: 3
		}).drawArc({
			  strokeStyle: '#000',
			  strokeWidth: 5,
			  x: 150, y: 140,
			  radius: 50,
			  start: 90, end: 230
			});
		//end draw smiley face
	});
	//end click smiley function

	//clear the canvas
	$('#canvas-clear-button').click( function(){
		$('#canvas').clearCanvas();
	});
	//end clear canvas

		//make the smile larger on mouse roll over
		
		/*$('#canvas').drawArc({
			  layer: true,
			  name: 'smile',
			  fillStyle: '#000',
			  strokeStyle: '#000',
			  strokeWidth: 5,
			  x: 150, y: 140,
			  radius: 50,
			  start: 90, end: 270
			});
		*/
	$('#canvas').drawText({
		layer:true,
		name:'text',
		  fillStyle: '#000',
		  strokeStyle: '#000',
		  strokeWidth: 1,
		  x: 300, y: 20,
		  fontSize: 30,
		  fontFamily: 'Georgia, serif',
		  text: 'Paint me like one of your french girls'
		});
		$('#canvas').animateLayer(0, {
				x:300, 
				y:350
				}, 2000);
		

		

});