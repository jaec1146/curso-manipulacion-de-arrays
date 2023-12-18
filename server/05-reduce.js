const totals = [1, 2, 3, 4, 5, 6, 7, 8]

let sum = 0
for (let index = 0; index < totals.length; index++) {
 const element = totals[index]
 sum += element;
}

console.log(sum)

const result = totals.reduce((sum, item) => sum + item,0)

console.log(result)