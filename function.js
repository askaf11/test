function getInfo() {
    var http = new XMLHttpRequest();
    http.open("GET", "https://askaf11.github.io/test/data.json", false);
    http.send();

    if (http.readyState == 4 && http.status == 200) {
        var result = http.responseText;
        var obj = JSON.parse(result);
        var txt = "";
        for (var i = 0; i <= 4; i++) {
            txt += "<tr>" +
                "<td>" + obj.users[i].username + "</td>" +
                "<td>" + obj.users[i].age + "</td>" +
                "<td>" + obj.users[i].gender + "</td>" +
                "<td>" + obj.users[i].mail + "</td>" +
                "<td>" + obj.users[i].phone + "</td>"
            "</tr>";
        }
        document.getElementById("id").innerHTML = "<tr>" +
            "<th>" + "UserName" + "</th>" +
            "<th>" + "Age" + "</th>" +
            "<th>" + "Gender" + "</th>" +
            "<th>" + "Mail" + "</th>" +
            "<th>" + "Phone" + "</th>" +
            "</tr>" + txt;
    };
}
