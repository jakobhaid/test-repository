var lebelList = document.getElementsByTagName("label");

for (let index = 0; index < lebelList.length; index++) {
    lebelList[index].addEventListener("click", function(event){alert(this.innerText);});
}