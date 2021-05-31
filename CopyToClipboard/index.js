// const copiedText = document.getElementById('copied-text');
// function copyText (){
    
//    copiedText.select();
//     document.execCommand("copy")
//     alert('Copied')
// }


function sum (ar){
    let sumResult = 0;

    ar.map(x => {

        return sumResult = sumResult + x
    })
    return sumResult
}
const totalAr = sum([2,3,34,])
console.dir(totalAr);