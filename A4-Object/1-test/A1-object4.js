<!DOCTYPE html><html><body><script>function person(firstname,lastname,age,eyecolor){this.firstname=firstname;this.lastname=lastname;this.age=age;this.eyecolor=eyecolor; this.changeName=changeName;function changeName(name){this.lastname=name;}}myMother=new person("Sally","Rally",48,"green");myMother.changeName("Doe");document.write(myMother.lastname);</script></body></html>