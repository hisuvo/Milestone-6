let fruits = ["🍅", "🍇", "🍈", "🍉", "🍊", "🍌", "🍍", "🍑", "🍏", "🥧", "🍋", "🍓", "🍒", "🥭"]

let fruitsMap = fruits.map(function(item) {
    return item
})

console.log(fruits)
console.log(fruitsMap)

console.log(fruits === fruits)
console.log(fruits === fruitsMap)