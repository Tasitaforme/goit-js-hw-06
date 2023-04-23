const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(сategory => {
    console.log(`Category: ${сategory.firstElementChild.innerHTML}`);
    console.log(`Elements: ${сategory.lastElementChild.children.length}`);
});
