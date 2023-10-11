// function palindrome(str){
//     const reversed=str.split('').reverse().join('');
//     if(str===reversed){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// palindrome('shahin')

function palindrome(str){
    const reversed=str.split('').reverse().join('');
    return str===reversed
}
