'use strict';

function getElementWidth(content, padding, border) {
  const contentNumber = Number.parseFloat(content);
  const paddingNumber = Number.parseFloat(padding);
  const borderNumber = Number.parseFloat(border);
  const width = contentNumber + paddingNumber * 2 + borderNumber * 2;
  return width;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
