import Parallax from 'parallax-js';

const scene = document.querySelector(".welcome");

const parallaxScene = new Parallax(scene, {
    relativeInput: true
});