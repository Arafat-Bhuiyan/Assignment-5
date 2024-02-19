// 1. Finding area calculation by pressing "Calculator" Button
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
// Area of Triangle
document.getElementById("triangle").addEventListener('click',function(){
    const triangleFirstValue = getInputFieldValueById("triangle-first-value");
    const triangleSecValue = getInputFieldValueById("triangle-sec-value");
    const areaOfTriangle = .5 * triangleFirstValue * triangleSecValue;
    console.log(areaOfTriangle);
})

// Area of Rectangle
document.getElementById("rectangle").addEventListener('click',function(){
    const rectangleFirstValue = getInputFieldValueById("rectangle-first-value");
    const rectangleSecValue = getInputFieldValueById("rectangle-sec-value");
    const areaOfRectangle = rectangleFirstValue * rectangleSecValue;
    console.log(areaOfRectangle);
})

