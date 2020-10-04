function main() {
    const N = parseInt(readLine(), 10),
    weird = "Weird",
    notWeird="Not Weird";

   if(Math.abs(N % 2) == 1){
       console.log(weird)
   }
    else if(N%2===0){
       if(2 <= N && N <= 5){
        console.log('notWeird);
       }
       else if(6 <= N && N <= 20){
       console.log(weird)
       }
       if( 20 < N){
        console.log(notWeird)
        }
   }
}
