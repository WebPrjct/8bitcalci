// Get the select element
const operationDropdown = document.getElementById("operation");
// Get the element to display for the "Add" operation
const addElement1 = document.getElementById("carryIn");
const addElement2 = document.getElementById("borrowIn");

// Function to show the element for "Add" operation
function showElement() {
  if (operationDropdown.value === "add") {
    addElement1.style.display = "block";
    addElement2.style.display = "none";
  } else if (operationDropdown.value === "sub") {
    addElement2.style.display = "block";
    addElement1.style.display = "none";
  } else {
    addElement1.style.display = "none";
    addElement2.style.display = "none";
  }
}

// Event listener for dropdown change
operationDropdown.addEventListener("change", showElement);

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
function calculateResult() {
  var num1 = document.getElementById("inputfeild1").value;
  var num2 = document.getElementById("inputfeild2").value;
  var carryIn = document.getElementById("inputfeild3").value;
  var BorrowIn = document.getElementById("inputfeild4").value;
  if (
    num1.length !== 8 ||
    num2.length !== 8 ||
    carryIn.length > 1 ||
    BorrowIn.length > 1
  ) {
    alert("not a valid input");
    return;
  }

  // document.getElementById("sumResult").innerHTML=num1 +" "+num2 +" "+carryIn+" "+BorrowIn;
  var selectedOperation = document.getElementById("operation").value;
  if (selectedOperation === "add") {
    var resultAddition = binaryAdditionWithCarry(num1, num2, carryIn);
    // console.log("Binary Addition Result: " + resultAddition.result + " with Carry Out: " + resultAddition.carryOut);
    document.getElementById("sumOutput").innerText = resultAddition.result;
    document.getElementById("carryOutput").innerHTML = resultAddition.carryOut;

    var decimalVal = parseInt(resultAddition.result, 2);
    document.getElementById("decimalOutputSum").innerText = decimalVal;

    document.getElementById("orResult").style.display = "none";
    document.getElementById("subResult").style.display = "none";
    document.getElementById("sumResult").style.display = "block";
    document.getElementById("andResult").style.display = "none";
    document.getElementById("mulResult").style.display = "none";
    document.getElementById("xorResult").style.display = "none";
    document.getElementById("notResult").style.display = "none";
    document.getElementById("nandResult").style.display = "none";
    document.getElementById("xnorResult").style.display = "none";
  } else if (selectedOperation === "sub") {
    var resultSub = binarySubtractionWithBorrow(num1, num2, BorrowIn);
    document.getElementById("subOutput").innerHTML = resultSub.result;
    document.getElementById("borrowOutput").innerHTML = resultSub.borrowOut;

    var decimalVal = parseInt(resultSub.result, 2);
    document.getElementById("decimalOutputSub").innerText = decimalVal;

    document.getElementById("orResult").style.display = "none";
    document.getElementById("subResult").style.display = "block";
    document.getElementById("sumResult").style.display = "none";
    document.getElementById("andResult").style.display = "none";
    document.getElementById("mulResult").style.display = "none";
    document.getElementById("xorResult").style.display = "none";
    document.getElementById("notResult").style.display = "none";
    document.getElementById("nandResult").style.display = "none";
    document.getElementById("xnorResult").style.display = "none";
  } else if (selectedOperation === "and") {
    var resultAND = performLogicalAND(num1, num2);
    document.getElementById("andOutput").innerHTML = resultAND;

    var decimalVal = parseInt(resultAND, 2);
    document.getElementById("decimalOutputAnd").innerText = decimalVal;

    document.getElementById("orResult").style.display = "none";
    document.getElementById("subResult").style.display = "none";
    document.getElementById("sumResult").style.display = "none";
    document.getElementById("andResult").style.display = "block";
    document.getElementById("mulResult").style.display = "none";
    document.getElementById("xorResult").style.display = "none";
    document.getElementById("notResult").style.display = "none";
    document.getElementById("nandResult").style.display = "none";
    document.getElementById("xnorResult").style.display = "none";
  } else if (selectedOperation === "or") {
    var resultOR = performLogicalOR(num1, num2);
    document.getElementById("orOutput").innerHTML = resultOR;

    var decimalVal = parseInt(resultOR, 2);
    document.getElementById("decimalOutputOr").innerText = decimalVal;

    document.getElementById("orResult").style.display = "block";
    document.getElementById("subResult").style.display = "none";
    document.getElementById("sumResult").style.display = "none";
    document.getElementById("andResult").style.display = "none";
    document.getElementById("mulResult").style.display = "none";
    document.getElementById("xorResult").style.display = "none";
    document.getElementById("notResult").style.display = "none";
    document.getElementById("nandResult").style.display = "none";
    document.getElementById("xnorResult").style.display = "none";
  } else if (selectedOperation == "mul") {
    var resMul = multiply8BitNumbers(num1, num2);
    document.getElementById("mulOutput").innerText = resMul;
    var decimalVal = parseInt(resMul, 2);
    document.getElementById("decimalOutputMul").innerText = decimalVal;
    document.getElementById("orResult").style.display = "none";
    document.getElementById("subResult").style.display = "none";
    document.getElementById("sumResult").style.display = "none";
    document.getElementById("andResult").style.display = "none";
    document.getElementById("mulResult").style.display = "block";
    document.getElementById("xorResult").style.display = "none";
    document.getElementById("notResult").style.display = "none";
    document.getElementById("nandResult").style.display = "none";
    document.getElementById("xnorResult").style.display = "none";
  } else if (selectedOperation == "xor") {
    var resXor = bitwiseXOR(num1, num2);
    document.getElementById("xorOutput").innerText = resXor;
    var decimalVal = parseInt(resXor, 2);
    document.getElementById("orResult").style.display = "none";
    document.getElementById("subResult").style.display = "none";
    document.getElementById("sumResult").style.display = "none";
    document.getElementById("andResult").style.display = "none";
    document.getElementById("mulResult").style.display = "none";
    document.getElementById("xorResult").style.display = "block";
    document.getElementById("notResult").style.display = "none";
    document.getElementById("nandResult").style.display = "none";
    document.getElementById("xnorResult").style.display = "none";
  } else if (selectedOperation == "nand") {
    var resNand = bitwiseNAND(num1, num2);
    document.getElementById("nandOutput").innerText = resNand;
    var decimalVal = parseInt(resNand, 2);
    document.getElementById("decimalOutputNand").innerText = decimalVal;
    document.getElementById("orResult").style.display = "none";
    document.getElementById("subResult").style.display = "none";
    document.getElementById("sumResult").style.display = "none";
    document.getElementById("andResult").style.display = "none";
    document.getElementById("mulResult").style.display = "none";
    document.getElementById("xorResult").style.display = "none";
    document.getElementById("notResult").style.display = "none";
    document.getElementById("nandResult").style.display = "block";
    document.getElementById("xnorResult").style.display = "none";
  } else if (selectedOperation == "xnor") {
    var resXnor = bitwiseXNOR(num1, num2);
    document.getElementById("xnorOutput").innerText = resXnor;
    var decimalVal = parseInt(resXnor, 2);
    document.getElementById("decimalOutputXnor").innerText = decimalVal;
    document.getElementById("orResult").style.display = "none";
    document.getElementById("subResult").style.display = "none";
    document.getElementById("sumResult").style.display = "none";
    document.getElementById("andResult").style.display = "none";
    document.getElementById("mulResult").style.display = "none";
    document.getElementById("xorResult").style.display = "none";
    document.getElementById("notResult").style.display = "none";
    document.getElementById("nandResult").style.display = "none";
    document.getElementById("xnorResult").style.display = "block";
  }
}
function binaryAdditionWithCarry(num1, num2, carryIn) {
  var decimalNum1 = parseInt(num1, 2);
  var decimalNum2 = parseInt(num2, 2);
  var decimalCarryIn = parseInt(carryIn, 2);

  // Perform binary addition with carry
  var sum = decimalNum1 + decimalNum2 + decimalCarryIn;

  // Ensure the sum stays within 8 bits
  var sum = (sum = sum.toString(2));
  if (sum.length > 8) {
    sum = sum.slice(1);
  }
  // var resultSumBinary = (sum & 0xFF).toString(2); // Masking to 8 bits (0xFF = 255 in decimal)

  // Calculate carry out for addition
  var carryOutAddition = sum > 255 ? 1 : 0; // Carry out if sum exceeds 8 bits

  return { result: sum, carryOut: carryOutAddition };
}

function binarySubtractionWithBorrow(num1, num2, borrowIn) {
  var decimalNum1 = parseInt(num1, 2);
  var decimalNum2 = parseInt(num2, 2);
  var decimalBorrowIn = parseInt(borrowIn, 2);

  // Perform binary subtraction with borrow
  var difference = decimalNum1 - decimalNum2 - decimalBorrowIn;
  var resultDifferenceBinary = difference.toString(2);
  if (resultDifferenceBinary.length > 8) {
    resultDifferenceBinary = resultDifferenceBinary.slice(1);
  }
  // Calculate borrow out for subtraction
  var borrowOutSubtraction = difference < 0 ? 1 : 0; // Assuming 8-bit numbers

  return { result: resultDifferenceBinary, borrowOut: borrowOutSubtraction };
}
function multiply8BitNumbers(num1, num2) {
  // Convert binary strings to decimal numbers
  let decimalNum1 = parseInt(num1, 2);
  let decimalNum2 = parseInt(num2, 2);

  // Perform multiplication
  let result = decimalNum1 * decimalNum2;

  // Ensure the result is within 8 bits (truncate if necessary)
  result = result & 0xff; // Masking to keep only the lowest 8 bits

  // Convert the result back to an 8-bit binary string
  let binaryResult = result.toString(2).padStart(8, "0");

  return binaryResult;
}

function performLogicalAND(num1, num2) {
  var decimalNum1 = parseInt(num1, 2);
  var decimalNum2 = parseInt(num2, 2);

  // Perform logical AND operation
  var logicalAND = decimalNum1 & decimalNum2;

  return logicalAND.toString(2);
}

function performLogicalOR(num1, num2) {
  var decimalNum1 = parseInt(num1, 2);
  var decimalNum2 = parseInt(num2, 2);

  // Perform logical OR operation
  var logicalOR = decimalNum1 | decimalNum2;

  return logicalOR.toString(2);
}
// XOR operation for two 8-bit binary numbers
function bitwiseXOR(num1, num2) {
  let decimalNum1 = parseInt(num1, 2);
  let decimalNum2 = parseInt(num2, 2);

  // Perform XOR operation
  let result = decimalNum1 ^ decimalNum2;

  // Ensure the result is within 8 bits
  result = result & 0xff; // Masking to keep only the lowest 8 bits

  // Convert the result back to an 8-bit binary string
  let binaryResult = result.toString(2).padStart(8, "0");

  return binaryResult;
}

// NOT operation for an 8-bit binary number
function bitwiseNOT(num) {
  let decimalNum = parseInt(num, 2);

  // Perform NOT operation
  let result = ~decimalNum;

  // Ensure the result is within 8 bits
  result = result & 0xff; // Masking to keep only the lowest 8 bits

  // Convert the result back to an 8-bit binary string
  let binaryResult = result.toString(2).padStart(8, "0");

  return binaryResult;
}

// NAND operation for two 8-bit binary numbers
function bitwiseNAND(num1, num2) {
  let decimalNum1 = parseInt(num1, 2);
  let decimalNum2 = parseInt(num2, 2);

  // Perform NAND operation
  let result = ~(decimalNum1 & decimalNum2);

  // Ensure the result is within 8 bits
  result = result & 0xff; // Masking to keep only the lowest 8 bits

  // Convert the result back to an 8-bit binary string
  let binaryResult = result.toString(2).padStart(8, "0");

  return binaryResult;
}

// XNOR operation for two 8-bit binary numbers
function bitwiseXNOR(num1, num2) {
  let decimalNum1 = parseInt(num1, 2);
  let decimalNum2 = parseInt(num2, 2);

  // Perform XNOR operation
  let result = ~(decimalNum1 ^ decimalNum2);

  // Ensure the result is within 8 bits
  result = result & 0xff; // Masking to keep only the lowest 8 bits

  // Convert the result back to an 8-bit binary string
  let binaryResult = result.toString(2).padStart(8, "0");

  return binaryResult;
}
