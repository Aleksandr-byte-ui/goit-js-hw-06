const numberCategories = document.querySelectorAll(".item");
console.log(`В списке ${numberCategories.length} категории.`);

const categoriesArray = [...numberCategories]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
