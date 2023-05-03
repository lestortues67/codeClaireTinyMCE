

// function test02(){
//   console.log("je suis dans monContenu()")
//   const editor = tinymce.get('description');
//   // Récupérer le contenu HTML de l'éditeur
//   const contenu = editor.getContent();
//   // Afficher le contenu dans la console
//   console.log(contenu);

// return contenu

// }


// var divContenu = document.getElementById("copyContenu")
// divContenu.innerHTML = test02()
//divContenu.value = contenu




async function dataSelect(p_url,p_Id){
	const response = await fetch(p_url);
	var maData = await response.json()
	console.log("choixOption Reponse:",maData);
	var monElem = document.getElementById(p_Id)

	for (var i = 0; i < maData.length; i++) {
		var op = document.createElement("option")
		op.innerHTML = maData[i].dossier
	}
}



function eventManager(p_event){
  var a = 110;

  // if (p_event.type == "change" || p_event.type == "click"){
  if (p_event.type == "change"){
    console.log("eventManager:",p_event.type)
    console.log("change sur target : ",p_event.target)
    console.log("ID change sur target : ",p_event.target.id)
    console.log("change sur : ",p_event.target.value)
    var monId = p_event.target.id
    console.log("dataset:",p_event.target.dataset.title)
    console.log("index selection:",p_event.target.selectedIndex)
    var indexOption = p_event.target.children[p_event.target.selectedIndex].dataset['id']
    console.log("mon dataset2:",indexOption)

    if (p_event.target.id == "selectLangage"){
      console.log("langage !")
      document.getElementById("selectDossier").disabled = false  
      // Quel est 'option' séléctionné ? 
      var optionSelect = p_event.target.selectedIndex
      // Demander au serveur les lignes pour mon enfant 
      // fetch post avec (optionSelect)
      //enfant est id = 'select2'
      //
      //createOptions("/getDossier/"+indexOption,"",indexOption)
      // async function choixOption(p_url,p_idParent)
      choixOption("/getDossier/"+indexOption,p_event.target.value,"selectDossier","Dossier langage")
      // myCode("/monCode/"+indexOption,indexOption.toString())
    }

    if (p_event.target.id ==  "selectDossier"){
      console.log("dossier !")
      document.getElementById("selectSousDossier").disabled = false
      // lire quel est le langage (option) 
      var l = p_event.target.value
      //createOptions("/getDossier/"+indexOption,indexOption,1)
      console.log("dataset:",p_event.target.dataset.title)
      choixOption("/getSousDossier/"+indexOption,p_event.target.value,"selectSousDossier","sous-dossier")
      console.log("parentId:",indexOption)
      //myCode("/monCode/"+indexOption)
    }

     if (p_event.target.id ==  "selectSousDossier"){
        console.log("sous dossier !")
     }

    if (p_event.target.id ==  "newLigne"){
        console.log("event manager newLigne")
     }
  }
}

async function createOptions(p_url,p_idElem,p_idChoix){
  const response = await fetch(p_url);
  var maData = await response.json()
  console.log("Reponse:",maData);

  for (var i = 0; i < maData.length; i++) {
    console.log("DATA:",maData[i])
    var d = document.getElementById(p_idElem)
    var o = document.createElement("option")
    o.innerHTML = maData[i].dossier
    // o.dataset.id=maData[i].id
    o.dataset['id']=maData[i].id
    o.classList.add("choucroute")
    d.appendChild(o)
  }
}

async function choixOption(p_url,p_value,p_idParent,p_titre){
  // Je vide le select de mon enfant ('dossier')
  var p = document.getElementById(p_idParent)
   while (p.firstChild) {
    p.removeChild(p.lastChild);
  }
  var nElem0 = document.createElement("option")
  nElem0.innerHTML = p_titre
  document.getElementById(p_idParent).appendChild(nElem0)
  
  const response = await fetch(p_url);
  var maData = await response.json()
  console.log("choixOption Reponse:",maData);

  for (var i = 0; i < maData.length; i++) {
    var nElem = document.createElement("option")
    nElem.dataset.id=maData[i].id
    nElem.innerHTML = maData[i].dossier || maData[i].sousdossier
    //document.getElementById(p_idParent).appendChild(nElem0)
    document.getElementById(p_idParent).appendChild(nElem)
  }

}






// //async function myCode(p_url,p_choix,p_dossier){
// async function myCode(p_url,p_dossier){
//   //1 effacer les lignes de la table 
//   var p = document.getElementById("tbody")
//   while (p.firstChild) {
//     p.removeChild(p.lastChild);
//   }
//    //2 rechercher avec les p_choix() = {}



//   const response = await fetch(p_url);
//   var maData = await response.json()
//   console.log("monCode Reponse:",maData);  

//   for (var i = 0; i < maData.length; i++) {
//      //p_dossier est parentId
//      if(maData[i].dossier == p_dossier){
//        console.log("***",maData[i])
//        var myTr = document.createElement("tr")
//        var myTd = document.createElement("td")
//        myTd.innerHTML = maData[i].dossier
//         var myTd1 = document.createElement("td")
//        myTd1.innerHTML = maData[i].id
//         var myTd2 = document.createElement("td")
//        myTd2.innerHTML = maData[i].langage
//         var myTd3 = document.createElement("td")
//        myTd3.innerHTML = maData[i].sousdossier
//         var myTd4 = document.createElement("td")
//        myTd4.innerHTML = maData[i].titre

//        p.appendChild(myTr)
//        myTr.appendChild(myTd)
//        myTr.appendChild(myTd1)
//        myTr.appendChild(myTd2)
//        myTr.appendChild(myTd3)
//        myTr.appendChild(myTd4)
//      }    
//   } 

// }



function btnCreate(){
  console.log("je suis dans btnCreate")

  var d = document.getElementById("maDiv")
  var div1  = document.createElement("div")
  var label1 = document.createElement("label")
  label1.innerHTML = "Titre"
  var newInp = document.createElement("input")
  newInp.classList.add("form-control")
  newInp.placeholder = "Titre"
  var btnAdd = document.createElement("button")
  btnAdd.classList.add("btn")
  btnAdd.classList.add("btn-light")
  btnAdd.type = "submit"
  btnAdd.innerHTML = "Ajouter"

  document.getElementById("myContenu").hidden = false 

  div1.appendChild(label1)
  div1.appendChild(newInp)
  div1.appendChild(btnAdd)



  //d.replaceChild(label1, d.firstElementChild)
  d.replaceChild(div1, d.firstElementChild)

}


let reponseServeur = ""
let url = "/SavePage" 



async function fetchPost(p_contenu){
  let response = await fetch(url,{
    method:"POST",
    headers: {
        "Content-Type": "application/json",
        "tintin":"milou"
      },
      body: JSON.stringify({'contenu': p_contenu,"titre":"Le titre de la page"}), 
      //body: JSON.stringify({'contenu':"p_contenu","titre":"Le titre de la page"}),
        // body data type must match "Content-Type" header
  });
  reponseServeur = await response.json();
  console.log("N°2 Voici le json après le code : ",reponseServeur)  
}


async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
  }
}

const data = { name: 'John', email: 'john@example.com' };
const url2 = '/SavePage';

//var content = tinymce.activeEditor.getContent();
// var t = document.getElementById("tinymce")
// console.log(fetchPost(t.innerHTML))

// function monContenu() {
//   console.log("je suis dans monContenu()")
//   const editor = tinymce.get('description');
//   // Récupérer le contenu HTML de l'éditeur
//   const contenu = editor.getContent();
//   // Afficher le contenu dans la console
//   console.log(contenu);
//   if(contenu == true){
//     var divContenu = document.getElementById("copyContenu")
//     divContenu.innerHTML = contenu
//     divContenu.value = contenu
//     console.log("le contenu est copier dans la div")
//   }

// }


// var divContenu = document.getElementById("copyContenu")
// divContenu.innerHTML = monContenu()

//console.log(fetchPost(document.getElementById("tinymce").innerHTML))

createOptions("/getLangage","selectLangage")

var s = document.getElementsByClassName("form-select")
for (var i = 0; i < s.length; i++) {
  s[i].addEventListener("click",eventManager,false)
  s[i].addEventListener("change",eventManager,false)
}

// var dd = document.getElementById("contenu")
// dd.addEventListener("input",monContenu,false)
// var dd2 = document.getElementById("conteneur")
// dd2.addEventListener("input",monContenu,false)
// var dd3 = document.getElementById("description")
// dd3.addEventListener("input",monContenu,false)

// var monB = document.getElementsByTagName("body")
// for (var i = 0; i < monB.length; i++) {
//   monB[i].addEventListener("input",monContenu,false)
// }
// var myBtn = document.getElementById("newLigne")
// myBtn.addEventListener("click",btnCreate,false)