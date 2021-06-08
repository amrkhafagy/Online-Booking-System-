$(document).ready(function () {
    ajaxGet();
    function ajaxGet() {

    

        var todaydate = new Date();
        var day = String(todaydate.getDate()).padStart(2, '0');
        var month = String(todaydate.getMonth() + 1).padStart(2, '0');
        var year = todaydate.getFullYear();
        todaydate = year + '-' + month + '-' + day;
        document.getElementById("date").min = todaydate;

        function logout() {
            localStorage.clear();
            window.location.replace('login.html');
        }
        $(document).ready(function () {
            var userid = localStorage.getItem("userid");
            //alert("Hello "+localStorage.getItem("username"))
            var user_name = "Hello " + localStorage.getItem("username");
            document.getElementById("hello").innerHTML = user_name;
            if (!userid) {
                alert("Please Login to Access..??");
                window.location.replace('login.html');
            }
            $("#appointment-form").submit(function (event) {
                event.preventDefault();
                ajaxPost();
            });


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