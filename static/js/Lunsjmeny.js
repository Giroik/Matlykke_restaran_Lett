function visse(a)
{
    document.getElementById(a).classList.toggle("lunchBlock2")
}
let namesMeny=["MainLunsjmeny","MainMiddagsmeny","MainDrikkemeny","MainBordbestilling"]



let meals=[]
const lether = async (name) => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    if (response.ok) {
        let json = await response.json()
        meals.push(json.meals["0"])
        return json.meals["0"]
    } else {
        console.error(response.status)
    }

}

let LunchPrisen=[5,6.5,5.5,3,2.5];
let luntchTele=0;
["Lamb Tzatziki Burgers","Chivito uruguayo","Mediterranean Pasta Salad","Leblebi Soup","Ham hock colcannon"].forEach((meale)=>{lether(meale).then((item)=>{
    const pris=LunchPrisen[luntchTele]
    const shablon = document.querySelector("#ShabBlock").cloneNode(true)
    shablon.id ="El"+item.idMeal

    shablon.querySelector("#zagol").innerHTML = item.strMeal;
    shablon.querySelector("#ShabId").src=item.strMealThumb;
    if(item.strArea!="Unknown")
    {
        shablon.querySelector("#ShabInfo").innerHTML = item.strMeal+" er " + item.strArea+" matt";
    }
    else
    {
        shablon.querySelector("#ShabInfo").innerHTML = item.strMeal+" er internasjonal matt";
    }

    shablon.querySelector("#ShabPris").innerHTML =pris+"$";
    shablon.querySelector(".btnMoreeee").onclick = () => CreateKvitEl(item.strMeal, pris, shablon.id)
    shablon.querySelector(".btnsmall").onclick = () => MinOnclick(document.querySelector("#scroll #" + shablon.id), pris)
    document.querySelector("#lunchShab").appendChild(shablon)
    luntchTele++

})
})

/*
meals.forEach((item) => {
    const shablon = document.querySelector("#ShabBlock").cloneNode(true)
    shablon.id ="El"+item.idMeal
    shablon.querySelector("#zagol").innerHTML = item.strMeal;
    shablon.querySelector("#ShabId").src=item.strMealThumb;
    shablon.querySelector("#ShabInfo").innerHTML = item.strMeal+" came from " + item.strArea;
    shablon.querySelector("#ShabId").src = item.strMealThumb;
    document.querySelector("#lunchShab").appendChild(shablon)
})
*/
