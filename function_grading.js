function grading() {
    var val1 = parseInt(document.getElementById("num1").value);
    var val2 = parseInt(document.getElementById("num2").value);
    var val3 = parseInt(document.getElementById("num3").value);
    var val4 = parseInt(document.getElementById("num4").value);

    var final = val1 + val2 + val3 + val4;
    document.getElementById("result").innerHTML = +final  + " / 400 ";
}

function average() {
    var val1 = parseInt(document.getElementById("num1").value);
    var val2 = parseInt(document.getElementById("num2").value);
    var val3 = parseInt(document.getElementById("num3").value);
    var val4 = parseInt(document.getElementById("num4").value);

    var final1 = val1 + val2 + val3 + val4; 
    var total = final1 / 4;
    document.getElementById("avrg").innerHTML = +total;

}
function myGrading() {
    // Set the student's grade
var grade = document.getElementById("avrg").innerHTML;
var gscore="";
switch (true) {
	// If score is 79 or greater
	case grade >= 79:
		gscore=("A");
		break;
	// If score is 60 or greater
	case grade >= 60 :
		gscore=("B");
		break;
	// If score is 49or greater
	case grade >= 49:
		gscore=("C");
		break;
	// If score is 40 or greater
	case grade >= 40:
		gscore=("D");
		break;
	// Anything 39 or below is failing
	default:
		gscore=("F");
}
  document.getElementById("grad").innerHTML =gscore;

    }
    
    