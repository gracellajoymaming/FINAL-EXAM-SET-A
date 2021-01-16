function Generate(){
    var random = Math.random()*10;
    random = Math.floor(random)+1;

     if (random == 1)
    {document.querySelector(".motor").style.background = "coral";}
    else if (random == 2){document.querySelector(".motor").style.background = "#8B0000";}
    else if (random == 3){document.querySelector(".motor").style.background = "#FF7F50";}
    else if (random == 4){document.querySelector(".motor").style.background = "#BDB76B";}
    else if (random == 5){document.querySelector(".motor").style.background = "#008080";}
    else if (random == 6){document.querySelector(".motor").style.background = "#7B68EE";}
    else if (random == 7){document.querySelector(".motor").style.background = "#FF69B4";}
    else if (random == 8){document.querySelector(".motor").style.background = "#0000FF";}
    else if (random == 8){document.querySelector(".motor").style.background = "#B7D124";}
    else if (random == 8){document.querySelector(".motor").style.background = "#FF5345";}
    else if (random == 8){document.querySelector(".motor").style.background = "#008000";}
    else if (random == 8){document.querySelector(".motor").style.background = "#A07DA0";}
    else if (random == 8){document.querySelector(".motor").style.background = "#FFFF00";}
    else if (random == 8){document.querySelector(".motor").style.background = "#EBE8BF";}
    else
    {document.querySelector(".motor").style.background = "#604D3C";}
}


function Show()
{
    if (document.querySelector("#color").value == "Blue")
    {
        document.querySelector(".motor").style.background = "Blue";
    }
	 else if(document.querySelector("#color").value == "Grey")
    {
        document.querySelector(".motor").style.background = "Grey";
    }
	 else if(document.querySelector("#color").value == "Green")
    {
        document.querySelector(".motor").style.background = "Green";
    }
    else if(document.querySelector("#color").value == "Yellow")
    {
        document.querySelector(".motor").style.background = "Yellow";
    }
    else if(document.querySelector("#color").value == "Lightblue")
    {
        document.querySelector(".motor").style.background = "Lightblue";
    }
	 else if(document.querySelector("#color").value == "Black")
    {
        document.querySelector(".motor").style.background = "Black";
    }
}
function Reset() 
{
    document.querySelector(".motor").style.background = "White";
}