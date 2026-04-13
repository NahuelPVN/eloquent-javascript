// Shorter solution
for (let i = 7; i > 0; i--) {
    console.log("#".repeat(i));
}

// Without .repeat

for (let i = 7; i > 0; i--) {
    triangle = "";
    for (let count = 0; count < i; count ++) {
        triangle += "#"
    }
    console.log(triangle)
}