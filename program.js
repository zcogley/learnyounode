let argArray = process.argv;
argArray.shift();
argArray.shift();

function toNumber (x) {
    return Number(x);
}

function getSum(total, num) {
    return total + num;
}

numArray = argArray.map(toNumber);
sum = numArray.reduce(getSum);

console.log(sum)