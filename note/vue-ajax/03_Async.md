# async&await
    正常函数前加一个async关键字后，该函数就被定义成了一个async函数。
    当调用一个 async 函数时，会返回一个 Promise 对象。
    当这个 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值；
    当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值。
## await  
    await 操作符用于等待一个Promise 对象。它只能在async function 中使用。
    await 表达式会暂停当前 async function 的执行，等待 Promise 处理完成。
      若 Promise 正常处理(fulfilled)，!!Promise对应的resolve回调函数的参数将作为 await 表达式的值!!，
                                      然后继续执行 async function。
      若 Promise 处理异常(rejected)，await 表达式会把 Promise 的异常原因抛出。
