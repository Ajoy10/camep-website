// Main

gsap.from(["#hero-heading", "#hero-text"], {
  y: -30,
});

gsap.from("#cta", {
  y: -20,
  delay: 0.13,
  autoAlpha: 0,
});

gsap.from("#hero-content .logo", {
  x: 20,
  autoAlpha: 0,
  delay: 0.2,
});

let mm = gsap.matchMedia();
mm.add("(min-width: 800px)", () => {
  // Second section

  gsap.from("#second", {
    x: 700,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: "#second",
      start: "top bottom-=180",
      //   markers: true,
      ease: "power1.inOut",
    },
  });

  // Third section

  gsap.from(["#third .cards", "#third #beds-image"], {
    scaleY: 0.6,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: "#third",
      start: "top bottom-=180",
      //   markers: true,
      ease: "power1.inOut",
    },
  });
});
