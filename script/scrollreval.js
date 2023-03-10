   // ScrollReveal is an js library who can reveal the elements of our page when we roll down or page   

ScrollReveal(
    {
        reset: true,
        duration: 700,
        opacity: null,
        Delay: null,       
    }
    );

var slideUp = {
    distance: '20%',
    origin: 'top',
};

var slideRight = {
    distance: '30%',
    origin: 'left',
}

ScrollReveal().reveal(`
.title, p, .btn,
#home .image,
#companies, .brands, .brands img,
.cards, .card, .card img, .card h5,
#contact
`,
slideUp)

ScrollReveal().reveal(`
#about .image
`,
slideRight)

//header is set false, because when we scroll down our page, he are popping off our elements   
ScrollReveal().reveal('.header',slideUp,{reset: false})