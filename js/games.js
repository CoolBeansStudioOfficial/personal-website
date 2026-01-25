const candyDropPlaceholder = document.getElementById("candyDropPlaceholder");
const candyDrop = document.getElementById("candyDrop");

candyDropPlaceholder.addEventListener("click", ShowCandyDrop);
candyDrop.remove;

function ShowCandyDrop() {
    candyDropPlaceholder.hidden = true;
    candyDropPlaceholder.replaceWith(candyDrop)
    candyDrop.hidden = false;
    
}



const washeningPlaceholder = document.getElementById("washeningPlaceholder");
const washening = document.getElementById("washening");

washeningPlaceholder.addEventListener("click", ShowWashening);
washening.remove;

function ShowWashening() {
    washeningPlaceholder.hidden = true;
    washening.replaceWith(washening)
    washening.hidden = false;

}