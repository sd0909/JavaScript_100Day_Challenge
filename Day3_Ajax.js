//Ajax 非同步處理  (Asynchronous JavaScript and XML)

//The XMLHttpRequest Object
var xhttp = new XMLHttpRequest();

//GET or POSt
//GET is faster than POST,and can be used in most cases
//However,always use POST requests when
//1.A cached file is not an option
//2.Sending a large amount of data to the server (POST has no size limitations).
//3.Sending user input (which can contain unknown characters), POST is more robust and secure than GET.

//GET
xhttp.open("GET", "asp or php", true);
xhttp.send();

//POST
xhttp.open("POST","asp or php" ,true);
xhttp.send();



