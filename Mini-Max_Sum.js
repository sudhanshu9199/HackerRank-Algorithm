``` javascript
question: Mini-Max Sum
Link: https://www.hackerrank.com/challenges/mini-max-sum/problem
```

// traditional for loop
function miniMaxSum(arr) {
    // Write your code here
    let total = 0;
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    let minSum = total - max;
    let maxSum = total - min;
    console.log(minSum, maxSum)

}

// for...of loop

function miniMaxSum(arr) {
    let total = 0;
    let min = arr[0];
    let max = arr[0];

    for (let num of arr) {
        total += num;

        if (num < min) {
            min = num;
        }

        if (num > max) {
            max = num;
        }
    }

    const minSum = total - max;
    const maxSum = total - min;

    console.log(minSum, maxSum);
}
