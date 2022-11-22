enum ShapeKind {
   Circle,
   Square 
}

const myShape = ShapeKind.Circle;

interface Circle {
   kind:ShapeKind.Circle;
   radius: number;
}

interface Square {
   kind: ShapeKind.Square;
   sideLength: number;
}

const circle1: Circle = {
   radius: 2, 
   kind: ShapeKind.Circle
}

enum StatusCode {
   ERROR = 500,
   NOT_FOUND = 404,
   NOT_AUTH = 403,
}

enum Grades {
   Junior = 'junior',
   Middle = 'middle',
   Senior = 'senior'
}