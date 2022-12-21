$(document).ready(function () {
  $(".fancybox-button").fancybox({
    prevEffect: "none",
    nextEffect: "none",
    closeBtn: false,
    helpers: {
      title: { type: "inside" },
      buttons: {},
    },
  });
  $(".collection__video").get(0).play();
  $(".lyocell__video").get(0).play();
});
