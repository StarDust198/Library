import './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
console.log($('.findme').siblings());

// function checkBrackets(str) {
//     let counterL = 0, counterR = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '(') {
//             counterL++;
//         } else if (str[i] === ')') {
//             counterR++;
//         }
//     }


// }

let testStr1 = "()()()((()))";  // true
let testStr2 = "())(())()((()))"; // false
let testStr3 = "(()(())()(()))"; //true
let testStr4 = "))"; // false

function checkBrackets(str) {
    let stack = '';
    for (let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case '(':
                stack += '(';
                break;
            case ')':
                if (stack) {
                    stack = stack.slice(0, -1);
                } else {
                    return false;
                }                
                break;
        }        
    }
    if (stack === '') {
        return true;
    } else {
        return false;
    }    
}

console.log(checkBrackets(testStr1));
console.log(checkBrackets(testStr2));
console.log(checkBrackets(testStr3));
console.log(checkBrackets(testStr4));


// console.log(Array.from(testStr.matchAll(/\(/g)));

// for (let elem of testStr.matchAll(/\(/g)) {
//     console.log(elem);
// }




