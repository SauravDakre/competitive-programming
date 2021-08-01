// method 1
function stringRotation(x, y){
    const ar = y.split(x[0])
    if(x === `${x[0]}${ar[1]}${ar[0]}`){
        return true
    }
    return false
}

// method 2
function stringRotation(str1, str2) {
    return str1.length === str2.length && (str1 + str1).includes(str2);
}

console.log(stringRotation("rotation", "tationro"))
console.log(stringRotation("RotateMe", "teMeRota"))