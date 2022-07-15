function totalFibonacci(number) {
    var array = [0, 1];
    var total = 1;
    var a = 0;
    var b = 1;
    if (number == 1) {
        console.log(0);
        array.pop();
        console.log(array);
    }
    else {
        for (var i = 0;; i++) {
            if (a + b == i) {
                total += i;
                array.push(i);
                a = b;
                b = i;
            }
            if (array.length == number) {
                break;
            }
        }
        console.log(array);
        console.log(total);
    }
}
totalFibonacci(5);
