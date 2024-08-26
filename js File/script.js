const addPostBtn = document.getElementById("addPostBtn");
addPostBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const textArea = document.getElementById("textAdd");
    const textAreaValue = textArea.value;
    const postedArea = document.getElementById("postedArea");
    const divTag = document.createElement("div");
    divTag.innerText = textAreaValue;
    postedArea.appendChild(divTag);
    textArea.value = "";
    textArea.focus();

    
});

const addImgArea = document.getElementById("addImgArea");
const inputFile = document.getElementById("inputFile");

inputFile.onchange = function(){
    const profilePic = document.createElement("img");
    profilePic.style.height = "300px";
    profilePic.style.width = "100%";
    profilePic.style.marginTop = "20px";
    profilePic.style.marginBottom = "20Px";
    profilePic.style.borderRadius = "5px";
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
    addImgArea.appendChild(profilePic);
}




