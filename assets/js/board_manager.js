var BoardManager = function(){
	var self = this;
	this.numberOfSquares = 0;
	this.holderElement;
	this.fragment;
	this.squares = [];
	this.element;

	this._getHolderElement = function(element){
		this.element  = document.getElementById(element);
		return this.element;
	}

	this._createDocumentFragment = function(){
		this.fragment = document.createDocumentFragment();
		return this.fragment;
	}

	this._setEventListeners = function(square,squareIndex){
		square.addEventListener("click",function(){
			var squareObj = self.squares[squareIndex-1];

			if(squareObj.highlited){
				self._unhiglightAll();
				return false;
			}
			self._unhiglightAll();
			squareObj.highlite("blue");
			for(var i = 0;i<squareIndex;i++){
				var loopSquare = self.squares[i];
				if(squareIndex%loopSquare.squareNumber === 0){
					if(loopSquare.squareNumber !== squareIndex){
						loopSquare.highlite("red");
					}
				}
			}
		},false)
	}

	this._unhiglightAll = function(){
		for(var i = 0,ii = self.squares.length;i<ii;i++){
			self.squares[i].unhighlite();
		}
	}


	//public methods
	return{
		
		createBoard:function(numberOfSquares,holderElement){
			var fragment = self._createDocumentFragment();
			var element = self._getHolderElement(holderElement);
			self.numberOfSquares = numberOfSquares;
			for(var i = 1; i <= numberOfSquares; i++){
				
				var square = new Square(i);
				self.squares.push(square);
				fragment.appendChild(square.initialize());	
				self._setEventListeners(square.html,i);
			}
			element.appendChild(fragment)
		}
	}
}


