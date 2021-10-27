const nameField = document.getElementById("enterName");

nameField.addEventListener("click", renderHTML);

const getName = () => {
  let greeting = document.getElementById("greeting");
  greeting.innerHTML = "Hello " + this.value;
};

const renderHTML = (name) => {
  let greeting = document.createElement(p);
  greeting.innerHTML = "this.value"
}
