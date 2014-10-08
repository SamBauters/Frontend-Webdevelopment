/**
 * Created by sam_b_000 on 7/10/2014.
 */

(function init(){
    var btn = document.getElementById("SaveButton");
    btn.addEventListener("click", toonimg);
})()

function toonimg()
{
    var voornaam = document.getElementById("Voornaam").value,
        naam = document.getElementById("Naam").value,
        leeftijd = document.getElementById("Leeftijd").value,
        urlimage = document.getElementById("UrlImage").value,
        foto ="";

    if(leeftijd <18)
        foto += "<figure><img src='img/" + urlimage + "' width='200px' height='200px' class='jonger' /><figcaption>"+ naam + " " + voornaam +"</figcaption></figure>";
    else
        foto += "<figure><img src='img/" + urlimage + "' width='200px' height='200px' class='ouder' /><figcaption>"+ naam + " " + voornaam +"</figcaption></figure>";

    document.getElementById("uitvoer").innerHTML += foto;
}