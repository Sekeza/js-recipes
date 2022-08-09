console.log("working well");

const trendsContainer = document.querySelector(".trends .box-container");
console.log(trendsContainer);
let trendsList = [];
console.log(typeof trendsList);

// Get data from the api for trends
const getTrends = async () => {
   
    const api = await fetch("https://api.spoonacular.com/recipes/random?apiKey=0685a694f3f54a7ea76bee81e370bd17&number=10", { method:"GET", headers: { "Content-Type": "application/json" }});

    const data1 = api.json();
    console.log(data1);
    // trendsList.push(...data1);
            
};

const displayTrendingRecipes = async () => {
    const trendRecipes = getTrends();

    let html = "";
    trendRecipes.forEach(trend => {
        let divCard = `
            <div class="box">
                <img src={trend.image} alt={trend.image}>
                <h5>{trend.title}</h5>
            </div>
        `;

        html += divCard;
    })

}

trendsContainer.innerHTML = html;




