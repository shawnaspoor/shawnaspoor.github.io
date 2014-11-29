
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

          }); //end of dropdown menu functions


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
           }); //end of form validation

           //Make the text in the box disappear when the user clicks on it
            $(document).ready(function(){
              $('#descTextArea').text('Use this area to expand a bit, if you need to.');
            });
            $('#expandeddescription').focusin(function(){
                $('#descTextArea').text(' ');
              
           }); //end of making the text in the box disappear when they click

            //Make the text in the box reappear if the user clicks away without inputting anything
            $('#expandeddescription').focusout(function(){
              if($(!'#descTextArea').val()){
                $('#descTextArea').text('');
              } else {
                $('#descTextArea').text('Use this area to expand a bit, if you need to.');
              }
           });//end of  text in the box disappear


            //Make Banner disappear button
            $('#banner-button').click(function(){
                $('.jumbotron').hide(500);
                $('#no-banner-button').removeClass('hide');
           }); 

           $('#no-banner-button').click(function(){
               console.log('the button was clicked');
                $('.jumbotron').show(500);
                $('#no-banner-button').addClass('hide');
           }); //end of banner disappear button
            

          //hover effect on the hotel page
          $('#hotel1').hover(function(){
            $('#hotel1').css({
                  backgroundColor:'#FFFFFF',
                  padding:'0'
              });
            }, function(){ 
             $('#hotel1').css({
                  mozBorderRadius: '15px',
                  borderRadius: '15px',
                  backgroundColor:'#F2F2f2',
                  padding: '5px'
              });

          }); 
          $('#hotel2').hover(function(){
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
          $('#hotel3').hover(function(){
            $('#hotel3').css({
                 
                  backgroundColor:'#FFFFFF',
                  padding:'0'
              });
            }, function(){ 
             $('#hotel3').css({
                  mozBorderRadius: '15px',
                  borderRadius: '15px',
                  backgroundColor:'#F2F2f2',
                  padding: '5px'
              });

          }); //end of hotel effect


          //make the twitter feed disappear
          $('#no-twitter-button').click(function(){
                //$('#twitterMeThis').show(500);
                $('#centerColumn').removeClass('col-xs-12 col-sm-8 col-md-8');
                $('#centerColumn').addClass('col-xs-12 col-sm-12 col-md-12');
                $('#twitterMeThis').addClass('hide')
           }); //end of twitter button
 
          //form validation based on submit button click
          $('#emailMe').click(function(submit){
              if($('#idea').val().length == 0){
                $('.description .help-block').text('Well, you kind of need to tell me what your idea is.');
                $('.description').attr({
                      class: 'col-sm-12 form-group description has-error'
                });
                submit.preventDefault();
              }else {
                $('#myModal').modal();
                submit.preventDefault();
              }
          }); //end of form validation


          //excited image hover effect
          $('#excited').hover(function(){
            console.log('this button was hover overed, entered the button')
            $('.popup').show(500);
            }, function(){ 
             $('.popup').hide(500);
          });//end of excited image hover effect

          //filtering of all even sections
          $('section:even').css({
              backgroundColor:'#F2F2F2',
              mozBorderRadius: '15px',
              borderRadius: '15px',
              padding: '5px'
          }); //end of filtering




      });
