let kepek = ["kep1.jpg","kep2.jpg","kep3.jpg","kep4.jpg","kep5.jpg","kep6.jpg","kep7.jpg","kep8.jpg",]

for (let i = 0; i < kepek.length; i++) {
    
    $(`.${i}`).append(`<img class="kep"src="${kepek[i]}"></img>`)

}

