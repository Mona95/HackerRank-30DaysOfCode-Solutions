
function main() {
    const N = parseInt(readLine(), 10),
        firstNameArray = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];
        validateEmail(emailID) && firstNameArray.push(firstName);
    }
    console.log(firstNameArray.sort().join('\n'))
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@gmail.com$/;
    return re.test(String(email).toLowerCase());
}
