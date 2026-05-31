``` javascript
question: Mini-Max Sum
Link: https://www.hackerrank.com/challenges/mini-max-sum/problem
```

let total = 0;
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        if (arr[i] < max) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    let minSum = total - max;
    let maxSum = total - min;
    console.log(minSum, maxSum)
