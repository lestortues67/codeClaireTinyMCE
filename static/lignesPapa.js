
var el = document.getElementById("summernote")
      el.name = "editordata"


$(document).ready(function() {
  $('#summernote').summernote({
  placeholder: 'Bootstrap 3 est suffisant...',
  tabsize: 2,
  height: 400,
  }
  );
});
        

// onChange callback
$('#summernote').summernote({
  callbacks: {
    onChange: function(contents, $editable) {
      console.log('content :', contents);
      console.log('$editable:', $editable);
      var btnSave = document.getElementById("btnSave")
      btnSave.disabled = false
      var dataId = btnSave.dataset['id']
      console.log("data id : ",dataId)
    }
  }
});

function set01(){
setContent("<h1>Claire aime le code</h1> <br> <h1>Papa aime le code</h1> <br>  ")
}
  
function setContent(p_content){
  // Ecrire dans l'éditeur
  console.log("Ecrire dans l'éditeur")
$('#summernote').summernote('code', p_content);
}

function getContent(){
  // Lire le contenu de l'éditeur
return  $('#summernote').summernote('code');
}


function poubelle(){
// $(document).ready(function() {
//   $('#summernote').summernote();
// });
}

let reponseServeur = ""
let url = "/imageSave" 

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