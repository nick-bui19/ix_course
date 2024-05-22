//fibonacci exercise
const onSubmit = (e) => {
    e.preventDefault();

    const i = parseInt(document.getElementById('times').value);

    if (isNaN(i) || i < 3 || i > 50) {
        alert("Please enter a number between 3 and 50.");
        return;
    }

    const sequence = generateFibonacci(i);
    document.getElementById('result').style.display = 'block';
    document.getElementById('sequence').textContent = `Fibonacci Sequence: ${sequence.join(', ')}`;
}

const generateFibonacci = (n) => {
    const sequence = [0, 1];
    console.log(0);
    console.log(1);
    for (let j = 2; j < n; j++) {
        sequence.push(sequence[j - 1] + sequence[j - 2]);
        console.log(sequence[j]);
    }
    return sequence;
}

document.getElementById("myForm").addEventListener("submit", onSubmit);