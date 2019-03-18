/*global chrome*/

// Inspired by:
// https://stackoverflow.com/questions/704564/disable-drag-and-drop-on-html-elements

window.onload = function StopDragChromeExtension() {

	function stopDragging() {
		return false;
	}
	
	document.body.ondragstart = stopDragging;
	document.body.ondrop = stopDragging;	
}