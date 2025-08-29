function calculateMarks() {

    let maths = parseInt(document.getElementById("maths").value);
    let science = parseInt(document.getElementById("science").value);
    let english = parseInt(document.getElementById("english").value);


    let total = maths + science + english;
    let average = total / 3;


    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average: " + average.toFixed(2);
}

calculateMarks();