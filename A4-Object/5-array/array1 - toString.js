<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p id="demo">点击按钮将数组转为字符串并返回。</p>
<button onclick="myFunction()">点我</button>
<script>
function myFunction(){
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	var str = fruits.toString();
	var x=document.getElementById("demo");
	x.innerHTML= str;
}
</script>

</body>
</html>