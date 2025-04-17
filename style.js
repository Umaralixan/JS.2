// M 1
// let a = prompt("a ni kiriting");
// console.log(Math.round(a));

// M2
// let a = prompt("a ni kiriting");
// console.log(Math.abs(a));

// M3
// let a = Math.floor(Math.random() * 101 )
// let b = Math.floor(Math.random() * 101 )
// let c = Math.floor(Math.random() * 101 )
// let d = Math.floor(Math.random() * 101 )
// let e = Math.floor(Math.random() * 101 )

// let o = (a + b + c + d + e) / 5
// let n = Math.round(o)

// console.log(a, b, c, d, e);
// console.log(n);

// M4
// let a = prompt("a ni kiriting")
// let k = 11.2356
// let s = a * k
// let n = s. toFixed(2)
//  console.log(n);
 
// M5
function randomData() {
    const y = Math.floor(Math.random() * (2025 - 2000 + 1)) + 2000
    const o = Math.floor(Math.random() * 12) + 1
    const k = Math.floor(Math.random() * 28) + 1

    const oStr = o. toString(). padStart(2, '0')
    const kStr = k. toString(). padStart(2, '0')

    return `${y}-${oStr}-${kStr}`
}
console.log(randomData());


