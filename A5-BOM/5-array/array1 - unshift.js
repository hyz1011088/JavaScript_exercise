<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>����̳�(runoob.com)</title>
</head>
<body>

<p id="demo">������ť�������в���Ԫ�ء�</p>
<button onclick="myFunction()">����</button>
<script>
function myFunction(){
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.unshift("Lemon","Pineapple");
	var x=document.getElementById("demo");
	x.innerHTML=fruits;
}
</script>
<p><b>ע��:</b> unshift()������������ Internet Explorer 8 ֮ǰ�İ汾�������ֵ�������س�<em> undefined </em>��</p>

</body>
</html>