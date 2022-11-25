let counter = 0;
let notecounter = 0;
var addBtn = document.getElementById("addBtn");
var childBtn = "";

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
                document.getElementById(id).remove();
                var parent = divnote;
                var child = parent.lastElementChild; 
                while (child) {
                    parent.removeChild(child);
                    child = parent.lastElementChild;
                }    
                deleteBtn.remove();
                editBtn.remove();
                
                
           }
           
        }

        var observableDel = Rx.Observable.fromEvent(deleteBtn, 'click');
            observableDel.subscribe(deleteNote);

        const subAdd = {
            next: function() {
                let divsub = document.createElement('div');
                var text = document.getElementById("text-note").value;
                divsub.innerHTML += text;
                divsub.setAttribute("id", "div" + counter);
                divnote.appendChild(divsub);
                divnote.style.whiteSpace = "pre-wrap";
                divnote.style.wordWrap = "word-break";
                var backgcol = document.getElementById('colour').value;
        
                divsub.style.backgroundColor = backgcol;
                divsub.style.border = "1px solid black";
                divsub.style.borderRadius = "5px";
        
                
            
                }
            }
        
            var observableDelSub = Rx.Observable.fromEvent(deleteBtn, 'click');
            observableDelSub.subscribe(deleteNote);

            var subObservable = Rx.Observable.fromEvent(childBtn, 'click');
            subObservable .subscribe(subAdd)
    

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

        

        return divnote.id;
    }
    
}



        
    
var addObservable = Rx.Observable.fromEvent(addBtn, 'click');
addObservable.subscribe(observeAdd);


