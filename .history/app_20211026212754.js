const nameField = document.getElementById("submitName");

const renderGreeting = () => {
  const textField = document.getElementById("enterName");
  const greeting = document.getElementById("greeting");
  greeting.innerHTML = `Hello ${textField.value}`;
  document.append
};

nameField.addEventListener("click", renderGreeting);


