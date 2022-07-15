import {Shape} from "./Shape";

export class Rectangle extends Shape implements IArea{

    constructor(x: number, y: number,  private _width: number, private _height: number) {
        super(x, y);
    }

    area(): number {
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(5, 5, 10, 20);
console.log(rectangle.toString());
console.log(rectangle.area());