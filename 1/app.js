// console.log("Hello and welcome to project 1!");

//Animation for images
gsap.to(".image-container", {
    ease: Expo.easeInOut,
    width: "100%",
    duration: 3,
    stagger: 3
})


//Animation for headings

gsap.to(".text h1", {
    ease: Expo.easeInOut,
    top: "60px",
    duration: 3,
    stagger: 3
});
gsap.to(".text h1", {
    delay: 2,
    ease: Expo.easeInOut,
    top: "-180%",
    duration: 3,
    stagger: 3
});


//Animation for paragraphs

gsap.to(".text p", {
    ease: Expo.easeInOut,
    top: "130px",
    duration: 3,
    stagger: 3
});
gsap.to(".text p", {
    delay: 2,
    ease: Expo.easeInOut,
    top: "-180%",
    duration: 3,
    stagger: 3
});

