const nameField = document.getElementById("submitName");

const renderGreeting = () => {
  const textField = document.getElementById("enterName");
  const greeting = document.getElementById("greeting");
  greeting.innerHTML = `Hello ${textField.innerHTML}`;
};

nameField.addEventListener("click", renderGreeting);


