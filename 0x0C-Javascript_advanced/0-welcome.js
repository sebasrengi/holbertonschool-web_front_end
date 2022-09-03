function welcome(firstName, lastName) {
  let fulName = `${firstName} ${lastName}`;

  function displayFullName() {
    alert(`Welcome ${fulName}!`);
  }
  displayFullName();
}
