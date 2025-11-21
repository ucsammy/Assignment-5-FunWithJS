function biggerText(){
    document.getElementById("largeUserText").style.fontSize = "24pt";
}

function addStyle(){
    if(document.getElementById("fancy").checked){
        document.getElementById("largeUserText").style.fontWeight="bold";
        document.getElementById("largeUserText").style.color="blue";
        document.getElementById("largeUserText").style.textDecoration="underline";


    } else {
        document.getElementById("largeUserText").style.fontWeight="normal";
        document.getElementById("largeUserText").style.color="black";
        document.getElementById("largeUserText").style.textDecoration="none";
    }
}

function textGoesMoo(){
    let userInput = document.getElementById("largeUserText").value.toUpperCase();
    let endOfSentence = userInput.split(".");

    for (let i=0; i < endOfSentence.length; i++){
        let endTrim = endOfSentence[i].trim();
        if(endTrim.length > 0){
            endOfSentence[i] = endTrim + "-MOO";
        }
    }

    document.getElementById("largeUserText").value = endOfSentence.join(".");

}

function clearText(){
    document.getElementById("largeUserText").value = "";
}