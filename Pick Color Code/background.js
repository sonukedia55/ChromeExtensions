
$(function(){
  $('#val').hide();
  $('#val').css({'transform':'scale(0)'});
  $('.js-color').click(function(){

    var cc = $(this).data('hex');

        var textArea = document.createElement("textarea");

         textArea.value = cc;

         document.body.appendChild(textArea);

         textArea.select();

         try {
           var successful = document.execCommand('copy');
           var msg = successful ? 'successful' : 'unsuccessful';
           console.log('Copying text command was ' + msg);
         } catch (err) {
           console.log('Oops, unable to copy');
         }

         document.body.removeChild(textArea);

        $('#val').val("Successfully Copied "+cc);
        $('#val').fadeIn();
        $('#val').css({'transform':'scale(1)'},1000);
  });
});
