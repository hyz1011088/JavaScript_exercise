<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p id="demo">点击按钮显示一个随机数</p>
<button onclick="myFunction()">点我</button>
<script>
function myFunction(){
	document.getElementById("demo").innerHTML=Math.random();
}
</script>

</body>
</html>