// 1. Finding area calculation by pressing "Calculator" Button
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
document.getElementById("triangle").addEventListener('click',function(){
    const triangleFirstValue = getInputFieldValueById("triangle-first-value");
    const triangleSecValue = getInputFieldValueById("triangle-sec-value");

})