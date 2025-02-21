document.getElementById("searchBox").addEventListener("input", debounce(fetchAndFilterCategories, 500));
document.getElementById("submitBtn").addEventListener("click", fetchCategories);

let categories = [];

async function fetchCategories() {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/categories");
        categories = await response.json();
        displayCategories(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

function fetchAndFilterCategories() {
    const searchText = document.getElementById("searchBox").value.toLowerCase();
    const filteredCategories = categories.filter(category => category.includes(searchText));
    displayCategories(filteredCategories);
}

function displayCategories(categoriesArray) {
    const list = document.getElementById("categoriesList");
    list.innerHTML = "";
    categoriesArray.forEach(category => {
        const li = document.createElement("li");
        li.textContent = category;
        list.appendChild(li);
    });
}

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
