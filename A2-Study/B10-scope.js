<!DOCTYPE html><html><body><p>在 HTML 中, 所有全局变量都会成为 window 变量。</p><p id="demo"></p><script>myFunction();document.getElementById("demo").innerHTML ="I can display " + window.carName; //全局变量是 window 对象: 所有数据变量都属于 window 对象。function myFunction() {    carName = "Volvo";}</script></body></html>