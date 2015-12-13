


document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById("redDiv").addEventListener("mouseover",function(){

		this.style.marginTop = "50px";

	});
	document.getElementById("redDiv").addEventListener("mouseout",function(){

		this.style.marginTop = "10px";

	});
	var elements = document.querySelectorAll('input.testInput');
	alert(elements);
	function makeItBigger(){ 
	
		
		for(i=0; i<elements.length; i++)
			{

				elements[i].style.height= "50px";
			}
		
	}
	elements.addEventListener("focus",makeItBigger);
	/*document.getElementById('button').addEventListener("click",makeItBigger);*/
	
	
});