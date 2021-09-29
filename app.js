var inputText=document.querySelector("#text-input");

var submit=document.querySelector("#btn-input");

var outputText=document.querySelector("#text-output");

var url="https://api.funtranslations.com/translate/minion.json"

function translationURL(input) {
    return url + "?"+"text="+input
}

function errorHandler(error) {
    console.log("Error Occured"+error)
    alert("something went wrong with the server!")
}

function clickHandler() {
    var txtinput=inputText.value

    fetch(translationURL(txtinput)).then(response => response.json())
    .then(json => { 
        var translatedTxt= json.contents.translated
        outputText.innerText = translatedTxt
    }) .catch(errorHandler)
};

submit.addEventListener("click",clickHandler)

