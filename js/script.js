var flowers = [
    "Lily",
    "Daisy", "Lilac", "Rose", "Tulip",
    "Lily of the Valley", "Carnations", "Stepganotis", "Gardenia", "Hydrangea",
    "Orchid", "Sunflower", "Pansy", "Daffodil", "Forget me not", "Marigold", "Peony", "Petunia", "Stock", "Violet"
]

function newFlower() {
    var randomNumber = Math.floor(Math.random() * (flowers.length));
    document.getElementById('flowerDisplay').innerHTML = flowers[randomNumber];
}

function showForm() {
    let formDiv = document.getElementById('signup-form')
    console.log(formDiv)
    formDiv.classList.remove('hide')
}

function hideForm() {
    let formDiv = document.getElementById('signup-form')
    formDiv.classList.add('hide')
}