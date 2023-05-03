var myblogModal0 = new bootstrap.Modal(document.getElementById("exampleModal0"), {});
var myblogModal1 = new bootstrap.Modal(document.getElementById("exampleModal1"), {});


//select1
function eventManager(p_event){

  var a = 110;

  if (p_event.type == "change"){
    console.log("change sur target : ",p_event.target)
    console.log("change sur : ",p_event.target.value)
    var monId = p_event.target.id
    console.log("!!!",monId)
    console.log("???",p_event.target.value)
    console.log(monId == p_event.target.value)


    //les lignes 
    if (p_event.target.id == p_event.target.value){
      console.log("valeur :",p_event.target.value)
      var elem = document.createElement("tr")
      var elemCase = document.createElement("td")
      elemCase.innerHTML = p_event.target.innerHTML

      document.getElementById("divLignes").appendChild(elemCase)

    }
    
  }

  if (p_event.type == "keydown"){
    console.log("keydown sur : ",p_event.target.value)
    console.log("La touche est : ",p_event.key)
  }

  if(p_event.target.id =="optionLast0"){
    console.log("click sur option OK")
    myblogModal0.show()
  }

  if(p_event.target.id =="btnModalSave"){
    console.log("btn modal click")
    // Save l'option 'a créer'
    var dupNode = document.getElementById("optionLast0").cloneNode([true]);
    console.log("dupNode : ",dupNode)

    // Lire la valeur de la balise 'input' 
    var t = document.getElementById("modalTexte").value
    console.log("Value select:",t)
    fetchPost(t)
    sendChoix(t)

    // Créer un nouvel 'option' vide 
    var o = document.createElement('option')
    o.innerHTML = t 
    // Interroger le serveur pour avoir un ID 
    // var v = fetch(/dossierID)
    o.value = 39
    o.name ="langage"
    fetchPost(t)

    // Insérer avant le dernier un nouvel 'option'
    var s = document.getElementById("select0")
    var insertedNode = s.insertBefore(o, document.getElementById("optionLast0"));


    // supprimer le dernier 'option'
    // document.getElementById("optionLast").remove()

    // Ajouter, en dernier, le nouvel 'option' 

    myblogModal0.hide()

    //fetchPost(t)

    return t 
  }


  

  if (p_event.target.id == "select0"){
    if(p_event.target.value==99){
      console.log("Option OK ! ")
      myblogModal0.show()
    }    
  }

  // Afficher le modal 
  // myblogModal.show()


}



function langage(p_event){
  if (p_event.type == "change"){
    console.log(p_event.target.value)
    console.log(p_event.target.innerHTML)
    console.log(p_event.target.textContent)

    var monId = p_event.target.id
    console.log(monId)
    var choix = document.getElementById(monId).selectedIndex
    console.log(choix)
    var el = document.getElementById(monId)
    console.log("J'ai sélectionné:",el.children[choix].innerHTML)
    var selec = el.children[choix].innerHTML
    dossier(selec)
  }
}



function dossier(p_selection){
  var monChoix = p_selection
  console.log("mon choix:",monChoix)
  var select2 = document.getElementById("select2")
  for (var i = 0; i < select2.length; i++) {
    if(select2.children[i].innerHTML.includes(p_selection)){
      console.log(select2.children[i].innerHTML)
      var idElem = select2.children[i].id 
      console.log("id elem:",idElem)
      //document.getElementById("buuid1").selected = "true";
      var elemSelec = document.getElementById(idElem)
      document.getElementById(idElem).selected = "true";


      sousDossier(monChoix)
    }
  }
  


  
}


function sousDossier(p_selection){
  var monChoix = p_selection
  console.log("je suis dans:","SOUS DOSSIER")
  var select3 = document.getElementById("select3")
  for (var i = 0; i < select3.length; i++) {
     console.log("je suis dans FOR:","SOUS DOSSIER")
    if(select3.children[i].innerHTML.includes(p_selection)){
       console.log("je suis dans IF:","SOUS DOSSIER")
      console.log(select3.children[i].innerHTML)
      var idElem = select3.children[i].id 
      console.log("id elem:",idElem)
      //document.getElementById("buuid1").selected = "true";
      document.getElementById(idElem).selected = "true";

    }
  }
  
}



let reponseServeur = ""
let url = "/ajoutPageSelect" 

async function fetchPost(p_contenu){
  let response = await fetch(url,{
    method:"POST",
    headers: {
        "Content-Type": "application/json",
        "tintin":"milou"
      },
      body: JSON.stringify({'langage':"p_contenu"}), // body data type must match "Content-Type" header
  });
  reponseServeur = await response.json();
  console.log("N°2 Voici le json après le code : ",reponseServeur)  
}







// var b = document.getElementById("btnModalSave0")
// b.addEventListener("click",eventManager,false)

// // var p = document.getElementById("optionLast0")
// // p.addEventListener("click",eventManager,false)

// var p1 = document.getElementById("optionLast1")
// p1.addEventListener("click",eventManager,false)

// var p2 = document.getElementById("optionLast2")
// p2.addEventListener("click",eventManager,false)

// var p3 = document.getElementById("optionLast3")
// p3.addEventListener("click",eventManager,false)

// var myBtnSend = document.getElementById("send")
// myBtnSend.addEventListener("click",eventManager,false)

// var s = document.getElementById("select0")
// s.addEventListener("change",eventManager,false)

// var s = document.getElementById("select1")
// s.addEventListener("change",eventManager,false)

// var s = document.getElementById("select2")
// s.addEventListener("change",eventManager,false)

// var s = document.getElementById("select3")
// s.addEventListener("change",eventManager,false)



var c1 = document.getElementById("select1")
c1.addEventListener("click",langage,false)

var c1 = document.getElementById("select1")
c1.addEventListener("change",langage,false)

var c2 = document.getElementById("select2")
c2.addEventListener("click",dossier,false)

var c3 = document.getElementById("select3")
c3.addEventListener("click",sousDossier,false)


