function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
return name;



fetch("flowerlist.json")
    .then(response => response.json())
    .then(data => {
        var flowerlist = document.getElementById('flowerlist')
        for (var i = 0; i < data.length; i++) {
            console.log(data[i])
            flowerlist.innerHTML = flowerlist.innerHTML + '<p>' + data[i].title + '</p>'
        }
    })