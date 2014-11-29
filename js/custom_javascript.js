  <script>
      $(document).ready(function(){
          //for error checking
          console.log("Document loaded");
          //playing with fadeout and chaining functions
          $('aside').fadeOut(2000).fadeIn(2000);
          //playing with slideup
          $('header').slideUp(2000);

          //css manipulation and how to apply style to more than one document object
          $('#menu-1544', "#menu-1545").css({
              border: "1px solid red",
              fontSize: "24px"
          });

          //p css
          $('p:even').css({
              color: "white",
              backgroundColor: "green"

          });
          //footer   
          $('footer ul li:last, nav ul li:first, aside ul li:last').fadeOut(2000).fadeIn(1000);

          //click button for message
          $('nameOfButton').click(function(){
              console.log('the button was clicked');
              //alert is a pop up window that will display what is in the parantheses
              alert('alert box text');

          });

          //hover effect, need two functions because there are 2 things happening, over and out
          $('id-of-class-of-what-you-need-chosen').hover(function(){
            console.log('this button was hover overed, entered the button')
            $('something-selected-based-on-id-or-class').css({
                  backgroundColor:'red'
              });
            }, function(){ console.log('the button was left behind, left the button')

          });

           //button functions

           $('#buttonid').click(function(){
                $('#idOfWhatYouWantToDisappear').hide(//you can add time in miliseconds);

           }); 

             $('#buttonid').click(function(){
                $('#idOfWhatYouWantToShow').show(//you can add time in miliseconds);

           }); 

           //two action button
            $('#buttonid').click(function(){
                $('#idOfWhatYouWantToAction').animate({
                  //actions
                  opacity: '0.25',
                  height: 'toggle'

                } /*time it should happen during */5000, 'swing'/*makes the animation non-linear*/);

           }); 
          //call back function
           $('#buttonid').click(function(){
               $('#idOfWhatYouWantToAction').animate({
                  //actions
                  opacity: '0.25',
                  height: 'toggle'

                } 5000, 'swing' /*from the comma it ehf call back function*/
                , function(){
                   $('#idOfWhatYouWantToAction').css({
                    //stuff!
                    opacity: '1'
                   });
                });

          });

           //adding and changing text and classes

            $('#selectsomethingid_buttonprobably').click(function(){
                $('#idOfWhatYouWantToShow').removeClass('className');
                $('#idOfWhatYouWantToShow').addClass('className');

                //execute a series of functions (same as above can write as you like)
                $('#idOfWhatYouWantToShow').removeClass('className').addClass('className');

                $('#idOfWhatYouWantToShow').text('The text that you want switched out');
                $('#idOfWhatYouWantToShow').prepend('Can be HTML or a db call The text that you want switched out');
                $('#idofwhatyouwanttomanipulate').replaceWith('Can be HTML or a db call The text that you want switched out');


              //image swaps
              $('#selectSomething0').hover(function({
                  $('choosetheimage').attr({
                        'src' : 'image-path'  
                        'class' : 'newClass' //when you do this you need to type in everything ecause it will complete reset all class information associated with that image

                      });
                  }), function(){
                        'src' : 'image-path'  
                        'class' : 'newClass'
                  });
               


      });




  </script>
