// function reverseString(str){
//     const reversed=str.split('').reverse().join('');
//     console.log(reversed);
// }
// reverseString('shahin')

function reverseString(str){
    let reversed='';
    for(let char of str){
        reversed=char+reversed
    }
    console.log(reversed);
}
reverseString('hello')