window.addEventListener('load', () => {

    let images = document.querySelectorAll(".min")
    let gdeImage = document.querySelector(".imagePrincipale")

    // images.forEach(image => {
    //     image.addEventListener('click', event => {
    //         gdeImage.

    //     })
    // });

    let minis = document.querySelectorAll('.min')
    let imgGrand = document.querySelector('.imagePrincipale img')

    for (let i = 0; i < minis.length; i++) {
        minis[i].addEventListener('click', (e) => {
            imgGrand.src = e.target.src
        })
    }

});