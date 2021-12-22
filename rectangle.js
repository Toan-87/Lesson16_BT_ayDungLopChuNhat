class Rectangle {
    length;
    wide;
    constructor(length, wide) {
        this.length = length;
        this.wide = wide;
    }
    get Length() {
        return this.length;
    }
    get Wide() {
        return this.wide;
    }
    get Area() {
        return this.length * this.wide;
    }
    get Perimeter() {
        return (this.length + this.wide)*2;
    }
    set Length (length) {
        this.length = length;
    }
    set Wide (wide) {
        this.wide = wide;
    }
}