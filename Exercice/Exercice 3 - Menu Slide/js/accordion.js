$(function() {
    $("#navigation li ul").hide() ; 
        $("ul li ").hover (function() {
        
            $("ul",this).show();
    },function() {
        $("ul",this).hide();
        
    
    });
    
    })