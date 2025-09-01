// const samochody = [{marka: "Porsche", model: "911 GT3 RS", kolor: "white"}, {marka: "Ferrari", model: "LaFerrari", kolor: "red"}, {marka: "Ferrari", model: "Mondial", kolor: "white"}]




function Number(pos) {
    return Math.floor(Math.random() * pos.length)
}

function Randomize() {
    const Bramkarze = [
    {name: "David Raya", image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Raya.png?h=a6f8517d&auto=webp&itok=ukYkqDAn"},
    {name: "Wojciech Szczesny", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Wojciech_Szcz%C4%99sny.png/640px-Wojciech_Szcz%C4%99sny.png"},
    {name: "Thibaut Courtois", image: "https://img.a.transfermarkt.technology/portrait/big/108390-1717280733.jpg?lm=1"}]
const Obrońcy = [
    {name: "William Saliba", image: "https://img.a.transfermarkt.technology/portrait/header/495666-1718697201.jpg?lm=1"}, 
    {name: "Kieran Tierney", image: "https://img.a.transfermarkt.technology/portrait/header/300716-1662666488.jpg?lm=1"}, 
    {name: "Ben White", image: "https://img.a.transfermarkt.technology/portrait/header/335721-1683275943.jpg?lm=1"}, 
    {name: "Gabriel Magalhaes", image: "https://img.a.transfermarkt.technology/portrait/header/435338-1684162833.jpg?lm=1"},
    {name: "Jurrien Timber", image: "https://img.a.transfermarkt.technology/portrait/header/420243-1702413077.jpg?lm=1"}, 
    {name: "Jakub Kiwior", image: "https://img.a.transfermarkt.technology/portrait/header/425918-1683101307.jpg?lm=1"},
    {name: "Oleksandr Zinchenko", image: "https://img.a.transfermarkt.technology/portrait/header/203853-1688658681.jpg?lm=1"},
    {name: "Takehiro Tomiyasu", image: "https://img.a.transfermarkt.technology/portrait/header/331560-1682591217.jpg?lm=1"},
    {name: "Riccardo Calafiori", image: "https://img.a.transfermarkt.technology/portrait/header/502821-1727382174.jpg?lm=1"}, 
    {name: "Alejandro Balde", image: "https://img.a.transfermarkt.technology/portrait/header/636688-1662836200.jpg?lm=1"}, 
    {name: "Gerard Martin", image: "https://img.a.transfermarkt.technology/portrait/header/705395-1730119053.jpg?lm=1"},
    {name: "Pau Cubarsi", image: "https://img.a.transfermarkt.technology/portrait/header/962110-1712779232.jpg?lm=1"},
    {name: "Inigo Martinez", image: "https://img.a.transfermarkt.technology/portrait/header/158863-1730119186.jpg?lm=1"},
    {name: "Ronald Araujo", image: "https://img.a.transfermarkt.technology/portrait/header/480267-1736431980.jpg?lm=1"},
    {name: "Eric Garcia", image: "https://img.a.transfermarkt.technology/portrait/header/466794-1693604801.jpg?lm=1"},
    {name: "Andreas Christensen", image: "https://img.a.transfermarkt.technology/portrait/header/196948-1668183241.jpg?lm=1"}, 
    {name: "Hector Fort", image: "https://img.a.transfermarkt.technology/portrait/header/937955-1702504973.jpg?lm=1"},
    {name: "Jules Kounde", image: "https://img.a.transfermarkt.technology/portrait/header/411975-1702502639.jpg?lm=1"},
    {name: "Daniel Carvajal", image: "https://img.a.transfermarkt.technology/portrait/header/138927-1721026790.jpg?lm=1"},
    {name: "Eder Militao", image: "https://img.a.transfermarkt.technology/portrait/header/401530-1719653438.jpg?lm=1"},
    {name: "David Alaba", image: "https://img.a.transfermarkt.technology/portrait/header/59016-1684921582.jpeg?lm=1"}, 
    {name: "Lucas Vazquez", image: "https://img.a.transfermarkt.technology/portrait/header/221316-1536655786.jpg?lm=1"}, 
    {name: "Fran Garcia", image: "https://img.a.transfermarkt.technology/portrait/header/341264-1688119965.jpg?lm=1"}, 
    {name: "Antonio Rudiger", image: "https://img.a.transfermarkt.technology/portrait/header/86202-1684484602.jpg?lm=1"}, 
    {name: "Ferland Mendy", image: "https://img.a.transfermarkt.technology/portrait/header/291417-1701294025.jpg?lm=1"}
]
const Pomocnicy = [
    {name: "Thomas Partey", image: "https://img.a.transfermarkt.technology/portrait/header/230784-1668430877.jpg?lm=1"},
    {name: "Martin Odegaard", image: "https://img.a.transfermarkt.technology/portrait/header/316264-1678877651.jpg?lm=1"},
    {name: "Mikel Merino", image: "https://img.a.transfermarkt.technology/portrait/header/338424-1716803831.jpg?lm=1"},
    {name: "Declan Rice", image: "https://img.a.transfermarkt.technology/portrait/header/357662-1687962936.jpg?lm=1"},
    {name: "Pedri Gonzales", image: "https://img.a.transfermarkt.technology/portrait/header/683840-1744278342.jpg?lm=1"},
    {name: "Frenkie de Jong", image: "https://img.a.transfermarkt.technology/portrait/header/326330-1746041680.jpg?lm=1"},
    {name: "Dani Olmo", image: "https://img.a.transfermarkt.technology/portrait/header/293385-1711546268.jpg?lm=1"},
    {name: "Gavi", image: "https://img.a.transfermarkt.technology/portrait/header/646740-1682685701.jpg?lm=1"},
    {name: "Marc Casado", image: "https://img.a.transfermarkt.technology/portrait/header/636695-1729771427.jpg?lm=1"},
    {name: "Jude Bellingham", image: "https://img.a.transfermarkt.technology/portrait/header/581678-1748102891.jpg?lm=1"},
    {name: "Eduardo Camavinga", image: "https://img.a.transfermarkt.technology/portrait/header/640428-1668500874.jpg?lm=1"},
    {name: "Federico Valverde", image: "https://img.a.transfermarkt.technology/portrait/header/369081-1731018042.jpg?lm=1"},
    {name: "Luka Modric", image: "https://img.a.transfermarkt.technology/portrait/header/27992-1687776160.jpg?lm=1"},
    {name: "Aurelien Tchouameni", image: "https://img.a.transfermarkt.technology/portrait/header/413112-1668500754.jpg?lm=1"},
    {name: "Arda Guler", image: "https://img.a.transfermarkt.technology/portrait/header/861410-1699472585.jpg?lm=1"},
    {name: "Dani Ceballos", image: "https://img.a.transfermarkt.technology/portrait/header/319745-1723666162.jpg?lm=1"}
]
const Lewe_Skrzydło = [
    {name: "Gabriel Martinelli", image: "https://img.a.transfermarkt.technology/portrait/header/655488-1682689091.jpg?lm=1"},
    {name: "Leandro Trossard", image: "https://img.a.transfermarkt.technology/portrait/header/144028-1702412939.jpg?lm=1"},
    {name: "Raphinha", image: "https://img.a.transfermarkt.technology/portrait/header/411295-1729754479.png?lm=1"},
    {name: "Vinicius Junior", image: "https://img.a.transfermarkt.technology/portrait/header/371998-1664869583.jpg?lm=1"}
]
const Prawe_Skrzydło = [
    {name: "Bukayo Saka", image: "https://img.a.transfermarkt.technology/portrait/header/433177-1684155052.jpg?lm=1"},
    {name: "Lamine Yamal", image: "https://img.a.transfermarkt.technology/portrait/header/937958-1746563945.jpg?lm=1"},
    {name: "Rodrygo", image: "https://img.a.transfermarkt.technology/portrait/header/412363-1746183850.jpg?lm=1"},
]
const Napastnicy = [
    {name: "Gabriel Jesus", image: "https://img.a.transfermarkt.technology/portrait/header/363205-1669711141.jpg?lm=1"},
    {name: "Kai Havertz", image: "https://img.a.transfermarkt.technology/portrait/header/309400-1683903902.jpg?lm=1"},
    {name: "Raheem Sterling", image: "https://img.a.transfermarkt.technology/portrait/header/134425-1684165974.jpg?lm=1"},
    {name: "Robert Lewandowski", image: "https://img.a.transfermarkt.technology/portrait/header/38253-1701118759.jpg?lm=1"},
    {name: "Ferran Torres", image: "https://img.a.transfermarkt.technology/portrait/header/398184-1699383547.jpg?lm=1"},
    {name: "Kylian Mbappe", image: "https://img.a.transfermarkt.technology/portrait/header/342229-1682683695.jpg?lm=1"},
    {name: "Endrick", image: "https://img.a.transfermarkt.technology/portrait/header/971570-1723665994.jpg?lm=1"},
    {name: "Brahim Diaz", image: "https://img.a.transfermarkt.technology/portrait/header/314678-1744193327.jpg?lm=1"}
]
    let lw = Lewe_Skrzydło[Number(Lewe_Skrzydło)]
    let st = Napastnicy[Number(Napastnicy)]
    let rw = Prawe_Skrzydło[Number(Prawe_Skrzydło)]
    var x = Number(Pomocnicy)
    let m1 = Pomocnicy[x]
    Pomocnicy.splice(x, 1)
    var x = Number(Pomocnicy)
    let m2 = Pomocnicy[x]
    Pomocnicy.splice(x, 1)
    var x = Number(Pomocnicy)
    let m3 = Pomocnicy[x]
    Pomocnicy.splice(x, 1)
    var x = Number(Obrońcy)
    let b1 = Obrońcy[x]
    Obrońcy.splice(x, 1)
    var x = Number(Obrońcy)
    let b2 = Obrońcy[x]
    Obrońcy.splice(x, 1)
    var x = Number(Obrońcy)
    let b3 = Obrońcy[x]
    Obrońcy.splice(x, 1)
    var x = Number(Obrońcy)
    let b4 = Obrońcy[x]
    Obrońcy.splice(x, 1)
    let gk = Bramkarze[Number(Bramkarze)]
    const img = document.querySelectorAll("img")
    img[0].setAttribute("src", lw.image)
    img[1].setAttribute("src", st.image)
    img[2].setAttribute("src", rw.image)
    img[3].setAttribute("src", m1.image)
    img[4].setAttribute("src", m2.image)
    img[5].setAttribute("src", m3.image)
    img[6].setAttribute("src", b1.image)
    img[7].setAttribute("src", b2.image)
    img[8].setAttribute("src", b3.image)
    img[9].setAttribute("src", b4.image)
    img[10].setAttribute("src", gk.image)
    const headers = document.querySelectorAll("h3")
    headers[0].textContent = lw.name
    headers[1].textContent = st.name
    headers[2].textContent = rw.name
    headers[3].textContent = m1.name
    headers[4].textContent = m2.name
    headers[5].textContent = m3.name
    headers[6].textContent = b1.name
    headers[7].textContent = b2.name
    headers[8].textContent = b3.name
    headers[9].textContent = b4.name
    headers[10].textContent = gk.name
}

console.log(Bramkarze.length + Obrońcy.length + Pomocnicy.length + Prawe_Skrzydło.length + Lewe_Skrzydło.length + Napastnicy.length)