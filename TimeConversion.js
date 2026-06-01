``` javascript
question: Time Conversion
link: https://www.hackerrank.com/challenges/time-conversion/problem
```

function timeConversion(s) {
    // Write your code here
    let period = s.slice(-2);
    let hour = Number(s.slice(0, 2));
    let rest = s.slice(2, 8);
    
    if (period === "AM"){
        if(hour === 12) {
            hour = "00";
        } else{
            hour = String(hour).padStart(2, '0');
        }
    }
    else{
        if(hour !== 12) {
            hour = String(hour + 12)
        }
        else {
            hour = 12;
        }
    }
    return hour + rest;

}
