describe("Tests for BoardManager class",function(){
	//initialize the class
	var bm;
	var holder;
	beforeEach(function(){
		bm = new BoardManager();
		holder = document.createElement("div");
		holder.setAttribute("id","square-holder");
		document.body.appendChild(holder);
	});


	it('ensures that BoardManager is initialized',function(){
		expect(bm).toBeObject();
	});

	it('ensures that there are 144 squares created in the DOM',function(){
		bm.createBoard(144,"square-holder");
		var squares = document.querySelectorAll(".square");
		expect(squares.length).toEqual(144);		
	});

})