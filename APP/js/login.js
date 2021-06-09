$( document ).ready(function() {
  
    // SUBMIT FORM
      $("#loginForm").submit(function(event) {
      // Prevent the form from submitting via the browser.
      event.preventDefault();
      ajaxPost();
      });
      function ajaxPost(){
          
        // PREPARE FORM DATA
        var formData = {
          email : $("#userName").val(),
          password :  $("#password").val()
        }
