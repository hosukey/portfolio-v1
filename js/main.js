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

//hamburger menu
menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('open');
  roundMenu.classList.toggle('show-menu');
});
