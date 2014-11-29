$(document).ready(function(){
	//chose the image function
	$('#image').change(function (){
		if($('#image').val() == 'neonShirt'){
			$('#canvas').drawImage({
			source: 'images/neonShirt.jpg',
			x:300,
			y:200,
			width:600,
			height:400
			});
		}else if($('#image').val() == 'moonRise'){
			$('#canvas').drawImage({
			source: 'images/moonRise.jpg',
			x:300,
			y:200,
			width:600,
			height:400
			});
		}else if($('#image').val() == 'nightStrip'){
			$('#canvas').drawImage({
			source: 'images/stripAtNight.jpg',
			x:300,
			y:200,
			width:600,
			height:400
			});
		}else if($('#image').val() == 'hotelRoom'){
			$('#canvas').drawImage({
			source: 'images/hotelRoom.jpg',
			x:300,
			y:200,
			width:600,
			height:400
			});
		}else {
			$('#canvas').drawImage({
			source: 'images/neonShirt.jpg',
			x:300,
			y:200,
			width:600,
			height:400
			});
		}

	});

	//end of image function

	//add text function
	$('#create').click(function(){
		var imgsrc = $('#image').val();
		switch(imgsrc){
			case'neonShirt':
				imgsrc = "images/neonShirt.jpg";
				break;
			case 'hotelRoom':
				imgsrc = "images/hotelRoom.jpg";
				break;
			case 'nightStrip':
				imgsrc = "images/stripAtNight.jpg";
				break;
			case 'moonRise':
				imgsrc = "images/moonRise.jpg";
				break;
			default:
				imgsrc = "images/neonShirt.jpg";
			
		}
		//end of switch
		//adding the text to the image
		function textForImage() {
			var top = $('#top').val().toUpperCase();
			var bottom = $('#bottom').val().toUpperCase();

			$('#canvas').drawText({
				  fillStyle: '#fff',
				  strokeStyle: '#000',
				  strokeWidth: 1,
				  x: 300, y: 30,
				  fontSize: 40,
				  fontFamily: 'Impact, sans-serif',
				  text: top
			}).drawText({
			  	  fillStyle: '#fff',
				  strokeStyle: '#000',
				  strokeWidth: 1,
				  x: 300, y: 370,
				  fontSize: 40,
				  fontFamily: 'Impact, sans-serif',
				  text: bottom
			})
		};
		//end of text to image
		//write it all to the canvas
		$('#canvas').drawImage({
			source: imgsrc,
			x:300,
			y:200,
			width:600,
			height: 400,
			load:textForImage
		});
	});
	//end of add text function




	//make a smiley face appear
	$('#smiley-button').click( function (){
	// Draw a smiley face, also chained methofds
	$('#canvas').drawPolygon({
	  draggable: true,
	  layer: true,
	  strokeStyle: '#fff',
	  strokeWidth: 6,
	  x: 50, y: 50,
	  radius: 25,
	  sides: 3
	}).drawPolygon({
		  draggable: true,
		  layer: true,
		  strokeStyle: '#fff',
		  strokeWidth: 6,
		  x: 120, y: 50,
		  radius: 25,
		  sides: 3
		}).drawArc({
			  draggable: true,
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

	//clear the canvas
	$('#canvas-clear-button').click( function(){
		$('#canvas').clearCanvas();
	});
	//end clear canvas
/*
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
		/*
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

		
*/
});