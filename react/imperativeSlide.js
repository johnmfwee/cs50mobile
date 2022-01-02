const SLIDE = {
  title: 'React is Declarative',
  bullets: [
    'Imperitive vs Declarative',
    "The browser APIs aren't fun to work with",
    'React allows us to write what we want, and the library will tagke carae of the DOM manipulation',
  ],
}

function createSlide(slide) {
  const slideElement = document.createElement('div')

  // TODO: add to slide
  const title = document.createElement('h1')
  title.innerHTML = SLIDE.title

  return slideElement
}
