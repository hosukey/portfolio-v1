'use strict';

const projects = document.querySelectorAll('.project');
const menuButton = document.querySelector('.menu-button');
const roundMenu = document.querySelector('.round');

//Projects
projects.forEach(function (project) {
  const btn = project.querySelector('.project-title');
  btn.addEventListener('click', function () {
    projects.forEach(function (item) {
      if (item !== project) {
        item.classList.remove('show-text');
      }
    });
    project.classList.toggle('show-text');
  });
});

//Intersection Observer
const allLoadings = document.querySelectorAll('.reveal');

// console.log(allLoadings);

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
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
