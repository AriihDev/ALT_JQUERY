function addition() {

    document.getElementById("res").value="";

    var nb1 =document.getElementById("nbr1").value;
    var nb2 =document.getElementById("nbr2").value;

    var res=Number(nbr1) + Number(nbr2);

}

function soustraction() {

    document.getElementById("res").value="";

    var nb1 =document.getElementById("nbr1").value;
    var nb2 =document.getElementById("nbr2").value;

    var res=Number(nbr1) - Number(nbr2);

}

function multiplication() {

    document.getElementById("res").value="";

    var nb1 =document.getElementById("nbr1").value;
    var nb2 =document.getElementById("nbr2").value;

    var res=Number(nbr1) * Number(nbr2);

}

function division() {

    document.getElementById("res").value="";

    var nb1 =document.getElementById("nbr1").value;
    var nb2 =document.getElementById("nbr2").value;
    
    if(nbr1!="" && nbr2 != "") {
    if(nbr2==0) {

        var res="Division impossible"

    } else {

    var res=Number(nbr1) / Number(nbr2);

}   document.getElementById("res").value="";
    document.getElementById("msg").value="";  
} else document.getElementById("msg").value=""; 
}