function createElement(data) {
  let paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode(data));
  document.head.appendChild(paragraph);
}

function queryWikipedia(callback) {
  let request = new XMLHttpRequest();
  request.open("GET", 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  request.onreadystatechange = (event) => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        callback(null, JSON.parse(request.responseText));
      } else {
        const error = new Error('Error');
        return callback(error, null);
      }
    }
  }
  request.send();

}

queryWikipedia(createElement);
