<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p id="demo">单击按钮在数组中插入元素。</p>
<button onclick="myFunction()">点我</button>
<script>
function myFunction(){
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.unshift("Lemon","Pineapple");
	var x=document.getElementById("demo");
	x.innerHTML=fruits;
}
</script>
<p><b>注意:</b> unshift()方法不能用于 Internet Explorer 8 之前的版本，插入的值将被返回成<em> undefined </em>。</p>

</body>
</html>