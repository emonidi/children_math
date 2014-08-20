describe("Square tests",function(){
	
	var square;
	var number = 2;
	beforeEach(function(){
		
		square = new Square(number);
		squareHtml = square.initialize();
	
	});

	it('ensures that square is an object',function(){
		expect(typeof square).toEqual("object");
	});

	it('ensures that square is initialized with the proper number',function(){
		expect(square.squareNumber).toEqual(number);
	});

	it('ensures that square.initialize() returns an dom string',function(){
		expect(squareHtml).toBeHtmlNode();
	});

	it('ensures that when highlight is called the square will be marked in the passed color',function(){
		var color = "red";
		square.highlite(color);
		var squareStyle = square.html.style;
		expect(squareStyle.backgroundColor).toContain(color);
	});

	it('ensures that square.highlited = false',function(){
		expect(square.highlited).toBe(false);
	});

	it('ensures that after calling square.highlite(colorParam) square.highlited == true',function(){
		square.highlite("red");
		expect(square.highlited).toBe(true);
	});

	it('ensures that after calling square.unhighlite() square.highlited == false',function(){
		square.highlite('red');
		square.unhighlite();
		expect(square.highlited).toBe(false);
	});

})