// 1. Finding area calculation by pressing "Calculator" Button
function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}
// Area of Triangle
document.getElementById("triangle").addEventListener("click", function () {
  const triangleFirstValue = getInputFieldValueById("triangle-first-value");
  const triangleSecValue = getInputFieldValueById("triangle-sec-value");
  const areaOfTriangle = 0.5 * triangleFirstValue * triangleSecValue;
  console.log("Area of Triangle", areaOfTriangle);
});

// Area of Rectangle
document.getElementById("rectangle").addEventListener("click", function () {
  const rectangleFirstValue = getInputFieldValueById("rectangle-first-value");
  const rectangleSecValue = getInputFieldValueById("rectangle-sec-value");
  const areaOfRectangle = rectangleFirstValue * rectangleSecValue;
  console.log("Area of Rectangle", areaOfRectangle);
});

// Area of Parallelogram
document.getElementById("parallelogram").addEventListener("click", function () {
  const parallelogramFirstValue = getInputFieldValueById(
    "parallelogram-first-value"
  );
  const parallelogramSecValue = getInputFieldValueById(
    "parallelogram-sec-value"
  );
  const areaOfParallelogram = parallelogramFirstValue * parallelogramSecValue;
  console.log("Area of Parallelogram", areaOfParallelogram);
});

// Area of Rhombus
document.getElementById("rhombus").addEventListener("click", function () {
  const d1 = 16;
  const d2 = 8;
  const areaOfRhombus = 0.5 * d1 * d2;
  console.log("Area of Rhombus", areaOfRhombus);
});

// Area of Pantagone
document.getElementById("pantagone").addEventListener("click", function () {
    const p = 6;
    const b = 10;
    const areaOfPantagone = 0.5 * p * b;
    console.log("Area of Pantagone", areaOfPantagone);
  });

// Area of Ellipse
document.getElementById("ellipse").addEventListener("click", function () {
    const a = 10;
    const b = 4;
    const areaOfEllipse = 3.1416 * a * b;
    console.log("Area of Ellipse", areaOfEllipse);
  });
