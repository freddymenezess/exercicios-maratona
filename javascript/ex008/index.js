for (let num = 1000; num < 10000; num++) {
    const A = parseInt(num /  100)
    const B = num % 100
    
    if ((A + B) ** 2 === num) {
        console.log(num)
    }
    
}