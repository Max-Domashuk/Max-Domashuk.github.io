
function testAlert(){
alert("Text is now bigger!");
}

function fancyAlert(){
    alert("You just made the text Fancy!");
    }

function lostFancyAlert(){
    alert("You just removed the fancy text!");
    }

function bigger(){
    testAlert();
    var text = document.getElementById("text");
    text.style.fontSize="24pt";
}

function getFancy(){
    fancyAlert();
    var text = document.getElementById("text");
    text.style.fontWeight="bold";
    text.style.color="blue";
    text.style.textDecoration="underline";
}

function removeFancy(){
    lostFancyAlert();
    var text = document.getElementById("text");
    text.style.fontWeight="normal";
    text.style.color="black";
    text.style.textDecoration="none";
}

function moo() {
    var text = document.getElementById("text");
    var suffix = "-Moo";
    text.style.textTransform="uppercase";
    text.value = text.value.split('.').join('') +suffix;

}
