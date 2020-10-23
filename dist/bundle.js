/*!
* Undo tool helper plugin
* 
* @version 1.1.0
* @package https://github.com/sosie-js/undo-plugin
**/
Undo.init=e=>{const n=new Undo({editor:e});n.disable(),e.save().then(e=>{n.initialize(e),n.enable()}).catch(e=>{console.log("Saving failed: ",e),n.enable()}),e.undo=n},SoSIE.register("Undo");