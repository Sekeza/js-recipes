
console.log("working");
// Selecting the elements
const image = document.querySelector(".trends .box-container .box img");
const h5 = document.querySelector(".trends .box-container .box h5");

const fruitImage = document.querySelector(".fruits .box-container .box img");
const fruitName = document.querySelector(".fruits .box-container .box h5");

const form = document.querySelector("form");
// const inputSearch = document.querySelector(".form #input").value;

const boxContainer = document.querySelector(".fruits .box-container .box img");


// form.addEventListener("submit", () => {
//     inputSearch.addEventListener("blur/change/", () => {

//     });
// });






const trendsList = [];

// Get data from the api for trends
const getTrends = async() => {
    const check = localStorage.getItem("trends");
    if(check) {
        JSON.parse(check);
    }
    else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=0685a694f3f54a7ea76bee81e370bd17&number=10", { method:"GET", headers: { "Content-Type": "application/json" }});

        const data1 = api.json();

        localStorage.setItem("fruits", JSON.stringify(data1));
        console.log(data1);
        // trendsList.push(...data1);

    }
    

    // trendsList.map(recipe => {
    //     return {
    //        image: recipe.image, 
    //        h5: recipe.title
    //     }
    // });
};

getTrends();


// const fruitsList = [];

// // Get data from the api for trends
// const getFruits = async() => {
//     const check = localStorage.getItem("fruits");
//     if(check) {
//         JSON.parse(check);
//     }
//     else {
//         const api = await fetch(`https://api.spoonacula.com/recipes/random?apikey=${process.env.RECIPE_API_KEY}&number=10&tag=fruits`);

//         const data1 = api.json();

//         localStorage.setItem("fruits", JSON.stringify(data1));
//         console.log(data1.recipes);
//         fruitsList.push(...data1);
//     }

    
//     fruitsList.map(recipe => {
//         return {
//            fruitImage: recipe.image, 
//            fruitName: recipe.title
//         }
//     });
// };

// getFruits();

// const searchList = [];

// const getSearch = async(searchName) => {
//     const api = await fetch(`https://api.spoonacula.com/recipes/complexSearch?apikey=${process.env.RECIPE_API_KEY}&number=10&name=${searchName}`);

//     const searchData = api.json();

//     console.log(searchData.recipes);
//     searchList.push(...searchData);
// }

// const findMatches = (searchItem, searchList) => {
//     searchList.filter(recipe => {
//         return recipe.name.toLowerCase().includes(searchItem.toLowerCase());
//     });
// }

// const displaySearch = (inputSearch) => {
//     const matchList = findMatches(inputSearch, searchList);
//     const cardHtml = matchList.map(item => {
//         return `
//             <div class="box">
//                 <img src={item.image} alt={item.name}>
//                 <h5>{item.name}</h5>
//             </div>
//         `
//     }).join("");
// }


