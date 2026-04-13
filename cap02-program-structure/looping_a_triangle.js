// Option 1:  Not following the book's suggestion
let triangle = ""
for (let i = 0; i < 7; i++) {
    triangle += "#";
    console.log(triangle);
}

console.log("");

// Option 2: Following the book's suggestiong of using .lenght

triangle = "";
while (true) {
    if (triangle.length < 7) {
        triangle += "#";
        console.log(triangle);
    } else {
        break;
    }
}