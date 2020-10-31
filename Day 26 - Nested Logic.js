
function processData(input) {
    let [actual, expected] = input.split("\n").map(e => e.split(" ").map(e => Number(e)));
    console.log(dateDif(actual, expected));
}

const dateDif = (actual, expected) => {
    let yD = actual[2] - expected[2];
    let mD = actual[1] - expected[1];
    let dD = actual[0] - expected[0];

    switch (true) {
        case yD > 0:
            return 10000;
        case mD > 0 && yD == 0:
            return 500 * mD;
        case dD > 0 && yD == 0 && mD == 0:
            return 15 * dD;
        default:
            return 0;
    }
};
