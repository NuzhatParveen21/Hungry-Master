
const searchMenu = () => {
    const searchMeal = document.getElementById('search-menu').value;

    if (searchMeal == "") {
        document.getElementById('error-message').innerText = "Please Enter a Menu";
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`

        fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data.meals))
            .catch(error => document.getElementById('error-message').innerText = "Search Not Found")
    }

}
const displayMeals = meals => {
    const menuContainer = document.getElementById("menu-container");

    meals.forEach(meal => {


        const menuDiv = document.createElement('div');
        menuDiv.className = 'menu-list';
        const menuList = `
            <div id="meal-info" onclick="menuIngredients('${meal.strMeal}')">
        <img class="img-fluid menu-img" src = "${meal.strMealThumb}"/>
        <h3 class="menu-item">${meal.strMeal}</h3>
            </div>
    `;
        menuDiv.innerHTML = menuList;
        menuContainer.appendChild(menuDiv)
    });

}

const menuIngredients = meals => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}










