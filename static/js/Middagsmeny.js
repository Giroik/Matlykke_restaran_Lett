function ViseMidd(shablom, navnId,Masiv,num) {
    Masiv.forEach((item)=>{

        if(item!=navnId)
        {
            document.querySelector("#"+item).querySelector("#ShabMidInfo"+num).style.display="none"
        }
        else
        {
            document.querySelector("#"+item).querySelector("#ShabMidInfo"+num).style.display="block"
        }
    })

}

const lether2 = async (name) => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    if (response.ok) {
        let json = await response.json()
        meals.push(json.meals["0"])
        return json.meals["0"]
    } else {
        console.error(response.status)
    }

}

let LunchPrisen3 = [10, 5, 2, 10, 15, 1200, 3, 3, 17];
let luntchTele2 = 0;
let AlleId=[]
let AlleId2=[]
let AlleId3=[]
let Varen1 = ["Bitterballen (Dutch meatballs)", "Stuffed Lamb Tomatoes", "Sledz w Oleju (Polish Herrings)"]
let Varen2 = ["Gigantes Plaki", "Tandoori chicken", "Fish pie"]
let Varen3 = ["Chocolate Avocado Mousse", "Christmas Pudding Trifle", "Chocolate Raspberry Brownies"]
//let AlleMidVarene = [Varen1, Varen2, Varen3]


Varen1.forEach((meale) => {
    lether2(meale).then((item) => {
        const pris = LunchPrisen3[luntchTele2]
        const shablon = document.querySelector("#MiddShab").cloneNode(true)
        shablon.id = "MidEl" + item.idMeal
        AlleId.push(shablon.id)
        shablon.querySelector("#MiddZag").innerHTML = item.strMeal;
        shablon.querySelector("#MiddBilde").src = item.strMealThumb;
        if(item.strArea!="Unknown"){shablon.querySelector("#ShabMidInfo2").innerHTML = item.strMeal+" er " + item.strArea+" matt";}
        else {shablon.querySelector("#ShabMidInfo2").innerHTML = item.strMeal+" er internasjonal matt";}
        shablon.querySelector("#PrisShabMid").innerHTML = "Pris: "+(pris) + "$";
        shablon.querySelector("#labelShablonMid").onclick = () => ViseMidd(shablon, shablon.id ,AlleId,"")
        shablon.querySelector(".btnMoreeee").onclick = () => CreateKvitEl(item.strMeal, pris, shablon.id)
        shablon.querySelector(".btnsmall").onclick = () => MinOnclick(document.querySelector("#scroll #" + shablon.id), pris)
        document.querySelector("#forret1").appendChild(shablon)
        luntchTele2++
    })

})
Varen2.forEach((meale) => {
    lether2(meale).then((item) => {
        const pris = LunchPrisen3[luntchTele2]
        const shablon = document.querySelector("#MiddShab2").cloneNode(true)
        shablon.id = "MidEl" + item.idMeal
        AlleId2.push(shablon.id)
        shablon.querySelector("#MiddZag2").innerHTML = item.strMeal;
        shablon.querySelector("#MiddBilde2").src = item.strMealThumb;
        if(item.strArea!="Unknown"){shablon.querySelector("#ShabMidInfo2to").innerHTML = item.strMeal+" er " + item.strArea+" matt";}
        else {shablon.querySelector("#ShabMidInfo2to").innerHTML = item.strMeal+" er internasjonal matt";}
        shablon.querySelector("#PrisShabMidto").innerHTML = "Pris: "+pris + "$";
        shablon.querySelector("#labelShablonHov").onclick = () => ViseMidd(shablon, shablon.id ,AlleId2,"to")
        shablon.querySelector(".btnMoreeee").onclick = () => CreateKvitEl(item.strMeal, pris, shablon.id)
        shablon.querySelector(".btnsmall").onclick = () => MinOnclick(document.querySelector("#scroll #" + shablon.id), pris)
        document.querySelector("#hovedrett1").appendChild(shablon)
        luntchTele2++
    })
})
Varen3.forEach((meale) => {
    lether2(meale).then((item) => {
        const pris = LunchPrisen3[luntchTele2]
        const shablon = document.querySelector("#MiddShab3").cloneNode(true)
        shablon.id = "MidEl" + item.idMeal
        AlleId3.push(shablon.id)
        shablon.querySelector("#MiddZag3").innerHTML = item.strMeal;
        shablon.querySelector("#MiddBilde3").src = item.strMealThumb;
        if(item.strArea!="Unknown"){shablon.querySelector("#ShabMidInfo23").innerHTML = item.strMeal+" er " + item.strArea+" matt";}
        else {shablon.querySelector("#ShabMidInfo23").innerHTML = item.strMeal+" er internasjonal matt";}
        shablon.querySelector("#PrisShabMidtre").innerHTML ="Pris: "+ pris + "$";
        shablon.querySelector("#labelShablonDis").onclick = () => ViseMidd(shablon, shablon.id ,AlleId3,"tre")
        shablon.querySelector(".btnMoreeee").onclick = () => CreateKvitEl(item.strMeal, pris, shablon.id)
        shablon.querySelector(".btnsmall").onclick = () => MinOnclick(document.querySelector("#scroll #" + shablon.id), pris)
        document.querySelector("#dessert1").appendChild(shablon)
        luntchTele2++
    })
})



function showDivInfo(Id, Id2, number) {
    for (let i = 0; i < middagsChoisId.length; i++) {
        for (let g = 0; g < middagsChoisId.length; g++) {
            if (Id2 == info1[g]) {
                for (let f = 0; f < info1.length; f++) {
                    document.getElementById(middagsInfo[0][f]).style.display = "none"
                }
                document.getElementById(Id).style.display = "block"
            }
            if (Id2 == info2[g]) {
                for (let f = 0; f < info2.length; f++) {
                    document.getElementById(middagsInfo[1][f]).style.display = "none"
                }
                document.getElementById(Id).style.display = "block"
            }
            if (Id2 == info3[g]) {
                for (let f = 0; f < info3.length; f++) {
                    document.getElementById(middagsInfo[2][f]).style.display = "none"
                }
                document.getElementById(Id).style.display = "block"
            }
        }
    }

}
