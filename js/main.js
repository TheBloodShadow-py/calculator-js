"use strict;";

const domSquare = document.querySelector(".square");
const domLeftBracket = document.querySelector(".left-brackets");
const domRightBracket = document.querySelector(".right-brackets");
const domPercent = document.querySelector(".percent");
const domSeven = document.querySelector(".seven");
const domEight = document.querySelector(".eight");
const domNine = document.querySelector(".nine");
const domDivide = document.querySelector(".divide");
const domFour = document.querySelector(".four");
const domFive = document.querySelector(".five");
const domSix = document.querySelector(".six");
const domTimes = document.querySelector(".times");
const domOne = document.querySelector(".one");
const domTwo = document.querySelector(".two");
const domThree = document.querySelector(".three");
const domMinus = document.querySelector(".minus");
const domZero = document.querySelector(".zero");
const domComma = document.querySelector(".comma");
const domDel = document.querySelector(".del");
const domEqual = document.querySelector(".equal");
const domPlus = document.querySelector(".plus");

const domResult = document.getElementById("result");

let number1 = 0;
let tempNumbers = "";
let patternMath = /\+\+/g;

domDel.addEventListener("click", clearResult);

domZero.addEventListener("click", startCalc);
domOne.addEventListener("click", startCalc);
domTwo.addEventListener("click", startCalc);
domThree.addEventListener("click", startCalc);
domFour.addEventListener("click", startCalc);
domFive.addEventListener("click", startCalc);
domSix.addEventListener("click", startCalc);
domSeven.addEventListener("click", startCalc);
domEight.addEventListener("click", startCalc);
domNine.addEventListener("click", startCalc);

domPlus.addEventListener("click", startPlus);
domMinus.addEventListener("click", startMinus);
domTimes.addEventListener("click", startTimes);
domDivide.addEventListener("click", startDivide);
domComma.addEventListener("click", startComma);
domEqual.addEventListener("click", endCalc);
domSquare.addEventListener("click", startRoot);
domPercent.addEventListener("click", startPercent);

document.onload = setTimeout(() => {
  domResult.innerHTML = "";
  domResult.style.letterSpacing = "4px";
}, 500);

function clearResult() {
  domResult.innerHTML = "";
}

function startCalc() {
  const isTooLong = domResult.innerHTML.length >= 10;
  if (isTooLong) {
    return;
  }

  if (this.outerHTML.includes(1)) {
    domResult.innerHTML += 1;
  } else if (this.outerHTML.includes(2)) {
    domResult.innerHTML += 2;
  } else if (this.outerHTML.includes(3)) {
    domResult.innerHTML += 3;
  } else if (this.outerHTML.includes(4)) {
    domResult.innerHTML += 4;
  } else if (this.outerHTML.includes(5)) {
    domResult.innerHTML += 5;
  } else if (this.outerHTML.includes(6)) {
    domResult.innerHTML += 6;
  } else if (this.outerHTML.includes(7)) {
    domResult.innerHTML += 7;
  } else if (this.outerHTML.includes(8)) {
    domResult.innerHTML += 8;
  } else if (this.outerHTML.includes(9)) {
    domResult.innerHTML += 9;
  } else if (this.outerHTML.includes(0)) {
    domResult.innerHTML += 0;
  } else {
    return false;
  }
}

function hasDuplicate(str) {
  if (patternMath.test(str)) {
    return true;
  } else {
    return false;
  }
}

function startPlus() {
  tempNumbers = domResult.innerHTML;
  if (
    domResult.innerHTML.endsWith("+") ||
    domResult.innerHTML.endsWith("-") ||
    domResult.innerHTML.endsWith("/") ||
    domResult.innerHTML.endsWith("*") ||
    domResult.innerHTML.endsWith(".") ||
    hasDuplicate(tempNumbers)
  ) {
    return;
  } else {
    domResult.innerHTML += "+";
  }
}

function startMinus() {
  tempNumbers = domResult.innerHTML;
  if (
    domResult.innerHTML.endsWith("+") ||
    domResult.innerHTML.endsWith("-") ||
    domResult.innerHTML.endsWith("/") ||
    domResult.innerHTML.endsWith("*") ||
    domResult.innerHTML.endsWith(".") ||
    hasDuplicate(tempNumbers)
  ) {
    return;
  } else {
    domResult.innerHTML += "-";
  }
}

function startTimes() {
  tempNumbers = domResult.innerHTML;
  if (
    domResult.innerHTML.endsWith("+") ||
    domResult.innerHTML.endsWith("-") ||
    domResult.innerHTML.endsWith("/") ||
    domResult.innerHTML.endsWith("*") ||
    domResult.innerHTML.endsWith(".") ||
    hasDuplicate(tempNumbers)
  ) {
    return;
  } else {
    domResult.innerHTML += "*";
  }
}

function startDivide() {
  tempNumbers = domResult.innerHTML;
  if (
    domResult.innerHTML.endsWith("+") ||
    domResult.innerHTML.endsWith("-") ||
    domResult.innerHTML.endsWith("/") ||
    domResult.innerHTML.endsWith("*") ||
    domResult.innerHTML.endsWith(".") ||
    hasDuplicate(tempNumbers)
  ) {
    return;
  } else {
    domResult.innerHTML += "/";
  }
}

function startRoot() {
  if (
    domResult.innerHTML.endsWith("+") ||
    domResult.innerHTML.endsWith("-") ||
    domResult.innerHTML.endsWith("/") ||
    domResult.innerHTML.endsWith("*") ||
    domResult.innerHTML.endsWith(".")
  ) {
    domResult.innerHTML = "Error...";
    setTimeout(() => {
      clearResult();
    }, 500);
    return;
  } else if (domResult.innerHTML === "") {
    domResult.innerHTML = "Error...";
    setTimeout(() => {
      clearResult();
    }, 500);
    return;
  }
  finalResult = eval(domResult.innerHTML);
  domResult.innerHTML = Math.sqrt(parseFloat(finalResult)).toFixed(4);
}

function startComma() {
  tempNumbers = domResult.innerHTML;
  if (
    domResult.innerHTML.endsWith("+") ||
    domResult.innerHTML.endsWith("-") ||
    domResult.innerHTML.endsWith("/") ||
    domResult.innerHTML.endsWith("*") ||
    domResult.innerHTML.endsWith(".") ||
    hasDuplicate(tempNumbers)
  ) {
    return;
  } else {
    domResult.innerHTML += ".";
  }
}

function startPercent() {
  if (
    domResult.innerHTML.endsWith("+") ||
    domResult.innerHTML.endsWith("-") ||
    domResult.innerHTML.endsWith("/") ||
    domResult.innerHTML.endsWith("*") ||
    domResult.innerHTML.endsWith(".")
  ) {
    domResult.innerHTML = "Error...";
    setTimeout(() => {
      clearResult();
    }, 500);
    return;
  } else if (domResult.innerHTML === "") {
    domResult.innerHTML = "Error...";
    setTimeout(() => {
      clearResult();
    }, 500);
    return;
  }
  finalResult = eval(domResult.innerHTML);
  domResult.innerHTML = parseFloat(finalResult) / 100;
}

function endCalc() {
  if (
    domResult.innerHTML.endsWith("+") ||
    domResult.innerHTML.endsWith("-") ||
    domResult.innerHTML.endsWith("/") ||
    domResult.innerHTML.endsWith("*") ||
    domResult.innerHTML.endsWith(".")
  ) {
    domResult.innerHTML = "Error...";
    setTimeout(() => {
      clearResult();
    }, 500);
    return;
  } else if (domResult.innerHTML === "") {
    domResult.innerHTML = "Error...";
    setTimeout(() => {
      clearResult();
    }, 500);
    return;
  }
  finalResult = eval(domResult.innerHTML);
  domResult.innerHTML = parseFloat(finalResult);
}
