$(document).ready(function(){

$('#smiley-button').click( function (){
	// Draw a smiley face, also chained methods
	$('#canvas').drawPolygon({
	  draggable: true,
	  groups:['smiley'],
	  dragGroups:['smiley'],
	  layer: true,
	  strokeStyle: '#fff',
	  strokeWidth: 6,
	  x: 50, y: 50,
	  radius: 25,
	  sides: 3
	}).drawPolygon({
		  draggable: true,
		  groups:['smiley'],
		  dragGroups:['smiley'],
		  layer: true,
		  strokeStyle: '#fff',
		  strokeWidth: 6,
		  x: 120, y: 50,
		  radius: 25,
		  sides: 3
		}).drawArc({
			  draggable: true,
			  groups:['smiley'],
			  dragGroups:['smiley'],
			  layer: true,
			  strokeStyle: '#fff',
			  strokeWidth: 5,
			  x: 80, y: 90,
			  radius: 50,
			  start: 90, end: 230
			});
		//end draw smiley face
	});
	//end click smiley function
	//all the buttons for the canvas
	$('#arrow1').click(function (){
		$('#canvas').drawImage({
			draggable: true,
			layer: true,
	  		source: 'images/arrow1.png',
	  		x: 150, y: 150,
	  		scale: 0.5
		})
	});
	$('#arrow2').click(function (){
		$('#canvas').drawImage({
			draggable: true,
			layer: true,
	  		source: 'images/arrow2.png',
	  		x: 150, y: 150,
	  		scale: 0.5
		})
	});
	$('#arrow3').click(function (){
		$('#canvas').drawImage({
			draggable: true,
			layer: true,
	  		source: 'images/arrow3.png',
	  		x: 150, y: 150,
	  		scale: 0.5
		})
	});
	$('#arrow4').click(function (){
		$('#canvas').drawImage({
			draggable: true,
			layer: true,
	  		source: 'images/arrow4.png',
	  		x: 150, y: 150,
	  		scale: 0.5
		})
	});
	$('#arrow5').click(function (){
		$('#canvas').drawImage({
			draggable: true,
			layer: true,
	  		source: 'images/arrow5.png',
	  		x: 150, y: 150,
	  		scale: 0.5
		})
	});
	$('#dragon').click(function (){
		$('#canvas').drawImage({
			draggable: true,
			layer: true,
	  		source: 'images/dragon.png',
	  		x: 150, y: 150,
	  		scale: 0.5
		})
	});
	$('#dino').click(function (){
		$('#canvas').drawImage({
			draggable: true,
			layer: true,
	  		source: 'images/dino.png',
	  		x: 150, y: 150,
	  		scale: 1.5
		})
	});
	$('#funny').click(function (){
		$('#canvas').drawImage({
			draggable: true,
			layer: true,
	  		source: 'images/funny.png',
	  		x: 150, y: 150,
	  		scale: 1.5
		})
	});
	$('#drinks').click(function (){
		$('#canvas').drawImage({
			draggable: true,
			layer: true,
	  		source: 'images/drinks.png',
	  		x: 150, y: 150,
	  		scale: 0.5
		})
	});

	//end of buttons

//chose the image function
	$('#image').change(function (){
		if($('#image').val() == 'neonShirt'){
			$('#canvas').drawImage({
			source: 'images/neonShirt.jpg',
			layer: true,
			x:300,
			y:200,
			width:600,
			height:400
			});
		}else if($('#image').val() == 'moonRise'){
			$('#canvas').drawImage({
			source: 'images/moonRise.jpg',
			layer: true,
			x:300,
			y:200,
			width:600,
			height:400
			});
		}else if($('#image').val() == 'nightStrip'){
			$('#canvas').drawImage({
			source: 'images/stripAtNight.jpg',
			layer: true,
			x:300,
			y:200,
			width:600,
			height:400
			});
		}else if($('#image').val() == 'hotelRoom'){
			$('#canvas').drawImage({
			source: 'images/hotelRoom.jpg',
			layer: true,
			x:300,
			y:200,
			width:600,
			height:400
			});
		}else {
			$('#canvas').drawImage({
			source: 'images/neonShirt.jpg',
			layer: true,
			x:300,
			y:200,
			width:600,
			height:400
			});
		}

	});
	//end choose image function

	//add text to image
	$('#create').click(function (){
		var top = $('#top').val().toUpperCase();
		$('#canvas').drawText({
			  draggable: true,
			  layer: true,
			  fillStyle: '#fff',
			  strokeStyle: '#000',
			  strokeWidth: 1,
			  x: 300, y: 30,
			  fontSize: 40,
			  fontFamily: 'Impact, sans-serif',
			  text: top,
			  maxWidth:600
		})
	});

	//end add text to image


	//clear the canvas
	$('#canvas-clear-button').click(function(){
		$('#canvas').clearCanvas();
		$('#canvas').removeLayers();
	});
	//end clear canvas

});

