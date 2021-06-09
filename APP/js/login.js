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
        console.log("post data",formData);
        // DO POST
        $.ajax({
        type : "POST",
        contentType : "application/json",
        url : 'http://localhost:3000/Api/v1/user/signin',
        data : JSON.stringify(formData),
        dataType : 'json',
        success : function(customer) {
          // alert("Login Success");
          console.log("dsfsfsdfsfsd",customer);
          localStorage.setItem("email", customer.data.email);
          localStorage.setItem("userid", customer.data._id);
          localStorage.setItem("username", customer.data.name);

          window.location.replace('index.html');
        },
