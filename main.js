/* OPERATIONS */

const inputAddFields = document.querySelectorAll('.input-add-field');
const sumFields = document.querySelectorAll('.sum-field');
const inputSubFields = document.querySelectorAll('.input-sub-field');
const diffFields = document.querySelectorAll('.diff-field');
const inputMulFields = document.querySelectorAll('.input-mul-field');
const prodFields = document.querySelectorAll('.prod-field');
const inputDivFields = document.querySelectorAll('.input-div-field');
const quotFields = document.querySelectorAll('.quot-field');


for (let inputAddField of inputAddFields) {
  inputAddField.addEventListener('input', (e) => {
    let real1 = parseFloat(inputAddFields[0].value);
    let imag1 = parseFloat(inputAddFields[1].value);
    let real2 = parseFloat(inputAddFields[2].value);
    let imag2 = parseFloat(inputAddFields[3].value);
    if (!isNaN(real1 + real2)) {
      sumFields[0].value = (real1 + real2).toFixed(4);
    }
    if (!isNaN(imag1 + imag2)) {
      sumFields[1].value = (imag1 + imag2).toFixed(4);
    }
  })
}

for (let inputSubField of inputSubFields) {
  inputSubField.addEventListener('input', (e) => {
    let real1 = parseFloat(inputSubFields[0].value);
    let imag1 = parseFloat(inputSubFields[1].value);
    let real2 = parseFloat(inputSubFields[2].value);
    let imag2 = parseFloat(inputSubFields[3].value);
    if (!isNaN(real1 - real2)) {
      diffFields[0].value = (real1 - real2).toFixed(4);
    }
    if (!isNaN(imag1 - imag2)) {
      diffFields[1].value = (imag1 - imag2).toFixed(4);
    }
  })
}

for (let inputMulField of inputMulFields) {
  inputMulField.addEventListener('input', (e) => {
    let real1 = parseFloat(inputMulFields[0].value);
    let imag1 = parseFloat(inputMulFields[1].value);
    let real2 = parseFloat(inputMulFields[2].value);
    let imag2 = parseFloat(inputMulFields[3].value);
    if (!isNaN(real1 * real2 - imag1 * imag2)) {
      prodFields[0].value = (real1 * real2 - imag1 * imag2).toFixed(4);
    }
    if (!isNaN(real1 * imag2 + imag1 * real2)) {
      prodFields[1].value = (real1 * imag2 + imag1 * real2).toFixed(4);
    }
  })
}

for (let inputDivField of inputDivFields) {
  inputDivField.addEventListener('input', (e) => {
    let real1 = parseFloat(inputDivFields[0].value);
    let imag1 = parseFloat(inputDivFields[1].value);
    let real2 = parseFloat(inputDivFields[2].value);
    let imag2 = parseFloat(inputDivFields[3].value);
    if (!isNaN((real1 * real2 + imag1 * imag2) / (real2 * real2 + imag2 * imag2))) {
      quotFields[0].value = ((real1 * real2 + imag1 * imag2) / (real2 * real2 + imag2 * imag2)).toFixed(4);
    }
    if (!isNaN((imag1 * real2 - real1 * imag2) / (real2 * real2 + imag2 * imag2))) {
      quotFields[1].value = ((imag1 * real2 - real1 * imag2) / (real2 * real2 + imag2 * imag2)).toFixed(4);
    }
  })
}

/* TRANSFORMATIOM */

const polarInputFields = document.querySelectorAll('.polar-input-field');
const cartesianTransFields = document.querySelectorAll('.cartesian-trans-field');
const cartesianInputFields = document.querySelectorAll('.cartesian-input-field');
const polarTransFields = document.querySelectorAll('.polar-trans-field');

for (let polarInputField of polarInputFields) {
  polarInputField.addEventListener('input', (e) => {
    let magnitude = parseFloat(polarInputFields[0].value);
    let angle = parseFloat(polarInputFields[1].value);
    if (!isNaN(magnitude * Math.cos(degToRad(angle)))) {
      cartesianTransFields[0].value = (magnitude * Math.cos(degToRad(angle))).toFixed(4);
    }
    if (!isNaN(magnitude * Math.sin(degToRad(angle)))) {
      cartesianTransFields[1].value = (magnitude * Math.sin(degToRad(angle))).toFixed(4);
    }
  })
}

for (let cartesianInputField of cartesianInputFields) {
  cartesianInputField.addEventListener('input', (e) => {
    let real = parseFloat(cartesianInputFields[0].value);
    let imag = parseFloat(cartesianInputFields[1].value);
    if (!isNaN(Math.sqrt(real * real + imag * imag))) {
      polarTransFields[0].value = (Math.sqrt(real * real + imag * imag)).toFixed(4);
    }
    if (!isNaN(radToDeg(Math.atan2(real, imag)))) {
      polarTransFields[1].value = (radToDeg(Math.atan2(imag, real))).toFixed(4);
    }
  })
}

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
};

function radToDeg(rad) {
  return rad / (Math.PI / 180);
};