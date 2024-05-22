//triangle exercise
const onSubmit = (e) => {
    e.preventDefault();

    //parseInt to convert string to int
    const side0 = parseFloat(document.getElementById('length0').value);
    const side1 = parseFloat(document.getElementById('length1').value);
    const side2 = parseFloat(document.getElementById('length2').value);

    if (isNaN(side0)||isNaN(side1)|isNaN(side2)) {
        alert("Please finish entering your numbers.");
        return;
    }

    if (!isValidTriangle(side0, side1, side2)) {
        alert("The entered sides do not form a valid triangle. Please enter valid side lengths.");
        return;
    }

    let inputArr = [side0, side1, side2];

    function calculateArea(inputArr){
        const [a, b, c] = inputArr;
        //heron's formula
        const s = (a + b + c) / 2; // semi-perimeter 
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return area;
    }

    const area = calculateArea(inputArr);
    console.log(`The area of the triangle is ${area}`);
    document.getElementById('result').style.display = 'block';
    document.getElementById('area').textContent = `The area of the triangle is ${area.toFixed(2)} square units.`;
}

document.getElementById("myForm").addEventListener("submit", onSubmit);

const isValidTriangle = (a, b, c) => {
    return a + b > c && a + c > b && b + c > a;
}
