$(document).ready(function(){

    $("a").on('click', function(event) {
  
    
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          
          window.location.hash = hash;
        });
      } // End if
    });
  });