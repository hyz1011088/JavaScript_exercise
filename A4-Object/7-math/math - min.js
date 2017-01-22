<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p id="demo">单击按钮返回5到10之间最小的值。</p>
<button onclick="myFunction()">点我</button>
<script>
function myFunction(){
	document.getElementById("demo").innerHTML=Math.min(5,10);
}
</script>

</body>
</html>