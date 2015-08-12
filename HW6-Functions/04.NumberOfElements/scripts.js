function countDivs() {
    var count = document.getElementsByTagName('div').length;

    return count;
}

function test() {
    document.getElementById("div-10").innerHTML = countDivs() + ' divs';
    console.log(countDivs() + ' divs total, colored in yellow and green');
    document.getElementById("div-1").style.background = "green";
    document.getElementById("div-2").innerHTML = 'div 2';
    document.getElementById("div-2").style.background = "yellow";
    document.getElementById("div-3").innerHTML = 'div 3';
    document.getElementById("div-3").style.background = "green";
    document.getElementById("div-4").innerHTML = 'div 4';
    document.getElementById("div-4").style.background = "yellow";
    document.getElementById("div-5").innerHTML = 'div 5';
    document.getElementById("div-5").style.background = "green";
    document.getElementById("div-6").innerHTML = 'div 6';
    document.getElementById("div-6").style.background = "yellow";
    document.getElementById("div-7").innerHTML = 'div 7';
    document.getElementById("div-7").style.background = "green";
    document.getElementById("div-8").innerHTML = 'div 8';
    document.getElementById("div-8").style.background = "yellow";
    document.getElementById("div-9").innerHTML = 'div 9';
    document.getElementById("div-9").style.background = "green";
    document.getElementById("div-10").style.background = "yellow";
    document.getElementById("div-10").style.width = "150px";
    document.getElementById("div-10").style.textAlign = "center";
}
