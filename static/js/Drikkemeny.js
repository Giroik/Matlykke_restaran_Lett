


function bindFilter(block)
{

    const select=block.querySelector(".selectDrikker")
    select.addEventListener("change",(value)=>{
        block.querySelectorAll(".middMatt2").forEach((item)=>{

            if(select.value=="all")
            {
                if(item.id!="ShablonVinElementer"&&item.id!="ShablonOlElementer"&&item.id!="ShablonMineralElementer")
                {
                    item.style.display="block"
                    block.querySelector(".wrapper").classList.remove("wrapper_one")
                }

            }
            else
            {
                block.querySelector(".wrapper").classList.add("wrapper_one")

                if(item.id!=select.value)
                {item.style.display="none"}
                else
                {item.style.display="block"}
            }

        })
    })
}

/***********************выбор вида напитка******************************/
const alledrikkene=document.querySelectorAll(".myCheckbox2")
alledrikkene.forEach((item)=>{
    item.onclick=()=>{

        alledrikkene.forEach((item)=>{
            let block=document.getElementById(item.id.replace("On",""))
            block.style.display="none"
            item.parentElement.querySelector(".LableCheck").classList.remove("LableCheck_activ")
        })
        item.parentElement.querySelector(".LableCheck").classList.add("LableCheck_activ")
        let block=document.getElementById(item.id.replace("On",""))
        bindFilter(block)
        block.style.display="block"


    }
})

let drinks=[]
const letherForVin = async (name) => {
    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    if (response.ok) {
        let json = await response.json()
        drinks.push(json.drinks["0"])
        return json.drinks["0"]
    } else {
        console.error(response.status)
    }

}

let LunchPrisen41=[5,8,10];
let LunchPrisen42=[7,5,2];
let LunchPrisen43=[1,2,2];
let luntchTele31=0;
let luntchTele32=0;
let luntchTele33=0;

let Varen12=["Wine Cooler","White Wine Sangria","Mulled Wine"]
let Varen22=["Black & Tan","Black and Brown","Grizzly Bear"]
let Varen32=["Vann","Fanta","Coca Cola"]



Varen12.forEach((meale)=>{letherForVin(meale).then((item)=>{
    const pris=LunchPrisen41[luntchTele31]
    const select=document.querySelector("#Vin").querySelector("#VinnSel")
    const option=select.querySelector("option").cloneNode(true)
    option.innerHTML = item.strDrink;
    option.value="Element"+item.idDrink
    select.appendChild(option)

    const shablon = document.querySelector("#ShablonVinElementer").cloneNode(true)
    shablon.id ="Element"+item.idDrink
    shablon.querySelector("#ShablonVinZagol").innerHTML = item.strDrink;
    shablon.querySelector("#ShablonVinImg").src=item.strDrinkThumb;
    shablon.querySelector("#ShablonVinPris").innerHTML = "Pris: "+(pris)+"$";
    shablon.querySelector(".btnMoreeee").onclick = () => CreateKvitEl(item.strDrink,pris, shablon.id)
    shablon.querySelector(".btnsmall").onclick = () => MinOnclick(document.querySelector("#scroll #" + shablon.id), pris)
    shablon.style.display="block"
    document.querySelector("#Vin").querySelector(".wrapper").appendChild(shablon)
    luntchTele31++
})
})
bindFilter(document.querySelector("#Vin"))

Varen22.forEach((meale)=>{letherForVin(meale).then((item)=>{
    const pris=LunchPrisen42[luntchTele32]
    const select=document.querySelector("#Ol").querySelector("#OlSel")
    const option=select.querySelector("option").cloneNode(true)
    option.innerHTML = item.strDrink;
    option.value="Element"+item.idDrink
    select.appendChild(option)

    const shablon = document.querySelector("#ShablonOlElementer").cloneNode(true)
    shablon.id ="Element"+item.idDrink
    shablon.querySelector("#ShablonOlZagol").innerHTML = item.strDrink;
    shablon.querySelector("#ShablonOlImg").src=item.strDrinkThumb;
    shablon.querySelector("#ShablonOlPris").innerHTML ="Pris: "+ pris+"$";
    shablon.querySelector(".btnMoreeee").onclick = () => CreateKvitEl(item.strDrink, pris, shablon.id)
    shablon.querySelector(".btnsmall").onclick = () => MinOnclick(document.querySelector("#scroll #" + shablon.id), pris)
    shablon.style.display="block"
    document.querySelector("#Ol").querySelector(".wrapper").appendChild(shablon)
    luntchTele32++
})
    bindFilter(document.querySelector("#Ol"))

})

const drinkss=[
    {"Name":"Vann","Id":"101","link":"static/images/drikke/Mineral/vann.jpg"},
    {"Name":"Fanta","Id":"102","link":"static/images/drikke/Mineral/Fanta.jpg"},
    {"Name":"Coca Cola","Id":"103","link":"static/images/drikke/Mineral/CocaCola.jpg"}
]
function Drinkes(name)
{
    for (let i=0;i<Varen32.length;i++)
    {
        if(drinkss[i]["Name"]==name)
        {
            return drinkss[i]

        }
    }
}

Varen32.forEach((meale)=>{
    const item=Drinkes(meale)
    const pris=LunchPrisen43[luntchTele33]
    const select=document.querySelector("#Mineral").querySelector("#MinerallSel")
    const option=select.querySelector("option").cloneNode(true)
    option.innerHTML = item.Name;
    option.value="Element"+item.Id
    select.appendChild(option)

    const shablon = document.querySelector("#ShablonMineralElementer").cloneNode(true)
    shablon.id ="Element"+item.Id
    shablon.querySelector("#ShablonMineralZagol").innerHTML = item.Name;
    shablon.querySelector("#ShablonMineralImg").src=item.link;
    shablon.querySelector("#ShablonMineralPris").innerHTML ="Pris: "+ pris+"$";
    shablon.querySelector(".btnMoreeee").onclick = () => CreateKvitEl(item.Name, pris, shablon.id)
    shablon.querySelector(".btnsmall").onclick = () => MinOnclick(document.querySelector("#scroll #" + shablon.id), pris)
    shablon.style.display="block"
    document.querySelector("#Mineral").querySelector(".wrapper").appendChild(shablon)
    luntchTele33++

})










