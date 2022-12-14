let auto = {
    manufacturer: "BMW",
    model: "E36",
    yearOfIssue: "1991",
    averageSpeed: 87.4,
    info: function () {
        console.log(`${this.manufacturer}, ${this.model}, ${this.yearOfIssue}, ${this.averageSpeed} km/h`);
    },
    countingTime: function (s) {
        res = s / this.averageSpeed;
        temp = Math.floor(res / 4);
        if (temp === 0)
            return Number(res).toFixed(2);
        else {
            res += temp;
            return Number(res).toFixed(2);
        }
    }
}

auto.info();
console.log(`${auto.countingTime(900)}`);
console.log("------------------------");

let fraction = {
    numerator: 28,
    denominator: 97
}

function sum(f1, f2) {
    n = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
    d = f1.denominator * f2.denominator;
    return `${n}/${d}`
}

function dif(f1, f2) {
    n = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
    d = f1.denominator * f2.denominator;
    if (n === 0 || d === 0) {
        return 0;
    }
    else {
        return `${n}/${d}`
    }
}

function mult(f1, f2) {
    n = f1.numerator * f2.numerator;
    d = f1.denominator * f2.denominator;
    return `${n}/${d}`
}

function div(f1, f2) {
    n = f1.numerator * f2.denominator;
    d = f1.denominator * f2.numerator;
    return `${n}/${d}`
}

function reduction(f) {
    if (f.numerator >= f.denominator) {
        whole = Math.floor(f.numerator / f.denominator);
        n = f.numerator % f.denominator;
        if (n === 0)
            return whole
        else
            return `${whole} | ${n}/${f.denominator}`;
    }
    else {
        n = 0;
        d = 0;
        for (i = 2; i < f.denominator; i++) {
            if (f.numerator % i == 0 && f.denominator % i == 0) {
                n = f.numerator / i;
                d = f.denominator / i;
            }
        }
        if (n == 0 || d == 0)
            return `${f.numerator}/${f.denominator}`;
        else
            return `${n}/${d}`;
    }
}

console.log(`${fraction.numerator}/${fraction.denominator} + ${fraction.numerator}/${fraction.denominator} = ${sum(fraction, fraction)}`);
console.log(`${fraction.numerator}/${fraction.denominator} - ${fraction.numerator}/${fraction.denominator} = ${dif(fraction, fraction)}`);
console.log(`${fraction.numerator}/${fraction.denominator} * ${fraction.numerator}/${fraction.denominator} = ${mult(fraction, fraction)}`);
console.log(`${fraction.numerator}/${fraction.denominator} / ${fraction.numerator}/${fraction.denominator} = ${div(fraction, fraction)}`);

console.log(`${reduction(fraction)}`);

console.log("-------------------------");

let time = {
    hours: 14,
    minutes: 34,
    seconds: 23,
    info() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    },
    addSecond(n) {

        for (i = 0; i < n; i++) {
            this.seconds++;
            if (this.seconds >= 60) {
                this.seconds = 0;
                this.minutes++;
            }
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours++;
            }
            if (this.hours >= 24) {
                this.hours = 0;
            }
        }
    },
    addMinutes(n) {
        for (i = 0; i < n; i++) {
            this.minutes++;
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours++;
            }
            if (this.hours >= 24) {
                this.hours = 0;
            }
        }
    },
    addHours(n) {
        for (i = 0; i < n; i++) {
            this.hours++;
            if (this.hours >= 24) {
                this.hours = 0;
            }
        }
    },

}
time.info();
time.addSecond(10000);
time.info();
time.addMinutes(100);
time.info();
time.addHours(8);
time.info();
time.addHours(2);
time.info();