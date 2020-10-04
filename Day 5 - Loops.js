function main() {
    const n = parseInt(readLine(), 10);
    let res;
    for(let i=1; i<=10;i++){
        res = `${n} x ${i} = ${n*i}`
        console.log(res)
    }
}
