


document.addEventListener("DOMContentLoaded", function(event) { 
	/*document.getElementById("redDiv").addEventListener("mouseover",function(){

		this.style.marginTop = "50px";

	});
	document.getElementById("redDiv").addEventListener("mouseout",function(){

		this.style.marginTop = "10px";

	});*/
	var elements = document.querySelectorAll('input.testInput');
	
	function makeItBigger(){ 
	
		
		for(i=0; i<elements.length; i++)
			{

				elements[i].style.height= "50px";
			}
		
	}
	for(i=0; i<elements.length; i++)
		{

			elements[i].addEventListener("focus",makeItBigger);
		}
	
	function makeItSmaller(){ 
	
		
		for(i=0; i<elements.length; i++)
			{

				elements[i].style.height= "16px";
			}
		
	}
	for(i=0; i<elements.length; i++)
		{

			elements[i].addEventListener("blur",makeItSmaller);
		}

	for(i=0; i<elements.length; i++)
		{

			elements[i].addEventListener("focus",function(){
				
				this.parentElement.style.backgroundColor="#000";
			});
		}

});