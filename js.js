
      $(document).ready(function(){
      $('.parallax').parallax();
      $('.scrollspy').scrollSpy();
    });

$(".button-collapse").sideNav();

   

 
var options = [  

{selector: '#fade', offset: 200, callback: function(el) 
    { Materialize.showStaggeredList($(el)); } }, 

{selector: '#fade2', offset: 200, callback: function(el) 
    { Materialize.showStaggeredList($(el)); } }, 

{selector: '#fade3', offset: 200, callback: function(el) 
    { Materialize.showStaggeredList($(el)); } }, 

{selector: '#fade', offset: 200, callback: function(el) 
    { Materialize.myFirstTry($(el)); } },

{selector: '#line-anim', offset: 200, callback: function(el) 
    { Materialize.lineAnim($(el)); } },

{selector: '#hidd-exp1', offset: 250, callback: function(el) 
    { Materialize.myHiddExp1($(el)); } },

{selector: '#hidd-exp2', offset: 250, callback: function(el) 
    { Materialize.myHiddExp2($(el)); } },

{selector: '#hidd-exp3', offset: 250, callback: function(el) 
    { Materialize.myHiddExp3($(el)); } },

{selector: '#hidd-exp4', offset: 250, callback: function(el) 
    { Materialize.myHiddExp4($(el)); } } ];



Materialize.scrollFire(options); 



 Materialize.myFirstTry = function(selectorOrEl) {
    var element;
    if (typeof(selectorOrEl) === 'string') {
      element = $(selectorOrEl);
    } else if (typeof(selectorOrEl) === 'object') {
      element = selectorOrEl;
    } else {
      return;
    }
    
    $( "#flash" ).addClass( "mydivanimflash" );
    $( "#photoshop" ).addClass( "mydivanimphotoshop" );
    $( "#illustrator" ).addClass( "mydivanimillustrator" );
    $( "#handDrawing" ).addClass( "mydivanimhandDrawing" );
  };

  Materialize.lineAnim = function(selectorOrEl) {   
    $( "#line-anim2" ).addClass( "my-circle-anim-name" );
  };

  Materialize.myHiddExp1 = function(selectorOrEl) {   
    $( "#hidd-exp1" ).addClass( "hidd-exp" );
  };

  Materialize.myHiddExp2 = function(selectorOrEl) {   
    $( "#hidd-exp2" ).addClass( "hidd-exp" );
  };

  Materialize.myHiddExp3 = function(selectorOrEl) {   
    $( "#hidd-exp3" ).addClass( "hidd-exp" );
  };

  Materialize.myHiddExp4 = function(selectorOrEl) {   
    $( "#hidd-exp4" ).addClass( "hidd-exp" );
  };




  
