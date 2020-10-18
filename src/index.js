Undo.init = (editor) => {
  /**
    Initialize undo stack
    * */

  const undo = new Undo({ editor });

  
  console.log("UNDO",undo);
  
  //avoid sanitizer to polluate Undo Stack
  undo.disable();
  
  // alternative to .save(true) who was to avoid sanitizing Blocks,
  // but requires to patch editorjs-undo, use tool-configurator instead of just patching editor-js
  editor.save().then((initialData) => {
    undo.initialize(initialData);
    undo.enable();
  }).catch((error) => {
    console.log('Saving failed: ', error);
    undo.enable();
  });

  editor.undo = undo;
};

// Register so SoSIe will autoinit.
SoSIE.register('Undo');
