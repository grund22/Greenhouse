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