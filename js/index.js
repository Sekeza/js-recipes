console.log("working well");

const trendsContainer = document.querySelector(".trends .box-container");

fetch("https://api.spoonacular.com/recipes/random?apiKey=0685a694f3f54a7ea76bee81e370bd17&number=10")
    .then((data) => {
        return data.json();
    })
    .then((result) => {
        console.log(result.recipes);
        let html = "";
        result.recipes.map((item) => {
            html = `
            <div class="box">
                <img src=${item.imageType} alt=${item.title} >
                <h5>${item.title}</h5>
            </div>
        `;
        });
        trendsContainer.innerHTML = html; 
    })
    .catch ((error) => {
        console.log(error);
    })

// Get data from the api for trends
// const getTrends = async () => {
   
//     let url = "https://api.spoonacular.com/recipes/random?apiKey=0685a694f3f54a7ea76bee81e370bd17&number=10";
   
//     try {
//         let apiData1 = await fetch(url);
//         // console.log( apiData1.json());
//         return await apiData1.json();
//     } catch (error) {
//         console.log(error);
//     }            
// };

// // getTrends();

// const displayTrendingRecipes = async () => {
//     let trendsList = await getTrends();
//     console.log(trendsList);

// 


// displayTrendingRecipes();



