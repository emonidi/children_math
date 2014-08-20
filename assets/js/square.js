var Square = function(squareNumber){
	this.squareNumber = squareNumber;
	this.html = "";
	this.highlited = false;
		
	this.highlite = function(color){
		this.html.style.backgroundColor = color;
		this.html.style.transform = "rotateY(360deg)";
		this.highlited = true;
	}

	this.unhighlite = function(){
		this.html.style.backgroundColor = "#fff";
		this.html.style.transform = "rotate(0deg)";
		this.highlited = false;
	}


	this.initialize = function(){
		//create the square div
		var div = document.createElement("div");
		//set the square class
		div.setAttribute("class","square");
		//create the span in the square
		var span = document.createElement("span");
		//set the text of the span
		span.innerText = this.squareNumber;
		//append the span into the div;
		div.appendChild(span);
		div.style.transition = ".75s";
		this.html = div;
		
		return div;
	}

}





