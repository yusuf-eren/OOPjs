class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }
  calcArea() {
    console.log(this.sideLength ** 2);
  }
}

var square = new Square(5);
square.calcArea();
square.calcPerimeter();
