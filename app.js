
const searchMenu = () => {
    const searchMeal = document.getElementById('search-menu').value;

    if (searchMeal == "") {
        document.getElementById('error-message').innerText = "Please Enter a Menu";
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                displayMeals(data.meals)
            })
            .catch(error => document.getElementById('error-message').innerText = "Data Not Found")
    }

}
const displayMeals = meals => {
    const menuContainer = document.getElementById("menu-container");

    meals.forEach(meal => {
        const menuDiv = document.createElement('div');
        menuDiv.className = 'menu-list';
        const menuList = `
            <div onclick="displayIngredients('${meal.strMeal}', '${meal.strMealThumb}', '${meal.strIngredient1}', '${meal.strIngredient2}', '${meal.strIngredient3}','${meal.strIngredient4}','${meal.strIngredient5}','${meal.strIngredient6}' )" id="meal-info" >
        <img class="img-fluid menu-img" src = "${meal.strMealThumb}"/>
        <h3 class="menu-item">${meal.strMeal}</h3>
            </div>
    `;
        menuDiv.innerHTML = menuList;
        menuContainer.appendChild(menuDiv)
    });

}

const displayIngredients = (name, img, str1, str2, str3, str4, str5, str6) => {
    const ingredientContainer = document.getElementById("ingredient-container");
    const ingredientDiv = document.createElement('div');
    const ingredientList = `
        <h3>${name}</h3>
        <img class="py-3" src = "${img + '/preview'}"/>    
        <ul>
            <li>${str1}</li>
            <li>${str2}</li>
            <li>${str3}</li>
            <li>${str4}</li>
            <li>${str5}</li>
            <li>${str6}</li>
        </ul>
    `;
    ingredientDiv.innerHTML = ingredientList;
    ingredientContainer.appendChild(ingredientDiv)

}