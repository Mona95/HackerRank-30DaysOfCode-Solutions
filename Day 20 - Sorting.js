
function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    let numberOfSwaps = 0;

    for (let i = 0; i < a.length; i++) {
    // Track number of elements swapped during a single array traversal    
        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                let temp1 = a[j],
                    temp2 = a[j+1];
                    a[j] = temp2;
                    a[j+1] = temp1;
                numberOfSwaps++;
            }
        }
    
        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        }
    }
    console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
    console.log(`First Element: ${a.shift()}`);
    console.log(`Last Element: ${a.pop()}`);
}
