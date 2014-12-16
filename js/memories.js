$(document).ready(function(){

  $('button').tap(function(submit){
    if($('#Fall').is(':checked')||$('#Winter').is(':checked') ||
           $('#Spring').is(':checked') || $('#Summer').is(':checked') ) {
        $('.noWhen').text(' ');
        alert('If this form was not make believe you would have submitted the form!');
        submit.preventDefault();
      }else{
         $('.noWhen').text('You gotta tell me when!' );
         submit.preventDefault();
      }
  });

$( document ).on( "pageinit", "[data-role='page'].memories", function() {

    var page = "#" + $( this ).attr( "id" ),
        // Get the filename of the next page that we stored in the data-next attribute
        next = $( this ).jqmData( "next" ),
        // Get the filename of the previous page that we stored in the data-prev attribute
        prev = $( this ).jqmData( "prev" );
    // Check if we did set the data-next attribute
    if ( next ) {
        // Prefetch the next page
        $.mobile.loadPage("memories#"+ next  );
        // Navigate to next page on swipe left
        $( document ).on( "swipeleft", page, function() {
            $.mobile.changePage("memories#" + next, { transition: "slide" });
        });
        // Navigate to next page when the "next" button is clicked
        $( ".control .next", page ).on( "click", function() {
            $.mobile.changePage( "memories#"+ next, { transition: "slide" } );
        });
    }
    // Disable the "next" button if there is no next page
    else {
        $( ".control .next", page ).addClass( "ui-disabled" );
    }
    // The same for the previous page (we set data-dom-cache="true" so there is no need to prefetch)
    if ( prev ) {
        $( document ).on( "swiperight", page, function() {
            $.mobile.changePage( "memories#"+ prev, { transition: "slide", reverse: true } );
        });
        $( ".control .prev", page ).on( "click", function() {
            $.mobile.changePage("memories#"+ prev, { transition: "slide", reverse: true } );
        });
    }
    else {
        $( ".control .prev", page ).addClass( "ui-disabled" );
    };
});













/*


 
  $('main').bind('swiperight', function(event) {
    $('#wheel').removeClass().addClass('wheel2');
    console.log('swipe to the right happened')           
  });
 
   $('main').bind('swipeleft', function(event) {
     $('#wheel').removeClass().addClass('wheel1');  
     console.log('swipe to the left happened')        
  });
  $('main').bind('swiperight', function(event) {
    $('#wheel').removeClass().addClass('wheel3');           
  });
   $('main').bind('swipeleft', function(event) {
     $('#wheel').removeClass().addClass('wheel2');         
  });
  $('main').bind('swiperight', function(event) {
    $('#wheel').removeClass().addClass('stripAtNight');           
  });
   $('main').bind('swipeleft', function(event) {
     $('#wheel').removeClass().addClass('wheel3');         
  });
                 
 */
});


 