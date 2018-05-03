$(document).ready(function() {
    $("#slider").slider({
        animate: false,
        value:1,
        min: 1,
        max: 12,
        step: 0,
        slide: function(event, ui) {
            update(1,ui.value); //changed
        }
    });

    $("#slider2").slider({
        animate: false,
        value:1,
        min: 1,
        max: 90,
        step: 0,
        slide: function(event, ui) {
            update(2,ui.value); //changed
        }
    });

    //Added, set initial value.
    $("#amount").val(0);
    $("#duration").val(0);
    $("#amount-label").text(0);
    $("#duration-label").text(0);
    
    update();
});

//changed. now with parameter
function update(slider,val) {
  //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
  var $amount = slider == 1?val:$("#amount").val();
  var $duration = slider == 2?val:$("#duration").val();

  /* commented
  $amount = $( "#slider" ).slider( "value" );
  $duration = $( "#slider2" ).slider( "value" );
   */
  $total2 =  $duration*3000;
   $total = "KZT" + ($amount * $total2);
   $( "#amount" ).val($amount);
   $( "#amount-label" ).text($amount);
   $( "#duration" ).val($duration);
   $( "#duration-label" ).text($duration);
   $( "#total" ).val($total);
   $( "#total-label" ).text($total);

   $('#slider a').html('<label> '+$amount+' </label>');
   $('#slider2 a').html('<label> '+$duration+'</label>');
}