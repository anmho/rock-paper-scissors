const nameField = document.getElementById("submitName");

nameField.addEventListener("click", getName);

const getName = () => {
  let submit = document.getElementById("submitName");
  let textField = document.getElementById("enterName");
  greeting.innerHTML = `Hello ${textField.innerHTML}`;
};

const renderHTML = (name) => {
  let greeting = document.createElement(p);
  greeting.innerHTML = "this.value"
}
