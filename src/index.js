/*!
* Undo tool helper plugin
* 
* @version 1.1.0
* @package https://github.com/sosie-js/undo-plugin
**/

/**
 * init Undo tool by setting initiaildata in the undo stack
 * 
 * @param {Object} editor - Editor.js API 
 */
Undo.init = (editor) => {

  const undo = new Undo({ editor });

  undo.disable();
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
