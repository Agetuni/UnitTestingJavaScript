const functions = {
    stringLength : (input) => {
    if(input.length>=1 && input.length<= 10){
        return input.length;
    }
    else{
        throw new Error('not between 1-10')
    }
},
reverseString: (str)=> {
    return str.split("").reverse().join("");
},
capitalize :(str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
}
}
console.log(functions.stringLength('ss'))
console.log(functions.reverseString('abcd'))
module.exports =functions