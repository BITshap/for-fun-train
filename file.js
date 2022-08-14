

function monke() {
let monke = document.createElement('img')
monke.src = 'images/monke.JPG'
document.body.append(monke)
monke.height = '1000'
monke.width = '1000'
}


monkeprint.addEventListender('click', function() {
    monke()
})

