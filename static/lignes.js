
//var tt = []

// <button type="submit" name="submit" value="submit" class="btn btn-info">Save</button>

function setContent(p_content){
  // Ecrire dans l'éditeur
  console.log("Ecrire dans l'éditeur")
$('#summernote').summernote('code', p_content);
}

var maListe = []
async function rechercheCodeHtml(p_id){
  
  var url = "http://localhost:5000/donneHtml"+"?id="+p_id
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log("jsonData : ",jsonData)
  maListe.push(jsonData)
  //tt.push(jsonData)
  //var el = document.getElementById("voiciPage")
  // var myTitre = document.getElementById("voiciTitre")
  // myTitre.innerHTML = jsonData
  var el = document.getElementById("monContenu")
  el.innerHTML = jsonData
  var idPage = document.getElementById("monIdPage")
  idPage.dataset.idpage = p_id
  idPage.value = p_id
  var divBtn = document.getElementById("monBtnModif")
  divBtn.children[0].id = p_id
  // var btnModif = document.createElement("button")
  // btnModif.classList.add("btn")
  // btnModif.classList.add("btn-outline-light")
  // btnModif.id = p_id 

  var imgBtnModif = document.createElement("img")
  imgBtnModif.src = "static/crayonBtn.png" 

  //divBtn.appendChild(btnModif)
  //btnModif.appendChild(imgBtnModif)
  //btnModif.addEventListener('click', eventManager2, false);
  divBtn.children[0].addEventListener('click', eventManager2, false);
  // var ab = btnModif.addEventListener('click', eventManager2, false);
  // if(ab ){
  //   console.log("eventManager2 est cliqué")

  //     var monSN = document.getElementById("monContenu")
  // var myForm = document.createElement("form")
  // myForm.method = "post"
  // var myDivForm = document.createElement("div")
  // myDivForm.classList.add("form-group")
  // var myLabel = document.createElement("label")
  // myLabel.innerHTML = "titre"
  // var myInput = document.createElement("input")
  // myInput.type = "text"
  // myInput.classList.add("form-control")
  // myInput.id = "title"
  // myInput.name = "title"

  // var myDivForm2 = document.createElement("form")
  // myDivForm2.classList.add("form-group")
  // myDivForm2.id = "myContenu"

  // var myLabel2 = document.createElement("label")
  // myLabel2.for = 'summernote'
  // myLabel2.innerHTML = 'Content'
  // var txtArea = document.createElement("textarea")
  // txtArea.id="summernote"
  // txtArea.name = "editordata"
  // txtArea.classList.add("form-control")
  // txtArea.value = rechercheCodeHtml()
  // var myScript = document.createElement("script")
  // myScript.innerHTML ="$('#summernote').summernote({ placeholder: 'Enter some content here.', tabsize: 2, height: 100 });"


  // //txt.innerHTML = "hello"
  // //monSN.replaceChild(myForm)

  // //monSN.replaceChildren(document.createElement("h4"))

  // var myDivForm3 = document.createElement("form")
  // myDivForm3.classList.add("form-group")
  // var myBtnSubmit = document.createElement("button")
  // myBtnSubmit.type = "submit"
  // myBtnSubmit.classList.add("btn")
  // myBtnSubmit.classList.add("btn-info")
  // myBtnSubmit.innerHTML = "Save"

  

  // myForm.appendChild(myDivForm)
  // myDivForm.appendChild(myLabel)
  // myDivForm.appendChild(myInput)


  // myForm.appendChild(myDivForm2)
  // myDivForm2.appendChild(myLabel2)
  // myDivForm2.appendChild(txtArea)
  // myDivForm2.appendChild(myScript)

  // myForm.appendChild(myDivForm3)
  // myDivForm3.appendChild(myBtnSubmit)


  // monSN.replaceChildren(myForm)

  // }
  console.log("!! le code est sur la page !!")
  
    console.log("set content...")
  console.log(setContent(jsonData))

 

};

function eventManager(p_event){
  console.log("dans eventManager")
  console.log(p_event.target.id)
  var id = p_event.target.id
  // var r = rechercheCodeHtml(id)
  var r = rechercheCodeHtml(id)
  console.log("r:",r)
  console.log("le code est sur la page")


}

async function rechercheCodeHtml2(p_id){
  var maListe = []
  var url = "http://localhost:5000/donneHtml"+"?id="+p_id
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log("jsonData : ",jsonData)
  //tt.push(jsonData)
  //var el = document.getElementById("voiciPage")
  // var myTitre = document.getElementById("voiciTitre")
  // myTitre.innerHTML = jsonData
  var el = document.getElementById("monContenu")
  el.innerHTML = jsonData
  var idPage = document.getElementById("monIdPage")
  idPage.dataset.idpage = p_id
  var divBtn = document.getElementById("monBtnModif") 
  console.log("set content...")
  console.log(setContent(jsonData))

};



function eventManager2(p_event){
  console.log("dans eventManager")
  console.log(p_event.target.id)
  var id = p_event.target.id
  // var r = rechercheCodeHtml(id)
  console.log("le bouton modif est cliqué !!")
  console.log("id btn:",id)
  console.log("id btn:",rechercheCodeHtml2(id))

  // async function rechercheCodeHtml(p_id){
  // var maListe = []
  // var url = "http://localhost:5000/donneHtml"+"?id="+p_id
  // const response = await fetch(url);
  // const jsonData = await response.json();
  // console.log("jsonData : ",jsonData)


  var monSN = document.getElementById("monContenu")
  var myForm = document.createElement("form")
  myForm.method = "post"
  myForm.action = "http://localhost:5000/lignes?biscotte="
  var myDivForm = document.createElement("div")
  myDivForm.classList.add("form-group")
  var myLabel = document.createElement("label")
  var myInput = document.createElement("input")
  myInput.type = "text"
  myInput.classList.add("form-control")
  myInput.id = "title"
  myInput.name = "title"
  myInput.value = maListe[0][0]

  var myDivForm2 = document.createElement("form")
  myDivForm2.classList.add("form-group")
  myDivForm2.id = "myContenu"

  var myLabel2 = document.createElement("label")
  myLabel2.for = 'summernote'
  myLabel2.innerHTML = 'Content'
  var txtArea = document.createElement("textarea")
  txtArea.id="summernote"
  txtArea.name = "editordata"
  txtArea.classList.add("form-control")
  txtArea.value = maListe[0][1]
  var myScript = document.createElement("script")
  myScript.innerHTML ="$('#summernote').summernote({ placeholder: 'Enter some content here.', tabsize: 2, height: 100 });"


  //txt.innerHTML = "hello"
  //monSN.replaceChild(myForm)

  //monSN.replaceChildren(document.createElement("h4"))

  var myDivForm3 = document.createElement("form")
  myDivForm3.classList.add("form-group")
  var myBtnSubmit = document.createElement("button")
  myBtnSubmit.type = "submit"
  myBtnSubmit.classList.add("btn")
  myBtnSubmit.classList.add("btn-info")
  myBtnSubmit.innerHTML = "Save"
  myBtnSubmit.action = "/modifierPage"
  maListe = []
  var myDivInvi = document.createElement("input")
  myDivInvi.name = "biscotte"
  myDivInvi.hidden = true 



  

  myForm.appendChild(myDivForm)
  myDivForm.appendChild(myLabel)
  myDivForm.appendChild(myInput)


  myForm.appendChild(myDivForm2)
  myDivForm2.appendChild(myLabel2)
  myDivForm2.appendChild(txtArea)
  myDivForm2.appendChild(myScript)

  myForm.appendChild(myDivForm3)
  myDivForm3.appendChild(myBtnSubmit)
  myDivForm3.appendChild(myDivInvi)


  monSN.replaceChildren(myForm)

 
  
  var monSN = document.getElementById("summernote")
}



async function myPages() {
  const response = await fetch('http://localhost:5000/mesLignes');
  const maListe = await response.json();

  for (var i = 0; i < maListe.length; i++) {
    var maDivPages = document.getElementById("mesPages")
    var myLignes = document.createElement("button")
    myLignes.className = "btn btn-secondary btn-sm btn-block buttonsPages btnTitre"
    myLignes.innerHTML = maListe[i].title
    myLignes.id = maListe[i].id
    myLignes.name = "buttonsPages"
    maDivPages.appendChild(myLignes)
    myLignes.addEventListener('click', eventManager, false);
    
    
}

}
myPages()



$('#summernote').summernote({
  callbacks: {
    onChange: function(contents, $editable) {
      console.log('onChange:', contents, $editable);
    }
  }
});

// summernote.change
$('#summernote').on('summernote.change', function(we, contents, $editable) {
  console.log('summernote\'s content is changed.');
});




























//////////////////////////////////////////////////////////
async function logJSONData() {
  var maListe = []
  const response = await fetch('http://localhost:5000/mesLignes');
  const jsonData = await response.json();
  for (var i = 0; i < jsonData.length; i++) {
    maListe.push(jsonData[i])
  }
  return maListe
}
async function dernierElem() {
  const response = await fetch('http://localhost:5000/mesLignes');
  const jsonData = await response.json();

  var long = jsonData.length
  console.log(long)
  var elem = jsonData[long-1]
  console.log("Voici le dernier elem:",elem)
  console.log(elem.content)
  console.log(elem['content'])

  var maDivTitre = document.getElementById("voiciTitre")
  //var maDivContent = document.getElementById("voiciContent")
  var maDivContent = document.getElementById("monContenu")
  var monTitre = document.createElement("h1")
  monTitre.innerHTML = elem.title
  monTitre.style = "color: rgb(23, 43, 77)"
  var monContenu = document.createElement("div")
  monContenu.innerHTML= elem.content

  maDivTitre.appendChild(monTitre)
  maDivContent.appendChild(monContenu)

}

var maListe = []





