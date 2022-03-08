$(function() {

// Evenement click
$("button").click(function(){

// On va verifier si les 2 valeurs saisie dans les 2 champs , sont des nombres ou non 
var a = $("#nbr1").val();
var b = $("#nbr2").val();
if(isNaN(a)||isNaN (b)) {
    $("span").html("Il faut saisir des entier");
    $("#readonly").val('');
}
else{
    $("span").html('');

// Récupération de la valeur du btn

    var btn = $(this).val();
    console.log(btn);

    if(btn== '+') {
        var respos = Number(a) +Number(b);
        $("#readonly").val(respos);

    } else if (btn== '/') {

        if (b != 0) {
            var resdiv = a /b;
            $("#readonly").val(resdiv);

        } else {
            $("#readonly").val("Division par 0 Impossible");
        }

    } else

    if(btn== '-') {
        var resmoi = Number( a) -Number( b);
        $("#readonly").val(resmoi);

    } else if (btn== '*') {

            var resmul = a * b;
            $("#readonly").val(resmul);

}}
})

})

