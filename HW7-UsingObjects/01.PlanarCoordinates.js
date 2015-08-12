//Write functions for working with shapes in standard Planar coordinate system.
//    Points are represented by coordinates P(X, Y)
//    Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
//Calculate the distance between two points.
//Check if three segment lines can form a triangle.

function Point(x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('Invalid coorfinates!');
    }

    if (!(this instanceof Point)) {
        return new Point(x, y);
    }

    this.x = x;
    this.y = y;
}

Point.prototype.toString = function() {
    return '(' + this.x + ',' + this.y + ')';
};

function Line(startPoint, endPoint) {
    if (!(startPoint instanceof Point) || !(endPoint instanceof Point)) {
        throw new Error('Start point and end point are invalid Point instances!');
    }

    if (!(this instanceof Line)) {
        return new Line(startPoint, endPoint);
    }

    this.startPoint = startPoint;
    this.endPoint = endPoint;
}

Line.prototype.toString = function() {
    return '[' + this.startPoint + ',' + this.endPoint + ']';
};

Line.prototype.calculateDistance = function() {
    var xCoordLine = (this.endPoint.x - this.startPoint.x);
    var yCoordLine = (this.endPoint.y - this.startPoint.y);

    return Math.sqrt(xCoordLine * xCoordLine + yCoordLine * yCoordLine);
};

function canFormTriangle(a, b, c) {
    return a.calculateDistance() < b.calculateDistance() + c.calculateDistance() &&
        b.calculateDistance() < a.calculateDistance() + c.calculateDistance() &&
        c.calculateDistance() < a.calculateDistance() + b.calculateDistance();
}

//test

var testPoint1 = new Point(-2, 3),
    testPoint2 = new Point(3, 4),
    testPoint3 = new Point(1, 2),
    testLine1 = new Line(testPoint1, testPoint2),
    testLine2 = new Line(testPoint2, testPoint3),
    testLine3 = new Line(testPoint1, testPoint3),
    isTriangle = canFormTriangle(testLine1, testLine2, testLine3);

console.log('Can form a triangle from lines: ' + testLine1 + ', ' + testLine2 + ', ' + testLine3 + ' ? ' + (isTriangle ? 'Yes' : 'No'));
