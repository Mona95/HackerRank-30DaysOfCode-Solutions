
function main() {
    const S = readLine();
      try{
        S != parseInt(S) && error()
        console.log(Number(S))
    }
    catch(error){
        console.log('Bad String')
    }
}
