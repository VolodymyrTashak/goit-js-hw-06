const ulCategories = document.querySelector("#categories");
console.log("Number of categories:", ulCategories.children.length);
[...ulCategories.children].forEach((elem) => {
  console.log("Category:", elem.children[0].textContnt);
  console.log("Elements:", elem.children[1].children.length);
});
