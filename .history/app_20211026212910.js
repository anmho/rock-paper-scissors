const nameField = document.getElementById("submitName");

const renderGreeting = () => {
  const textField = document.getElementById("enterName");
  const greeting = document.getElementById("greeting");

  greeting = document.createElement('p'[id=]);

  greeting.innerHTML = `Hello ${textField.value}`;  
};

nameField.addEventListener("click", renderGreeting);


