// 1st function -- Finding area calculation by pressing "Calculator" Button
function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  if (isNaN(inputFieldValue) || inputFieldValue <= 0) {
    alert('Please enter a positive number');
    return null;
  }
  inputField.value = '';
  return inputFieldValue;
}

// 2nd function -- adding calculation ans in area calculation section
function setAreaOfShapes(shapeName,areaOfShape){
  const calculationContainer = document.getElementById("calculation-container");
  const p = document.createElement('p');
  p.innerText = shapeName + ' ' + areaOfShape;
  calculationContainer.appendChild(p);
}

// Area of Triangle
document.getElementById("triangle").addEventListener("click", function () {
  const triangleFirstValue = getInputFieldValueById("triangle-first-value");
  if (triangleFirstValue === null) return;

  const triangleSecValue = getInputFieldValueById("triangle-sec-value");
  if (triangleSecValue === null) return;

  const areaOfTriangle = (0.5 * triangleFirstValue * triangleSecValue).toFixed(2);

  setAreaOfShapes("Triangle",areaOfTriangle);
});

// Area of Rectangle
document.getElementById("rectangle").addEventListener("click", function () {
  const rectangleFirstValue = getInputFieldValueById("rectangle-first-value");
  if (rectangleFirstValue === null) return;

  const rectangleSecValue = getInputFieldValueById("rectangle-sec-value");
  if (rectangleSecValue === null) return;

  const areaOfRectangle = (rectangleFirstValue * rectangleSecValue).toFixed(2);
  setAreaOfShapes("Rectangle",areaOfRectangle);
});

// Area of Parallelogram
document.getElementById("parallelogram").addEventListener("click", function () {
  const parallelogramFirstValue = getInputFieldValueById("parallelogram-first-value");
  if (parallelogramFirstValue === null) return;

  const parallelogramSecValue = getInputFieldValueById("parallelogram-sec-value");
  if (parallelogramSecValue === null) return;

  const areaOfParallelogram = (parallelogramFirstValue * parallelogramSecValue).toFixed(2);
  setAreaOfShapes("Parallelogram",areaOfParallelogram);
});

// Area of Rhombus
document.getElementById("rhombus").addEventListener("click", function () {
  const d1 = 16;
  const d2 = 8;
  const areaOfRhombus = (0.5 * d1 * d2).toFixed(2);
  setAreaOfShapes("Rhombus",areaOfRhombus);
});

// Area of Pantagone
document.getElementById("pantagone").addEventListener("click", function () {
    const p = 6;
    const b = 10;
    const areaOfPantagone = (0.5 * p * b).toFixed(2);
    setAreaOfShapes("Pantagone",areaOfPantagone);
  });

// Area of Ellipse
document.getElementById("ellipse").addEventListener("click", function () {
    const a = 10;
    const b = 4;
    const areaOfEllipse = (3.1416 * a * b).toFixed(2);
    setAreaOfShapes("Ellipse",areaOfEllipse);
  });

