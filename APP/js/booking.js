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

            function ajaxPost() {
                userid
                var id = localStorage.getItem("userid");

                var formData = {
                    date: $("#date").val(),
                    time: $("#time").val(),
                    doctor: $("#doctor").val(),
                    comment: $("#message").val(),
                    user: id,
                    status: "pending"

                }


                console.log("post data", formData);
         

            }
            function resetData() {
                $("#name").val("");
                $("#email").val("");
            }
        });
    }
});