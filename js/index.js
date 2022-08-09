console.log("working well");

const trendsContainer = document.querySelector(".trends .box-container");

// Get data from the api for trends
const getTrends = async () => {
   
    let url = "https://api.spoonacular.com/recipes/random?apiKey=0685a694f3f54a7ea76bee81e370bd17&number=10";
   
    try {
        let apiData1 = await fetch(url);
        return apiData1.json();
    } catch (error) {
        console.log(error);
    }            
};

const displayTrendingRecipes =  () => {
    let trendsList = getTrends();

    let html = "";
    trendsList.forEach(trend => {
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



