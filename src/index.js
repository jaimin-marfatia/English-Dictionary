
function ShowMeanings() {

  // take the input from textbox
  const userInput = document.getElementById("txtInput").value;
  
  CallDictionaryApi(userInput);
}

function CallDictionaryApi(_userInput) {

  const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + _userInput;

  fetch(baseUrl)
    .then(response => response.json())
    .then (data => ProcessJson(data));
}

function ProcessJson(data) {

  data.forEach(element => {

    const para = document.createElement("li");
    para.classList.add("flex-item");
    const node = document.createTextNode("1");
    para.appendChild(node);
    const test = document.getElementById("flex-container");
    test.appendChild(para);

    console.log(element.meanings);
  });

  // console.log(data);
}