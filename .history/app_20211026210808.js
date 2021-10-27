const nameField = document.getElementById("submitName");

const getName = () => {

};

const renderGreeting = () => {
  let textField = document.getElementById("enterName");
  greeting.innerHTML = `Hello ${textField.innerHTML}`;
};

nameField.addEventListener("click", renderGreeting);


