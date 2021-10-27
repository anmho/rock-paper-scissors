const nameField = document.getElementById("submitName");

const getName = () => {
  let textField = document.getElementById("enterName");
  greeting.innerHTML = `Hello ${textField.innerHTML}`;
};

const renderGreeting = () => {
  let greeting = document.createElement(p);
  greeting.innerHTML = "this.value";
};

nameField.addEventListener("click", getName);


