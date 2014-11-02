
      $(document).ready(function(){

          //change for drop down menu
          $('#scale').change(function(){
              if( $('#scale').val() == '1')
              {
                $('.scale-group .scale-block').text('1? Why even waste your time with the form?');
              }else  if( $('#scale').val() == '2') {
                  $('.scale-group .scale-block').text('I would not have wasted my time on a 2, to each their own.');
              }else  if( $('#scale').val() == '3') {
                  $('.scale-group .scale-block').text('So about how much you want that candy bar across the room?');
              }else  if( $('#scale').val() == '4') {
                  $('.scale-group .scale-block').text('This should be interesting.');
              }else if( $('#scale').val() == '5') {
                  $('.scale-group .scale-block').text('Something you actually want to do!');
              } else {
                 $('.scale-group .scale-block').text('Is this some sort of a game to you?');
              }

          });
           //end of dropdown menu functions


           //form validation
           $('#idea').focusout(function(){
              if($('#idea').val().length == 0){
                $('.description .help-block').text('Well, you kind of need to tell me what your idea is.');
                $('.description').attr({
                      class: 'col-sm-12 form-group description has-error'
                });
              } else {
                $('.description .help-block').text(' ');
                 $('.description').attr({
                      class: 'col-sm-12 form-group description'
                });
              }


           }); 


           //REVIST ALL DESCRIPTION FOCUSIN AND OUT FUNCTIONS 
           //Make the text in the box disappear when the user clicks on it
            $('#expandeddescription').focusin(function(){
                $('.desc-block').text(' ');
              
           }); 
            //Make the text in the box reappear if the user clicks away without inputting anything
            $('#expandeddescription').focusout(function(){
              if($('.descTextArea').val().length == 0){
                $('.desc-block').text('Use this area to expand a bit, if you need to.');
              } else {
                $('.desc-block').text(' ');
              }
           }); 


               


      });
