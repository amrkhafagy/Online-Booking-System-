$( document ).ready(function() {
  
    // SUBMIT FORM
      $("#loginForm").submit(function(event) {
      // Prevent the form from submitting via the browser.
      event.preventDefault();
      ajaxPost();
    });