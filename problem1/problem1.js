let counter = 0;
var addBtn = document.getElementById("addBtn");


//function to add a note
const observeAdd = {
    next: function() {
        //counter to ensure correct divs are created
        counter++;

        //adds the note
        let divnote = document.createElement('div');
        var text = document.getElementById("text-note").value;
        divnote.innerHTML += text;
        divnote.setAttribute("id", "div" + counter);
        document.body.appendChild(divnote);

        //adds a delete and edit button
        var deleteBtn = document.createElement('button');
        deleteBtn.setAttribute("id", "div" + counter);
        deleteBtn.innerHTML = "Delete";
        var editBtn = document.createElement('button');
        editBtn.innerHTML = "Edit";
        editBtn.setAttribute("id", "div" + counter);
        document.body.appendChild(deleteBtn);
        divnote.style.width = "fit-content";
        document.body.appendChild(editBtn);

        //styles the notes/buttons
        divnote.style.whiteSpace = "pre-wrap";
        divnote.style.wordWrap = "word-break";
        var backgcol = document.getElementById('colour').value;


        divnote.style.backgroundColor = backgcol;
        divnote.style.border = "1px solid black";
        divnote.style.borderRadius = "5px";


        //deletes the note
        const deleteNote = {
            next: function() {
                //removes the button clicked using the id
                var id = event.srcElement.id;
                document.getElementById(id).innerHTML = "";
                deleteBtn.remove();
                editBtn.remove();
                
            }
        }

        //subscribes the delete button to the delete function
        var observableDel = Rx.Observable.fromEvent(deleteBtn, 'click');

        observableDel.subscribe(deleteNote);

        
        //edit button 
        const editNote = {
            next: function() {
                //allows users to edit the note when the edit button of the note is clicked
                var id = event.srcElement.id;
                document.getElementById(id).contentEditable = "true"; 
                var saveBtn = document.createElement('button');
                //creates a save changes button to save the edits
                saveBtn.innerHTML = "Save Changes";
                saveBtn.setAttribute("id", id);
                
                document.body.appendChild(saveBtn);
                
                const saveNote = {
                    next: function() {
                        var saveId = event.srcElement.id; 
                        console.log(counter);
                        document.getElementById(saveId).contentEditable = "false";
                        saveBtn.remove();
                    }
                }
                
                //subscribes to the save button
                var observableSave = Rx.Observable.fromEvent(saveBtn, 'click');
        
                observableSave.subscribe(saveNote);
            }
        }
        //subscribes to the edit function
        var observableEdit = Rx.Observable.fromEvent(editBtn, 'click');

        observableEdit.subscribe(editNote);


        return divnote.id;
    }
}

//subscribes to the add event so that the notes are created
var addObservable = Rx.Observable.fromEvent(addBtn, 'click');
addObservable.subscribe(observeAdd);

    