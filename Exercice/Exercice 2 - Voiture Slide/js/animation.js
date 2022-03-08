$(function() {
$("ul").hover (function() {
    $("li",this).animate({width:'500px'},2000);
    $(".texte",this).animate({top:'150px'},1500);

},function() {
    $("li",this).animate({width:'200px'},2000);
    $(".texte",this).animate({top:'-50px'},200); // L'animate pour le texte sera appliqué si on n'a caché le text en css avec "position:absolute; top:valeur négatif"

});

})