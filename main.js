document.getElementById("B1").onclick = function ()
{
    document.getElementById("B1").style.opacity = "1";
}
document.getElementById("Img2").onclick = function ()
{
    document.getElementById("H1").style.display = 'none';
    document.getElementById("P1").style.display = 'none';
    document.getElementById("H2").style.display = 'block';
    document.getElementById("P2").style.display = 'block';
    document.getElementById("NavBar").style.backgroundImage= "url(./desktop-image-hero-2.jpg)";

    document.getElementById("Img2").onclick = function ()
    {
        document.getElementById("H2").style.display = 'none';
        document.getElementById("P2").style.display = 'none';
        document.getElementById("H3").style.display = 'block';
        document.getElementById("P3").style.display = 'block';
        document.getElementById("NavBar").style.backgroundImage= "url(./desktop-image-hero-3.jpg)";
    }
}
document.getElementById("Img1").onclick = function ()
{
    document.getElementById("H1").style.display = 'none';
    document.getElementById("P1").style.display = 'none';
    document.getElementById("H2").style.display = 'block';
    document.getElementById("H3").style.display = 'none';
    document.getElementById("P3").style.display = 'none';
    document.getElementById("P2").style.display = 'block';
    document.getElementById("NavBar").style.backgroundImage= "url(./desktop-image-hero-2.jpg)";

    document.getElementById("Img1").onclick = function ()
    {
        document.getElementById("H1").style.display = 'block';
        document.getElementById("P1").style.display = 'block';
        document.getElementById("H3").style.display = 'none';
        document.getElementById("H2").style.display = 'none';
        document.getElementById("P2").style.display = 'none';
        document.getElementById("P3").style.display = 'none';
        document.getElementById("NavBar").style.backgroundImage= "url(./desktop-image-hero-1.jpg)";
    }
}
