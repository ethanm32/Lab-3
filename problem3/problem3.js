let counter = 0;
var addBtn = document.getElementById("addBtn");


const observeAdd = {
    next: function() {
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
        var childBtn = document.createElement('button');
        childBtn.innerHTML = "Add Sub Note";
        childBtn.setAttribute("id", "div" + counter);
        document.body.appendChild(deleteBtn);
        divnote.style.width = "fit-content";
        document.body.appendChild(editBtn);
        document.body.appendChild(childBtn);
        divnote.style.whiteSpace = "pre-wrap";
        divnote.style.wordWrap = "word-break";
        var backgcol = document.getElementById('colour').value;


        divnote.style.backgroundColor = backgcol;
        divnote.style.border = "1px solid black";
        divnote.style.borderRadius = "5px";

        const deleteNote = {
            next: function() {
                var id = event.srcElement.id;
                document.getElementById(id).innerHTML = "";
                deleteBtn.remove();
                editBtn.remove();
                
            }
        }

        var observableDel = Rx.Observable.fromEvent(deleteBtn, 'click');

        observableDel.subscribe(deleteNote);

        

        const editNote = {
            next: function() {
                var id = event.srcElement.id;
                document.getElementById(id).contentEditable = "true"; 
                var saveBtn = document.createElement('button');
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
        
                var observableSave = Rx.Observable.fromEvent(saveBtn, 'click');
        
                observableSave.subscribe(saveNote);
            }
        }

        var observableEdit = Rx.Observable.fromEvent(editBtn, 'click');

        observableEdit.subscribe(editNote);

        var subObservable = Rx.Observable.fromEvent(childBtn, 'click');
        subObservable .subscribe(subAdd)

        return divnote.id;
    }
    
}


const subAdd = {
    next: function() {
        counter++;
        let divnote = document.createElement('div');
        var text = document.getElementById("text-note").value;
        divnote.innerHTML += text;
        divnote.setAttribute("id", "div" + counter);
        document.body.appendChild(divnote);
        divnote.style.whiteSpace = "pre-wrap";
        divnote.style.wordWrap = "word-break";
        var backgcol = document.getElementById('colour').value;


        divnote.style.backgroundColor = backgcol;
        divnote.style.border = "1px solid black";
        divnote.style.borderRadius = "5px";

        
    
        }
    }

        
    
var addObservable = Rx.Observable.fromEvent(addBtn, 'click');
addObservable.subscribe(observeAdd);



    