function calCircuit (){

var a;
var b;

a = document.getElementById('a').value;
b = document.getElementById('b').value;

if(a==0 && b==0){
	alert('Please fill the inputs');
}
else{
	if(a==0){
	alert('Please fill the "a" input');
	}

    if(a<0){
	alert('Wrong input! "a" value must be greather then 0' )
    }

	if(b==0){
	alert('Please fill the "b" input');
	}

	if(b<0){
	alert('Wrong input! "b" value must be greather then 0' )
	}
}

if (a>0 && b>0){
var c = 2*(1*a+1*b);
document.getElementById('circuit').value = c + " m";
}

}

function calContents (){
var a;
var b;

a = document.getElementById('a').value;
b = document.getElementById('b').value;

if(a==0 && b==0){
	alert('Please fill the inputs');
}
else{
	if(a==0){
	alert('Please fill the "a" input');
	}

    if(a<0){
	alert('Wrong input! "a" value must be greather then 0' )
    }

	if(b==0){
	alert('Please fill the "b" input');
	}

	if(b<0){
	alert('Wrong input! "b" value must be greather then 0' )
	}
}

if (a>0 && b>0){
var c = a*b;
document.getElementById('contents').value = c + " m²";
}
}