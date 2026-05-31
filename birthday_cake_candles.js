``` javascript
question: Birthday Cake Candles
Link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem
```

// first approach
function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = candles[0];
    for (let i = 1; i < candles.length; i++) {
        if (candles[i] > tallest) {
            tallest = candles[i];
        }
    }
    let unit = 0;
    
    for (let i = 0; i < candles.length; i++) {
        if (tallest === candles[i]) unit++;
    }
    return unit;
}

// Second approach

let tallest = candles[0];
    let count = 1;

    for (let i = 1; i < candles.length; i++) {

        if (candles[i] > tallest) {
            tallest = candles[i];
            count = 1; // reset count
        }

        else if (candles[i] === tallest) {
            count++;
        }
    }

    return count;
