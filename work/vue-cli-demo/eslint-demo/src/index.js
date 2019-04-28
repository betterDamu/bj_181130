var a = 2
console.log(a)
function test () {
  console.log('test')
}
test()
setTimeout(() => {
  console.log('----')
}, 2000)

var obj = {
  eat () {
    console.log('eat')
  }
}
console.log(obj)
