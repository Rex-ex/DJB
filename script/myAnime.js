const $filters = $(".filters");
const $nav = $(".mainNav");
const $hero = $(".hero");
const $menu = $(".bar_container");
const $flags = $(".flags__container");
$nav.fadeOut();
$hero.fadeOut();
$menu.fadeOut();
$flags.fadeOut();
// anime.js
$(document).ready(function() {
  // $preloaderDiv.fadeOut();
  doAnimeEvent();
  // if (animeContainer) {
  function doAnimeEvent() {
    const $preloaderDiv = $(".filters__preloader");
    const animStrips = ".anime__container span";
    const $filters = $(".filters");
    const $nav = $(".mainNav");
    const $hero = $(".hero");
    const $menu = $(".bar_container");
    const $flags = $(".flags__container");
    // const $hamburger = $("nav");
    const animeContainer = ".anime__container";
    // $preloaderDiv.fadeOut();
    $nav.fadeOut();
    $hero.fadeOut();
    $menu.fadeOut();
    $flags.fadeOut();
    // $hamburger.fadeOut();

    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 750
    });

    tl.add({
      targets: animStrips,
      width: "100%",
      backgroundColor: "rgba(0, 120, 180, 1)",
      delay: anime.stagger(100) // increase delay by 100ms for each elements.
    })
      .add({
        targets: animStrips,
        width: "90%",
        backgroundColor: "rgba(0, 120, 180, 0.2)"
      })
      .add({
        targets: animeContainer,
        scaleY: "2",
        scaleX: "2",
        translateX: "40%",
        rotate: "45deg",
        duration: 5000
      });
    let fadeOut = setTimeout(function() {
      $nav.fadeIn();
      $hero.fadeIn();
      $menu.fadeIn();
      $flags.fadeIn();
    }, 3500);
  }
  // }
});
