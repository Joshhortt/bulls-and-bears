// USER INTERFACE LOGIC - (Front-end)
$(document).ready(function() {
  // section container-bear in HTML
  $("button#bear-button").click(function(event){
    $(".initially-hidden").hide();
    $(".initially-hidden#bear-display").show();
    $("button#bear-button").hide();
  });
// section container-bul in HTML
  $("button#bull-button").click(function(event){
    $(".initially-hidden").hide();
    $(".initially-hidden#bull-display").show();
    $("button#bull-button").hide();
  });
});
