const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 500,
};

ScrollReveal().reveal(".header__main", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".hero__content", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".hero__img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".hero__social", {
  ...scrollRevealOption,
  duration: 1000,
});
ScrollReveal().reveal(".hero__stack__title", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".hero__stack__list", {
  ...scrollRevealOption,
  duration: 1000,
});

ScrollReveal().reveal(".about__img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".projects__title", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".projects__subtitle", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".projectCard__img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".projectCard__content", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".contact__subtitle", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".contact__title", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".contact__content", {
  ...scrollRevealOption,
});
