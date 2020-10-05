function processData(input) {

    let [numberOfEntries, ...rest] = input.split('\n'),
        entryArr = rest.slice(0, numberOfEntries),
        queries = rest.slice(entryArr.length),
        phoneBook = new Map();

    entryArr.forEach(entry => {
        let nameNumberArr = entry.split(' ');
        phoneBook.set(nameNumberArr[0], nameNumberArr[1]);
    })

    queries.forEach(query => {
        phoneBook.get(query) 
        ? console.log(`${query}=${phoneBook.get(query)}`) 
        : console.log('Not found');
    })
} 
