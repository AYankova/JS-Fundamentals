//TASK1 &  TASK4

var str = 'something';
var int = 123;
var float = 12.3;
var obj = {
    name: 'Pesho',
    age: 25
};
var arr = [1, 2, 3];
var bool = true;
var func = function() {
    alert('This is a function!');
};
var nullValue = null;
var undef;

//TASK2

var quotedStrFirstWay = '\'How you doin\'?\', Joey said.';
var quotedStrSecondWay = "'How you doin'?', Joey said.";

console.log('TASK 2');
console.log(quotedStrFirstWay);
console.log(quotedStrSecondWay);

//TASK3

var arrVariables = [str, int, float, obj, arr, bool, func, nullValue, undef];

console.log('TASK 3 and TASK 4');
for (var variable in arrVariables) {
    console.log('Type of ' + arrVariables[variable] + ' is ' + typeof(arrVariables[variable]));
}

//VISUALIZATION

document.getElementById("wrapper").style.width = "400px";
document.getElementById("wrapper").style.background = "#fff3b3";

var listOfElements = document.querySelectorAll('[id^="task"]');
for (var count = 0; count < listOfElements.length; count += 1) {
    listOfElements[count].style.color = "red";
    listOfElements[count].style.borderBottom = "1px solid black";
    listOfElements[count].style.borderTop = "1px solid black";
}

var container = document.getElementById('edit'),
    firstChild = container.childNodes[1];

if (container && firstChild) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("contentEditable", "true");
    newDiv.innerHTML = quotedStrFirstWay;
    firstChild.parentNode.insertBefore(newDiv, firstChild.nextSibling);
}

document.getElementById("str").innerHTML = typeof(str);
document.getElementById("int").innerHTML = typeof(int);
document.getElementById("float").innerHTML = typeof(float);
document.getElementById("obj").innerHTML = typeof(obj);
document.getElementById("arr").innerHTML = typeof(arr);
document.getElementById("bool").innerHTML = typeof(bool);
document.getElementById("func").innerHTML = typeof(func);
document.getElementById("null").innerHTML = typeof(nullValue);
document.getElementById("undef").innerHTML = typeof(undef);

var spans = document.getElementsByTagName("span");
for (var i = 0; i < spans.length; i += 1) {
    spans[i].style.background = "skyblue";
}
