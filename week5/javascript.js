// / Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
  const dynamicText = document.getElementById('dynamicText');
  dynamicText.textContent = 'The text has been changed!';
});

// Modify CSS styles via JavaScript
document.getElementById('changeColorBtn').addEventListener('click', function() {
  const colorBox = document.getElementById('colorBox');
  colorBox.style.backgroundColor = 'lightgreen';
});

// Add an element when a button is clicked
document.getElementById('addElementBtn').addEventListener('click', function() {
  const newElement = document.createElement('div');
  newElement.className = 'added-element';
  newElement.textContent = 'I am a new element!';
  document.getElementById('elementContainer').appendChild(newElement);
});

// Remove the last added element when a button is clicked
document.getElementById('removeElementBtn').addEventListener('click', function() {
  const container = document.getElementById('elementContainer');
  const lastElement = container.lastElementChild;
  if (lastElement) {
    container.removeChild(lastElement);
  }
});