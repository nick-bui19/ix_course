//triangle exercise
const onSubmit = (e) => {
    e.preventDefault();

    //parseInt to convert string to int
    const side0 = parseInt(document.getElementById('length0').value);
    const side1 = parseInt(document.getElementById('length1').value);
    const side2 = parseInt(document.getElementById('length2').value);

    if (isNaN(side0)||isNaN(side1)|isNaN(side2)) {
        alert("Please finish entering your numbers.");
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
    if (isNaN(area)){
        alert("please enter numbers so that a triangle is constructable.");
    }

    console.log(`The area of the triangle is ${area}`);
}

document.getElementById("myForm").addEventListener("submit", onSubmit);