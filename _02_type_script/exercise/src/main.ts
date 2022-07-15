function totalFibonacci(number: number): void {
    let array: Array<number> = [0,1];
    let total: number = 1;
    let a = 0;
    let b = 1;
    if (number == 1){
        console.log(0)
        array.pop()
        console.log(array)
    }else {
        for (let i = 0; ; i++) {
            if (a + b == i){
                total += i;
                array.push(i);
                a = b;
                b = i;
            }
            if (array.length == number){
                break;
            }
        }
        console.log(array);
        console.log(total);
    }
}

totalFibonacci(5);