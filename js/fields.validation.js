/*!
 * jQuery Fields Validation Plugin 1.0
 * Copyright 2013 Andres Luque - @andreslgo
 * Released under the BSD License
 */
(function($){ 
  $.fn.entero = function() {
     return this.keyup($.fn.entero.keypress)
  };  
  $.fn.entero.keypress = function(){
      expresion=/\d+/;
      cadena=expresion.exec(this.value);
      largo= cadena == null ? 0: cadena[0].length;
      if(this.value.length != largo){
        if(this.value != '')
          this.value=this.value.match(expresion);
      }
  }
  $.fn.decimal = function(){
      return this.keyup($.fn.decimal.keypress)
  }
  $.fn.decimal.keypress = function(){
      expresion = /(^(\d+)(\.)?(\d+)?)|(^\.(\d+)?)/;
      cadena=expresion.exec(this.value);
      largo= cadena == null ? 0: cadena[0].length;
      if(this.value.length != largo){
        if(!this.value.match(expresion)) {
            this.value='';
        }
        else {
            this.value=this.value.match(expresion)[0];
        }
      }
  }
})(jQuery);