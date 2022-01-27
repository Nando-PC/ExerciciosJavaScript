const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 2000)
})
console.log('Begin');
//promise.then((data)=> console.log(data));
promise.then(console.log).catch(err => console.log('Ops deu erro', err));

