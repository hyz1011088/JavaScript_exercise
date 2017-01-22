<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p id="demo">单击按钮舍入与“2.5”最接近的整数</p>
<button onclick="myFunction()">点我</button>
<script>
function myFunction(){
	document.getElementById("demo").innerHTML=Math.round(2.5);
}
</script>

</body>
</html>