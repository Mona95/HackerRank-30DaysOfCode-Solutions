function processData(input) {
    const inputs = input.split('\n').splice(1).map(Number);
    
            inputs.forEach((num) => {
            if (num === 2) {
                console.log('Prime');
                return;
            }

            if (num === 1 || num % 2 === 0) {
                console.log('Not prime');
                return;
            }

            for (let i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i === 0) {
                console.log('Not prime');
                return;
                }
            }

           console.log('Prime');
            });
}
