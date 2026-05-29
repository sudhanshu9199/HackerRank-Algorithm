``` javascript
question: staircase
Link: https://www.hackerrank.com/challenges/staircase/problem

```

for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            process.stdout.write(' ');
        }
        for (let k = 0; k < i; k++) {
            process.stdout.write('#')
        }
        process.stdout.write('\n');
    }
