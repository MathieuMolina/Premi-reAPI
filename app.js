const img = document.getElementById('img');
const img2 = document.getElementById('img2');
fetch('https://api.thecatapi.com/v1/images/search/')
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                img.src = data[0].url
            })
        }
        else{
            console.log("ERREUR")
            document.getElementById('erreur').innerHTML = "Erreur :("
        }
    });


    fetch('https://api.thecatapi.com/v1/images/search/')
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                img2.src = data[0].url
            })
        }
        else{
            console.log("ERREUR")
            document.getElementById('erreur').innerHTML = "Erreur :("
        }
    });

    //! Attention : Il faut obligatoirement utiliser json pour faire fonctionner les API