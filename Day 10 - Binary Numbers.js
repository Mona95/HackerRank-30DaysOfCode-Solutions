function main() {
    const n = parseInt(readLine(), 10);
    console.log(n.toString(2).split('0').sort((a,b) => a < b)[0].length)
}
