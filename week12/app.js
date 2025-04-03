const dreamsRef = document.querySelector("#dreams")

async function addNewDream(e) {
    e.preventDefault();
}

dreamFormRef.onsubmit = addNewDream;

getDreams();