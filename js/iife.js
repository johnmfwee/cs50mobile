const sayHello = (function () {
  var message = 'Hello!'

  function sayHello() {
    console.log(message)
  }

  return sayHello
}) ()

console.log('typeof message:', typeof message)
console.log(sayHello.toString())

sayHello()
