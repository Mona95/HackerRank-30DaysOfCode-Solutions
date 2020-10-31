
function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        let arrN = [...Array(n).keys()].splice(1);
        
        arrN.push(n);

        let idx = 0,
         nLessK = 0

        while(idx < arrN.length) {
            let thisN = arrN[idx]
            for(let z = idx + 1; z < arrN.length; z++) {
                let bitwise = thisN & arrN[z]
                if((bitwise) < k) {
                    if(bitwise > nLessK) nLessK = bitwise
                
                }
            }
            idx++
        }
        console.log(nLessK)
    }
}
