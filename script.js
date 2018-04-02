


(function(){
    // do some stuff
	var d = new Date(); // for now
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
console.log(d.getHours());
if(h>12)
{
    h= h-12;
    if (h<=9)
        h = ('0' + h).slice(-2);
    document.getElementById("h").innerHTML = h+":";
}
else
    document.getElementById("h").innerHTML=h+":";
if(h>12)
    document.getElementById("am-pm").innerHTML="PM";
else
    document.getElementById("am-pm").innerHTML="AM";

if(m<=9)
{
    m = ('0' + m).slice(-2);
    document.getElementById("m").innerHTML=m+":";
}
else
    document.getElementById("m").innerHTML=m+":";
if(s<=9)
{
    s = ('0' + s).slice(-2);
    document.getElementById("s").innerHTML=s+":";
}
else
    document.getElementById("s").innerHTML=s+":";


    setTimeout(arguments.callee, 1000);
})();
