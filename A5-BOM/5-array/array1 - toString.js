<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>����̳�(runoob.com)</title>
</head>
<body>

<p id="demo">�����ť������תΪ�ַ��������ء�</p>
<button onclick="myFunction()">����</button>
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