
console.log("Displaying the command line values ")

process.argv.forEach(function(value, index){
    console.log(index+' : '+value)
})

console.log('another way of presentation')
process.argv.forEach(function(value, index){
    console.log(`${index} : ${value}`)
})