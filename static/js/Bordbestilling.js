let antalPers = 0
const tablesCountFree = {5: 8, 3: 3, 2: 2}
const hole = document.querySelector(".zal")
const antalInput = document.querySelector(".BordInputs").querySelector("[name='Antal']")

function createTable(number) {
    let antal = 5 - 2 * Math.floor(number / 8) - Math.floor(number / 11)
    let table = document.createElement("div")
    const inputVerdi = document.getElementById("Tnumber")
    const tableNumber = number + 1
    table.classList.add("table")
    table.classList.add("table" + String(number))
    table.id = "table" + String(tableNumber)
    table.setAttribute("antal", antal)
    hole.appendChild(table)
    table.onclick = () => {
        if (table.style.background != "red") {
            if (table.style.background == "green") {
                inputVerdi.value += tableNumber + " "
                table.style.background = "yellow"
                antalPers -= Number(table.getAttribute("antal"))
                tablesCountFree[antal] -= 1
                tableChecked(antalPers, "table")

            } else {
                inputVerdi.value = inputVerdi.value.replace(tableNumber + " ", "");
                table.style.background = "green"
                antalPers += Number(table.getAttribute("antal"))
                tablesCountFree[antal] += 1
                tableChecked(antalPers, "table")

            }

        }

    }
}


antalInput.oninput = (event) => {
    if (event.target.value > 53) {
        event.target.value = 53
    }
    if (event.target.value < 0) {
        event.target.value = 0
    }
    antalPers = event.target.value
    document.getElementById("Tnumber").value=""
    tableChecked(antalPers, "input")
}

function tableChecked(antalPers, type) {

    let tables = hole.querySelectorAll(".table")
    tables.forEach((table) => {
        let tablePlasser = table.getAttribute("antal")
        if (table.style.background != "yellow") {

            switch (Number(tablePlasser)) {
                case 5:
                    if (antalPers <= 3) {
                        table.style.background = "red";
                    } else {
                        table.style.background = "green";
                    }
                    break;
                case 3:
                    if (antalPers > 3 || antalPers < 3) {
                        if (tablesCountFree[5] != 0) {
                            table.style.background = "red";
                        }
                        else
                        {
                            table.style.background = "green";
                        }

                    } else {

                        table.style.background = "green";
                    }
                    break;
                case 2:
                    if (antalPers <= 0 || antalPers > 2) {
                        if (tablesCountFree[3] != 0) {
                            table.style.background = "red";
                        }
                        else
                        {
                            table.style.background = "green";
                        }
                    } else {
                        table.style.background = "green";
                    }
                    break;
                default:
            }
        } else if (type == "input") {
            table.style.background = "green"
        }
    })
}

for (let i = 0; i < 13; i++) {
    createTable(i)
}

document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    let modal = document.querySelector(".modalWraper")
    let form = document.querySelector("#BordForm")
    let tNumber = form.querySelector("#Tnumber").value
    if (tNumber=="") {
        modal.querySelector(".modal-Error").style.display = "block"
        modal.querySelector(".modalText").style.display = "none"
    } else {
        modal.querySelector(".modal-Error").style.display = "none"
        modal.querySelector(".modalText").style.display = "block"
        modal.querySelector("#Name").innerHTML = form.querySelector("[name='Name']").value
        modal.querySelector("#dateTime").innerHTML = form.querySelector("[name='time']").value + " Dato:" + form.querySelector("[name='date']").value
        modal.querySelector("#Alergener").innerHTML = form.querySelector("[name='allergener']").value
        modal.querySelector("#TelefonNum").innerHTML = form.querySelector("[name='Phone']").value
        modal.querySelector("#EmailText").innerHTML = form.querySelector("[name='email']").value
        modal.querySelector("#tableNumber").innerHTML = tNumber
    }
    modal.style.display = "flex"
}


document.querySelector(".modalWraper .modalClose").onclick = () => {
    document.querySelector(".modalWraper").style.display = "none"

}