var lebelList = document.getElementsByTagName("label");

for (let index = 0; index < lebelList.length; index++) {
    lebelList[index].addEventListener("click", function(event){alert(lebelList[index].textContent);});
    console.log(lebelList[index]);
}