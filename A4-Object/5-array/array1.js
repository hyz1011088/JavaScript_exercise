<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>����̳�(runoob.com)</title>
</head>
<body>

<p id="demo">������ť����һ������,���� ucase��������, ����ʾ�����</p>
<button onclick="myFunction()">����</button>
<script>
Array.prototype.myUcase=function(){
	for (i=0;i<this.length;i++){
		this[i]=this[i].toUpperCase();
	}
}
function myFunction(){
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.myUcase();
	var x=document.getElementById("demo");
	x.innerHTML=fruits;
}
</script>

</body>
</html>