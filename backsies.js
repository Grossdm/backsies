(function(){
  "use strict";
  
  /**
   * Checks if element is valid for navigation
   * @param {string} element - DOM element in focus
   */
  var isBackspaceValid = function(element) {
    
    // list of DOM elements that should not
    // navigate page when they are focused
    var invalid = [
      'audo',
      'canvas',
      'embed',
      'input',
      'object',
      'option',
      'output',
      'param',
      'progress',
      'samp',
      'select',
      'textarea',
      'video'
    ];
    
    //disable on elements with the 'role' attribute
    if(document.activeElement.getAttribute('role')) {
      return false;
    }

    //disable on elements with the 'contenteditable' attribute
    if(document.activeElement.getAttribute('contenteditable') === "true" || document.activeElement.getAttribute('contenteditable') === "") {
      return false;    
    }

    return (invalid.indexOf(element.toLowerCase()) > -1) ? false :true;
  };
  
  window.addEventListener('keydown', function(e){
    var element = document.activeElement.localName;
    var backspace = e.keyCode === 8;
    var shiftBackspace = (e.keyCode === 8 && e.shiftKey);
    

    if(backspace && !shiftBackspace && isBackspaceValid(element)) {
        e.preventDefault();
        window.history.back();
        
    }
    else if(backspace && shiftBackspace && isBackspaceValid(element)) { 
        e.preventDefault();
        window.history.forward();
    }
  });
})();
