$(function() {
    // Traitement
    $("li").hover(function() {
        // On va modifier le contenu de la balise span de li survolé
        $("span",this).html('-');
        $("p",this).show();
    },function() {$("span",this).html('+');
    $("p",this).hide();}
    );
})
