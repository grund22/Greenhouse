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
fetch("flowerlist.json")
    .then(response => response.json())
    .then(data => {
        var flowerlist = document.getElementById('flowerlist')
        for (var i = 0; i < data.length; i++) {
            console.log(data[i])
            flowerlist.innerHTML = flowerlist.innerHTML + '<p>' + data[i].title + '</p>'
        }
    })