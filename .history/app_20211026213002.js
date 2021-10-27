const nameField = document.getElementById("submitName");

const renderGreeting = () => {
  const textField = document.getElementById("enterName");
  
  const greeting = document.createElement('p');
  greeting.id = 'greeting';

  greeting.innerHTML = `Hello ${textField.value}`;  

  document.append(greeting);



};

nameField.addEventListener("click", renderGreeting);


