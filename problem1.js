let counter = 0;
function createNote() {
    counter++;
    let divnote = document.createElement('div');
    var text = document.getElementById("text-note").value;
    divnote.innerHTML += text;
    divnote.setAttribute("id", "div" + counter);
    document.body.appendChild(divnote);
    var deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("id", "div" + counter);
    deleteBtn.innerHTML = "Delete";
    var editBtn = document.createElement('button');
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("id", "div" + counter);
    document.body.appendChild(deleteBtn);
    divnote.style.width = "fit-content";
    document.body.appendChild(editBtn);
    divnote.style.whiteSpace = "pre-wrap";
    divnote.style.wordWrap = "word-break";
    var backgcol = document.getElementById('colour').value;
    

    divnote.style.backgroundColor = backgcol;
    divnote.style.border = "1px solid black";
    divnote.style.borderRadius = "5px";

    deleteBtn.onclick = function () {
        var id = event.srcElement.id;
        document.getElementById(id).innerHTML = "";
        deleteBtn.remove();
        editBtn.remove();
    };

    editBtn.onclick = function() {
        var id = event.srcElement.id;
        document.getElementById(id).contentEditable = "true"; 
        var saveBtn = document.createElement('button');
        saveBtn.innerHTML = "Save Changes";
        saveBtn.setAttribute("id", id);
        
        document.body.appendChild(saveBtn);
        
        saveBtn.onclick = function() {
            var saveId = event.srcElement.id; 
            console.log(counter);
            document.getElementById(saveId).contentEditable = "false";
            saveBtn.remove();
        }
    }   

    return divnote.id;
}