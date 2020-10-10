
/**
* Sample of buttons for the Undo Plugin
*
* @property {EditorJS} editor - an instance of Editor.js with SoSIE menubar
*/
function sampleUndo(editor) {
    

    function addUndoRedoPanel(editor) {

    /**
    * Undo button
    */
    editor.sosie.addMenuIconBtn({
        icon: 'undo',
        id: 'undoButton',
        title: 'Undo',
        text: '',
        onClick: [function () {
        if (editor.undo.count()) {
            editor.undo.undo();
        }
        }, false],
        custom: {
            disabled: true,
        },
    });

    /**
     * History position 
     **/
    const anchor = editor.sosie._make('a', null, {
        title: 'History position',
        style: 'padding-right:0;padding-left:0;',
    });

    const input = editor.sosie._make('input', null, {
        id: 'historyPosition',
        type: 'text',
        style: 'width:2em',
        size: '3',
        value: '',
        placeholder: '?',
        readonly: 'readonly',
    });
    anchor.appendChild(input);
    editor.sosie.addMenuItemAnchor(anchor);
    editor.sosie.set(input.id);

     /**
     * Redo button
     **/
    editor.sosie.addMenuIconBtn({
        icon: 'repeat',
        id: 'redoButton',
        title: 'Redo',
        text: '',
        onClick: [function () {
        if (editor.undo.count()) {
            editor.undo.redo();
        }
        }, false],
        custom: {
        disabled: true,
        },
    });

     /**
     * State of Undo/redo button manager
     **/
    window.refreshUndoRedoPanel = function () {
        // console.log('SOSIE',editor.sosie);
        const undoButton = editor.sosie.get('undoButton');
        const redoButton = editor.sosie.get('redoButton');
        const ubtn = undoButton.firstChild.lastChild;
        const rbtn = redoButton.firstChild.lastChild;
        const { undo } = editor;

        // Refresh Undo/Redo button state
        if (undo.count()) {
        ubtn.removeAttribute('disabled');

        if (undo.position <= undo.count()) {
            if (undo.position == 0) {
            ubtn.setAttribute('disabled', 'disabled');
            console.log('ubtn disabled');
            } else {
            ubtn.removeAttribute('disabled');
            console.log('ubtn enabled');
            }
        } else {
            ubtn.setAttribute('disabled', 'disabled');
            console.log('ubtn disabled');
        }

        if (undo.position < undo.count()) {
            rbtn.removeAttribute('disabled');
            console.log('rbtn enabled');
        } else if (undo.position == undo.count()) {
            rbtn.setAttribute('disabled', 'disabled');
            console.log('rbtn disabled');
        } else {
            rbtn.removeAttribute('disabled');
            console.log('rbtn enabled');
        }
        }

        // Refresh examination button state
    /*  if(undo.position ==0) {
            ebtn.setAttribute('disabled','disabled');
            console.log('ebtn disabled');
        } else {
            ebtn.removeAttribute('disabled');
            console.log('ebtn enabled');
        }*/ 

        editor.sosie.get('historyPosition').value = undo.position;
        // console.log(historyPosition);
        console.log(`update${undo.position}/${undo.count()}`);
        console.log('Undo Panel Buttons refreshed');
    };
  }  
    
  if (editor.hasOwnProperty('sosie')) {
    addUndoRedoPanel(editor);
  }
}
