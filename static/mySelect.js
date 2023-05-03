

var numId = 0

function eventManager(p_event){
  var a = 110;

  if (p_event.type == "change"){
    console.log("eventManager:",p_event.type)
    console.log("CAROTTE SELECT eventManager")
    console.log("change sur target : ",p_event.target)
    console.log("change sur : ",p_event.target.value)
    var monId = p_event.target.id
    // console.log("!!!",monId)
    // console.log("???",p_event.target.value)
    // console.log(monId == p_event.target.value)
    numId = parseInt(p_event.target.value) 
    createSelect("/getDossier/"+1,"select2",true)
    createSelect("/getSousDossier","select3",true)

    if (p_event.target.value == "Html"){
      console.log(p_event.target.value," est selectionné")
    }



    //les lignes 
    if (p_event.target.id == p_event.target.value){
      console.log("valeur :",p_event.target.value)
      var elem = document.createElement("tr")
      var elemCase = document.createElement("td")
      elemCase.innerHTML = p_event.target.innerHTML
      document.getElementById("divLignes").appendChild(elemCase)
    }    
  }
}

console.log("voici numId:",numId)

// createSelect()
// var l = []
// async function createSelect(){
//     const response = await fetch('/getLangage');
//     var maData = await response.json()
//     //var maData = response.json()
//     console.log("Reponse:",maData);
//     l.push(maData)

//     var maDivTable = document.getElementById("select1")
//     // var maLigne = document.createElement("tr")
//     // var maCase = document.createElement("td")
//     // var maCase2 = document.createElement("td")
//     // maCase2.innerHTML = "123"
//     // var maCase3 = document.createElement("td")
//     // maCase3.innerHTML = "123"
//     var mySelect = document.createElement("select")
//     mySelect.classList.add("form-select")
//     mySelect.classList.add("mb-2")
//     //mySelect.size = 2

//     for (var i = 0; i < maData.length; i++) {
      
      
//       var myChoix = document.createElement("option")
//       myChoix.value = maData[i].id
//       myChoix.innerHTML = maData[i].dossier
//       // myChoix.innerText = "COCORICO"
//       console.log("voici mon nouvel option :",myChoix)

//       // maDivTable.appendChild(myLigne)
//       // myLigne.appendChild(myCase)
//       // myCase.appendChild(mySelect)
//       // mySelect.appendChild(myChoix)


      
//       mySelect.appendChild(myChoix)

//       console.log(maData[i])
//     }
//     // maDivTable.appendChild(maLigne)
//     // maLigne.appendChild(maCase)
//     // maLigne.appendChild(maCase2)
//     // maLigne.appendChild(maCase3)
//     // maCase.appendChild(mySelect)

//     maDivTable.appendChild(mySelect)

// }


//createSelect()

var l = []
var idParent = []
var mesEnfants = []
var idEnfants = []


async function createSelect(p_url,p_idDiv,p_etat){
  // for (var i = 0; i < mesEnfants.length; i++) {
  //   mesEnfants[i]
  // }
    //url pour récupérer les données 
    const response = await fetch(p_url);
    var maData = await response.json()
    console.log("Reponse:",maData);
    l.push(maData)

    //création de l'élément select
    var maDivTable = document.getElementById(p_idDiv)
    var mySelect = document.createElement("select")
    mySelect.disabled = p_etat
    mySelect.classList.add("form-select")
    mySelect.classList.add("mb-2")
    mySelect.addEventListener("click",eventManager,false)
    mySelect.addEventListener("change",eventManager,false)
    
    //création des options du select 
    for (var i = 0; i < maData.length; i++) {
      var myChoix = document.createElement("option")
      myChoix.value = maData[i].id
      myChoix.innerHTML = maData[i].dossier
      mySelect.id ="select"+maData[i].dossier
      myChoix.id = maData[i].id
      //console.log("!!",maData[i].id)
      //console.log("voici mon nouvel option :",myChoix)      
      mySelect.appendChild(myChoix)
      //console.log("333",maData[i])
      idEnfants.push(maData[i].id)
      //mesEnfants.push({enfant:maData[i].dossier,id:maData[i].id})
    }
    maDivTable.appendChild(mySelect)

    // if (document.getElementById(p_idDiv).children){
    //   console.log("oui enfants !!!")
    // }
    var select2 = document.getElementById("select2")
    for (var i = 0; i < select2.getElementsByTagName("select").length; i++) {
      select2.getElementsByTagName("select")[i]
    }
    
      //select2.getElementsByTagName("select")[0].remove()
}

createSelect("/getLangage","select1",false)
createSelect("/getDossier/"+1,"select2",true)
createSelect("/getSousDossier","select3",true)



function langage(p_event){
  
  if (p_event.type == "change"){
    console.log("f_langage:",p_event.type)
    console.log("J'ai selectionné dans langage !!!")
    // console.log("Valeur:",p_event.target.value)

    // console.log(p_event.target.innerHTML)
    // console.log(p_event.target.textContent)
    // console.log("666",p_event.target.id)
    idParent.push(p_event.target.value)

    var monId = p_event.target.id
    console.log("monId:",monId)
    //createSelect("/getDossier/"+numId,"select2")
    // var choix = document.getElementById(monId).selectedIndex
    // console.log(choix)
    // var el = document.getElementById(monId)
    // console.log("J'ai sélectionné:",el.children[choix].innerHTML)
    // var selec = el.children[choix].innerHTML
    // dossier(selec)   
  }
}




// var elem = document.getElementById("select1")
// //var monParent = elem.children[0].children
// //console.log("monParent:",monParent)


// for (var i = 0; i < elem.children[0].children; i++) {
//   console.log("***",elem.children[0].children[i].id)
// }

// var num = ""
// for (var i = 0; i < idParent.length; i++) {
//   console.log(idParent[i]) 
//   //createSelect("/getDossier/"+idParent[i],"select2")
//   num = idParent[i] 
//   console.log("nnn:",num)
// }


function dossier(p_event){
  if (p_event.type == "change"){
    console.log(p_event.target.value)
    console.log(p_event.target.innerHTML)
    console.log(p_event.target.textContent)
    console.log("666", p_event.target.id)

    var monId = p_event.target.id
    console.log("monId:",monId)
    var choix = document.getElementById(monId).selectedIndex
    console.log(choix)
    var el = document.getElementById(monId)
    console.log("J'ai sélectionné:",el.children[choix].innerHTML)
    var selec = el.children[choix].innerHTML
    dossier(selec)
  }
  var select2 = document.getElementById("select2")
  for (var i = 0; i < select2.children[0].children.length; i++) {
    console.log("id selct2:",select2.children[0].children[i])
  }
}




var c1 = document.getElementById("select1")
c1.addEventListener("click",langage,false)

var c1 = document.getElementById("select1")
c1.addEventListener("change",langage,false)

var c2 = document.getElementById("select2")
c2.addEventListener("click",dossier,false)

var c2 = document.getElementById("select2")
c2.addEventListener("change",dossier,false)


// var c3 = document.getElementById("select3")
// c3.addEventListener("click",sousDossier,false)


