const nameField = document.getElementById("submitName");

const renderGreeting = () => {
  const textField = document.getElementById("enterName");
  const greeting = document.getElementById("greeting");

  document.createElement()

  greeting.innerHTML = `Hello ${textField.value}`;  
};

nameField.addEventListener("click", renderGreeting);


