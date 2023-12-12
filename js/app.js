// Random skaiciaus funkcija nuo 100 iki 255
const colorNumer = ()=>{
    return Math.floor(Math.random()*255)+100;
}

// Random fono spalvos f-ja
const randomBackground = ()=>{
    return `rgb(${colorNumer()},${colorNumer()},${colorNumer()})`
}

// Išvalo konteinerį užduotai klasei
function clearResults(containerName) {
    let reloadContainer = document.getElementsByClassName(containerName)[0];
    reloadContainer.innerHTML = ''; 
}        

// Formuoja card'us pagal paeiškos žodį
function makeCards(searchQuery) {
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchQuery}`)
    .then((response) => response.json())
    .then(data => {
        //console.log(data)
        if (data.total != 0){
            clearResults('jokes');
            const divJokes = document.querySelector('.jokes');
            data.result.forEach(joke => {
                //console.log(joke)
                document.querySelector('.no-jokes').style = "display: none";
                divJokes.innerHTML += `
                <article class="col">
                    <div class="card rounded-0 h-100" style="background-color: ${randomBackground()}">
                        <div class="card-body d-flex align-items-center justify-content-center text-center">
                            <p>${joke.value}</p>
                        </div>
                    </div>
                </article>`;
            })
        }
        else {
            clearResults('jokes');
            document.querySelector('.no-jokes').style = "display:";
        }
    })
}

// Paieškos laukas
document.querySelector('form').addEventListener("input",(e)=>{
    e.preventDefault();
    let searchQuery = document.querySelector('input').value;
    makeCards(searchQuery);
})

