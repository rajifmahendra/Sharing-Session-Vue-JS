// 1. Buat function menerima params string return reverse string
// function reverseString(str){
//     const reverse = [];
//     const stringSplit =  str.split('');
//     for(let i = stringSplit.length; stringSplit.length < i ; i--){
//         console.log(i)
//         reverse.push(stringSplit[i]);
//     }
//     console.log(reverse)
//     return reverse;
// }
// reverseString('testing')

// 2. function utk params array of number
function removeDuplicate(arr){
    const unique = [];
    arr.forEach((e,i) => {
        if (!unique.includes(e)){
            unique.push(e)
        }
    });
    return unique
}
removeDuplicate([1,1,2,2,3])