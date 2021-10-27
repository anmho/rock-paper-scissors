const nameField = document.getElementById("enterName");

nameField.addEventListener("click", getName);

const getName = () => {
  return this.value;
};


