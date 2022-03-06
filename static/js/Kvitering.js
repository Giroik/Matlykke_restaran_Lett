function visKvit()
{
    document.getElementById("KvitBack").style.display="block"
    document.getElementById("wolf").style.overflow="hidden"

}
function Tilbake()
{
    document.getElementById("KvitBack").style.display="none"
    document.getElementById("wolf").style.overflow="visible"

}

LunchPrisen=[5,6.5,5.5,3,2.5];

let summenAvVarene=0
let summen=0
let KvitNames=[]


function CreateKvitEl(Name, Pris,Id)
{
    const scroll=document.querySelector("#scroll")

    if(!KvitNames.includes(Name))
    {
        const shablon = document.querySelector("#Shablon").cloneNode(true)
        const spanEl=shablon.querySelector("#ShablonClose")
        const nameEl=shablon.querySelector("h4")
        const btnMinEl=shablon.querySelector("#ShablonMinbtn")
        const btnMerEl=shablon.querySelector("#ShablonMaxbtn")
        const prisEl=shablon.querySelector("#ShablonPris")
        document.getElementById("varene").innerHTML=++summenAvVarene
        //shablon.setAttribute("index",iVerdi)
        shablon.id=Id
        KvitNames.push(Name)
        nameEl.innerHTML=Name
        prisEl.innerHTML=Pris+"$"

        shablon.style.display="flex";
        scroll.appendChild(shablon)
        summen+=Pris
        document.getElementById("KvitBigPris").innerHTML=summen+"$"

        spanEl.addEventListener('click', function(){
            dalateElem(shablon,Pris,Name);
        });

        btnMerEl.addEventListener('click', function(){
            MaxOnclick(shablon,Pris)
        });

        btnMinEl.addEventListener('click', function(){
            MinOnclick(shablon, Pris);
        });

    }
    else
    {
        //const selector ="[index='"+String(iVerdi)+"']"
        //document.querySelector(selector).querySelector("#ShablonMaxbtn").click()
        //shablon.querySelector("#ShablonMaxbtn").click()
        MaxOnclick(scroll.querySelector("#"+Id),Pris)
    }
}

function MaxOnclick(shablon,Pris) {
    document.getElementById("varene").innerHTML=++summenAvVarene
    shablon.querySelector("#ShablonAntal").innerHTML = String(Number(shablon.querySelector("#ShablonAntal").innerHTML) + 1)
    shablon.querySelector("#ShablonPris").innerHTML = (Number(shablon.querySelector("#ShablonAntal").innerHTML) * Pris) + "$"
    summen += Pris
    document.getElementById("KvitBigPris").innerHTML = summen + "$"
}
function MinOnclick(shablon, Pris)
{
    /*const selector ="[index='"+String(iVerdi)+"']"
    const shablon=document.querySelector(selector)*/
    if(shablon)
    {

        shablon.querySelector("#ShablonAntal").innerHTML=String(Number(shablon.querySelector("#ShablonAntal").innerHTML)-1)
        shablon.querySelector("#ShablonPris").innerHTML=(Number(shablon.querySelector("#ShablonAntal").innerHTML)*Pris)+"$"
        summen-=Pris
        document.getElementById("KvitBigPris").innerHTML=summen+"$"
        document.getElementById("varene").innerHTML=--summenAvVarene

        if(shablon.querySelector("#ShablonAntal").innerHTML==0)
        {
            KvitNames=KvitNames.filter((item)=>item!=shablon.querySelector("h4").innerHTML)
            shablon.remove()

        }
    }


}

function dalateElem(shablon,Pris,Name)
{
    KvitNames=KvitNames.filter(item=>item!=Name)
    summenAvVarene-=shablon.querySelector("#ShablonAntal").innerHTML
    summen-= Pris* Number(shablon.querySelector("#ShablonAntal").innerHTML)
    shablon.querySelector("#ShablonAntal").innerHTML=0
    shablon.querySelector("#ShablonPris").innerHTML=0+"€"
    document.getElementById("KvitBigPris").innerHTML=summen+"€"
    document.getElementById("varene").innerHTML=summenAvVarene
    shablon.remove()
}


/*Knappene i Kvitering*/
function kvitering()
{
    if(summen!=0)
    {
        if(confirm("Er du sikert at du vil betale?")==true)
        {
            location.reload();
        }
    }
    else
    {
        alert("Du har ikke noe i kurven")
    }

}

function Tilbake()
{
    document.getElementById("KvitBack").style.display="none"
    document.getElementById("wolf").style.overflow="visible"

}
function allLegeUt()
{
    let a=0
    const mainEl=document.querySelector("#scroll")
    mainEl.querySelectorAll(".KvitLi").forEach((item)=>{

        if(a>0)
        {
            summenAvVarene=0
            summen=0
            item.querySelector("#ShablonAntal").innerHTML=0
            item.querySelector("#ShablonPris").innerHTML=0
            document.getElementById("KvitBigPris").innerHTML=summen+"€"
            document.getElementById("varene").innerHTML=summenAvVarene
            KvitNames=KvitNames.filter((item2)=>item2!=item.querySelector("h4").innerHTML)
            item.remove()
        }
        a++
    })

}
