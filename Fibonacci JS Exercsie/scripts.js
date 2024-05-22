//fibonacci exercise
const onSubmit = (e) => {
    e.preventDefault();

    let first = 0;
    let second = 1;

    console.log(first);
    console.log(second);

    //parseInt to convert string to int
    const i = parseInt(document.getElementById('times').value);

    if (isNaN(i)||i < 3||i > 50) {
        alert("please enter a number between 3 and 50.");
        return;
    }

    function printFibonacci(i) {
        for (let j = 0; j < i - 2; j++) {
            let temp = second; 
            second = first + second;
            first = temp;
            console.log(second);
        }
    }

    printFibonacci(i);
}

document.getElementById("myForm").addEventListener("submit", onSubmit);
