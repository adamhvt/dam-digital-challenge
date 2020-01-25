document.addEventListener("DOMContentLoaded", function () {
    objectFitImages();

    const cards = document.getElementsByClassName("card-controllers");


    for (let i = 0; i < cards.length; i++) {
        const element = cards[i];
        const favouriteButton = element.getElementsByClassName("favorite")[0];
        const deleteButton = element.getElementsByClassName("delete")[0];

        favouriteButton.addEventListener('click', onFavoriteClick);
        deleteButton.addEventListener('click', onDeleteClick);
    }
});


function onFavoriteClick(event) {
    if (event.target.tagName === "path") {
        event.target.style.fill = "#ff0000";
    } else {
        const pathElement = event.target.getElementsByTagName("path")[0];
        pathElement.style.fill = "#ff0000";
    }
}

function onDeleteClick(event) {
    const response = confirm("Are you sure you want to delete this product?");

    if (response === true) {
        const listElementRef = event.target.closest("li");
        listElementRef.remove();
    }
}