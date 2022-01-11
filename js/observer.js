//Intersection Observer
const allLoadings = document.querySelectorAll('.reveal');

console.log(allLoadings);

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  entry.target.classList.remove('section--hidden');
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.35,
});

allLoadings.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
