// CALLBACKS -> PROMISES -> ASYNC e AWAIT
// A evolução do desenvolvimento de mensagens assíncronas no JS

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(' End '), 2000)
});
//console.log('Begins')
//promise.then((text) => console.log(text));

const asyncTime = async function() {
    console.log('Begins');
    const text = await promise;
    console.log(text);
}
console.log(asyncTime);




