function solution(age) {
    return String(age)
        .split('')
        .map(digit => String.fromCharCode(97 + Number(digit)))
        .join('');           
}