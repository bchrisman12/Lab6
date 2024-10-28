function isValidRGB(rgb) {
  const regex = /^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/;
  const match = rgb.match(regex);
  if (!match) return false;
  return match.slice(1).every((num) => num >= 0 && num <= 255);
}

function applyStyles() {
  const paragraph = document.getElementById('paragraph');
  const textColorInput = document.getElementById('textColor').value.trim();
  const borderColorInput = document.getElementById('borderColor').value.trim();
  const borderWidthInput = document.getElementById('borderWidth').value.trim();

  if (isValidRGB(textColorInput)) {
    paragraph.style.color = `rgb(${textColorInput})`;
  } else if (textColorInput) {
    alert('Invalid RGB value for text color. Use format: 255,0,0');
  }

  if (isValidRGB(borderColorInput)) {
    paragraph.style.borderColor = `rgb(${borderColorInput})`;
  } else if (borderColorInput) {
    alert('Invalid RGB value for border color. Use format: 0,255,0');
  }

  if (borderWidthInput && !isNaN(borderWidthInput) && borderWidthInput >= 0) {
    paragraph.style.borderWidth = `${borderWidthInput}px`;
  } else if (borderWidthInput) {
    alert('Border width must be a non-negative number.');
  }
}
  