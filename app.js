
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
            $(document).ready(function(){
              $('#descTextArea').text('Use this area to expand a bit, if you need to.');
            });
            $('#expandeddescription').focusin(function(){
                $('#descTextArea').text(' ');
              
           }); 
            //Make the text in the box reappear if the user clicks away without inputting anything
            $('#expandeddescription').focusout(function(){
              if($(!'#descTextArea').val()){
                $('#descTextArea').text('');
              } else {
                $('#descTextArea').text('Use this area to expand a bit, if you need to.');
              }
           }); 


            //Make Banner disappear button
            $('#banner-button').click(function(){
                $('.jumbotron').hide(500);
                $('#no-banner-button').removeClass('hide');
           }); 

           $('#no-banner-button').click(function(){
               console.log('the button was clicked');
                $('.jumbotron').show(500);
                $('#no-banner-button').addClass('hide');
           }); 
            

          //hover effect, need two functions because there are 2 things happening, over and out
          $('#hotel1').hover(function(){
            console.log('this button was hover overed, entered the button')
            $('#hotel1').css({
                  mozBorderRadius: '15px',
                  borderRadius: '15px',
                  backgroundColor:'#F2F2f2',
                  padding: '5px'
              });
            }, function(){ 
             $('#hotel1').css({
                  backgroundColor:'#FFFFFF',
                  padding:'0'
              });

          }); 
          //hover effect, need two functions because there are 2 things happening, over and out
          $('#hotel2').hover(function(){
            console.log('this button was hover overed, entered the button')
            $('#hotel2').css({
                  mozBorderRadius: '15px',
                  borderRadius: '15px',
                  backgroundColor:'#F2F2f2',
                  padding: '5px'

              });
            }, function(){ 
             $('#hotel2').css({
                  backgroundColor:'#FFFFFF',
                  padding:'0'
              });

          }); 
          //hover effect, need two functions because there are 2 things happening, over and out
          $('#hotel3').hover(function(){
            console.log('this button was hover overed, entered the button')
            $('#hotel3').css({
                 mozBorderRadius: '15px',
                  borderRadius: '15px',
                  backgroundColor:'#F2F2f2',
                  padding: '5px'
              });
            }, function(){ 
             $('#hotel3').css({
                  backgroundColor:'#FFFFFF',
                  padding:'0'

              });

          }); 


          //make the twitter feed disappear
          $('#no-twitter-button').click(function(){
                //$('#twitterMeThis').show(500);
                $('#centerColumn').removeClass('col-xs-12 col-sm-8 col-md-8');
                $('#centerColumn').addClass('col-xs-12 col-sm-12 col-md-12');
                $('#twitterMeThis').addClass('hide')
           }); 


      });
