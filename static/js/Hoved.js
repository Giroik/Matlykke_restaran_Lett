function openn(id)
{
    for(let i=0;i<namesMeny.length;i++)
    {
        document.getElementById(namesMeny[i]).style.display="none"
    }
    document.getElementById(id).style.display="block"
}
    document.getElementById(window.location.search.replace("?","")).style.display="block";

