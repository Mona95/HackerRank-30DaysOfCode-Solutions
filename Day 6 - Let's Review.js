function processData(input) {
    let messageArr = input.split("\n").slice(1);
    
    messageArr.forEach(msg => {
        let evenCharString,
            oddCharString,
            evenArr = [],
            oddArr = [],
            msgLength = msg.length;
        for(let i=0;i<=msgLength;i++){
            if(i%2 ===0){
                evenArr = [...evenArr, msg.charAt(i)]
            }else{
                oddArr = [...oddArr, msg.charAt(i)]
            }
            evenCharString = evenArr.join('');
            oddCharString = oddArr.join('');
        }
         console.log(`${evenCharString} ${oddCharString}`)
    })
}
