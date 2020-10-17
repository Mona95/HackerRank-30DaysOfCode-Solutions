
function Calculator() {}
Calculator.prototype.power = (n,p) => {
    let hasNegative = [n,p].some(num => num < 0);

        if(hasNegative){
            throw('n and p should be non-negative');
        }else {
            return Math.pow(n,p);
        }
}
