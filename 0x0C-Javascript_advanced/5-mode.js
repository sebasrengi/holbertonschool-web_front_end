function changeMode(size, weight, transform, background, color) {
  document.documentElement.style['font-size'] = size;
  document.documentElement.style['font-weight'] = weight;
  document.documentElement.style['text-transform'] = transform;
  document.documentElement.style['background-color'] = background;
  document.documentElement.style['color'] = color;
}

function main() {
  const spooky = () => changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = () => changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = () => changeMode(12, "normal", "lowercase", "white", "black");

  let paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode('Welcome Holberton!'));
  document.body.appendChild(paragraph)

  let spookyButton = document.createElement('button');
  spookyButton.innerText = 'spooky';
  spookyButton.onclick = () => spooky();
  document.body.appendChild(spookyButton)

  let darkButton = document.createElement('button');
  darkButton.innerText = 'Dark mode';
  darkButton.onclick = () => darkMode();
  document.body.appendChild(darkButton)

  let screamButton = document.createElement('button');
  screamButton.innerText = 'Scream mode';
  screamButton.onclick = () => screamMode();
  document.body.appendChild(screamButton)
}

window.onload = main();
