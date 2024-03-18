//complete this code
class Rectangle {
		constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	getWidth() {
		return this._width;
	}

	getHeight() {
		return this._height;
	}

	getArea() {
		return this._width * this._height;
	}
}

class Square extends Animal {
	constructor(side) {
		super(side, side);
		this._side = side;
	}

	getPerimeter() {
		return 4 * this._side;
	}

	// Adding getArea method for Square
	getArea() {
		return this._side * this._side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
