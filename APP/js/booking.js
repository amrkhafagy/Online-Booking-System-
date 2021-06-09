$(document).ready(function () {
    ajaxGet();
    function ajaxGet() {

         $.ajax({
              type: "GET",
              contentType: "application/json",
              url: 'http://localhost:3000/Api/v1/user/getalldoctors',
              dataType: 'json',
              success: function (customer) {
                   if (customer.data.length == 0) {

                   }
                   else {




                        for (var i = 0; i < customer.data.length; i++) {



                             $("#doctor").append('<option>' + customer.data[i].name + '</option>');
                        }

                   }

              },
              error: function (e) {
                   alert("Error!")
                   console.log("ERROR: ", e);
              }
         });

    }
})

var todaydate = new Date();
var day = String(todaydate.getDate()).padStart(2, '0');
var month = String(todaydate.getMonth() + 1).padStart(2, '0');
var year = todaydate.getFullYear();
todaydate = year + '-' + month + '-' + day;
document.getElementById("date").min=todaydate;

function logout() {
     localStorage.clear();
     window.location.replace('login.html');
}
$(document).ready(function () {
     var userid = localStorage.getItem("userid");
     //alert("Hello "+localStorage.getItem("username"))
     var user_name= "Hello "+localStorage.getItem("username");
     document.getElementById("hello").innerHTML=user_name;
     if (!userid) {
          alert("Please Login to Access..??");
          window.location.replace('login.html');
     }
     $("#appointment-form").submit(function (event) {
          event.preventDefault();
          ajaxPost();
     });
