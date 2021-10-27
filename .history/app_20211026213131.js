const nameField = document.getElementById("submitName");

const renderGreeting = () => {
  const textField = document.getElementById("enterName");

  const greeting = document.createElement('p');
  greeting.id = 'greeting';

  greeting.innerHTML = `Hello ${textField.value}`;

  const body = document.getElementById('body');



};

nameField.addEventListener("click", renderGreeting);


