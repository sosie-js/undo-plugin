Undo.init = (editor) => {
  /**
    Initialize undo stack
    * */

  const undo = new Undo({ editor });

  // true is to avoid sanitizing Blocks, requires to patch editorjs
  editor.save(true).then((initialData) => {
    undo.initialize(initialData);
  }).catch((error) => {
    console.log('Saving failed: ', error);
  });

  editor.undo = undo;
};

// Register so SoSIe will autoinit.
window.SoSIE.register('Undo');
