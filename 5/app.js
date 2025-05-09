console.log("Hello, welcome to 5th Landing Page");

// Animation for rotation of circle
gsap.to(".circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 3
});

var active = 3;

var mncircles = document.querySelectorAll(".mncircle");
gsap.to(mncircles[active - 1], {
    opacity: 0.7
});

var secs = document.querySelectorAll(".sec");
gsap.to(secs[active - 1], {
    opacity: 1
});

function activeCir() {
    gsap.to(mncircles, {
        opacity: 0.08
    })
    gsap.to(secs, {
        opacity: .05
    })
}

mncircles.forEach(function (val, index) {
    val.addEventListener("click", function () {
        gsap.to(".circle", {
            rotate: (3 - (index + 1)) * 10,
            ease: Expo.easeInOut,
            duration: 1
        })

        activeCir();
        gsap.to(this, {
            opacity: 0.7
        })
        gsap.to(secs[index], {
            opacity: 1
        })
    })
});


