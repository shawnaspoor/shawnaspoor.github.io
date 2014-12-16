$(document).ready(function(){

//this is the error checking on the form
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

  //this is the swipping from page to page action

$( document ).on( "pageinit", "[data-role='page'].memories", function() {

    var page = "#" + $( this ).attr( "id" ),
        next = $( this ).jqmData( "next" ),
        prev = $( this ).jqmData( "prev" );
    if ( next ) {
        $.mobile.loadPage( "memories.html#" +next);
        $( document ).on( "swipeleft", page, function() {
            $.mobile.changePage( "memories.html#" +next, { transition: "slide" });
        });
        $( ".control .next", page ).on( "click", function() {
            $.mobile.changePage( "memories.html#" + next, { transition: "slide" } );
        });
    }
    if ( prev ) {
        $( document ).on( "swiperight", page, function() {
            $.mobile.changePage( "memories.html#" + prev, { transition: "slide", reverse: true } );
        });
        $( ".control .prev", page ).on( "click", function() {
            $.mobile.changePage("memories.html#" + prev, { transition: "slide", reverse: true } );
        });
    };
  });

});


 