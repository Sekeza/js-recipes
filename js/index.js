console.log("working well");

const trendsContainer = document.querySelector(".trends .box-container");
const fruitsContainer = document.querySelector(".fruits .box-container");

// Get the trending recipes from API 
fetch("https://api.spoonacular.com/recipes/random?apiKey=0685a694f3f54a7ea76bee81e370bd17&number=4")
    .then((data) => {
        return data.json();
    })
    .then((result) => {
        console.log(result.recipes);
        let trendCard = "";
        result.recipes.map((item) => {
            trendCard += `
            <div class="box">
                <img src=${item.image} alt=${item.title} >
                <h5>${item.title}</h5>
            </div>
        `;
        });
        trendsContainer.innerHTML = trendCard; 
    })
    .catch ((error) => {
        console.log(error);
    })


// Get the fruit recipes from API 
fetch("https://api.spoonacular.com/recipes/random?apiKey=0685a694f3f54a7ea76bee81e370bd17&&tag=fruit&number=4")
    .then((data1) => {
        return data1.json();
    })
    .then((result) => {
        console.log(result.recipes);
        let fruitCard = "";
        result.recipes.map((item) => {
            fruitCard += `
            <div class="box">
                <img src=${item.image} alt=${item.title} >
                <h5>${item.title}</h5>
            </div>
        `;
        });
        trendsContainer.innerHTML = fruitCard; 
    })
    .catch ((error) => {
        console.log(error);
    })    





