<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>����̳�(runoob.com)</title>
</head>
<body>

<p id="demo">�����ť��ȡ�����±� 1 �� 2 ��Ԫ�ء�</p>
<button onclick="myFunction()">����</button>
<script>
function myFunction(){
	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var citrus = fruits.slice(1,3);
	var x=document.getElementById("demo");
	x.innerHTML=citrus;
}
</script>

</body>
</html>