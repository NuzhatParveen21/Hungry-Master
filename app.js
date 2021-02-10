
const searchMenu = () => {
    const searchMeal = document.getElementById('search-menu').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))


}
const displayMeals = meals => {

    const menuContainer = document.getElementById("menu-container");
    meals.forEach(meal => {
        const menuDiv = document.createElement('div');
        menuDiv.className = 'menu-list';
        const menuList = `
        <img class="img-fluid img-thumbnail mx-auto" src = "$(meal.strMealThumb)" >
        <h3 class="menu-item">${meal.strMeal}</h3>
    `;
        menuDiv.innerHTML = menuList;
        menuContainer.appendChild(menuDiv)
    });

}










