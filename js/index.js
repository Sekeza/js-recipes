console.log("working well");

const trendsContainer = document.querySelector(".trends .box-container");
console.log(trendsContainer);
let trendsList = [];
console.log(trendsList);

// Get data from the api for trends
const getTrends = async () => {
   
    let api = await fetch("https://api.spoonacular.com/recipes/random?apiKey=0685a694f3f54a7ea76bee81e370bd17&number=10");
   
    let data1 = await api.json();
    console.log(data1.recipes);
    trendsList.push(...data1.recipes);
    console.log(trendsList);
            
};

const displayTrendingRecipes =  () => {
    const trendRecipes = getTrends();

    let html = "";
    trendRecipes.map(trend => {
        let divCard = `
            <div class="box">
                <img src={trend.image} alt={trend.image}>
                <h5>{trend.title}</h5>
            </div>
        `;

        html += divCard;
    });
    trendsContainer.innerHTML = html;
}

displayTrendingRecipes();



