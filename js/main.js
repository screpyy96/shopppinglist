// Check off specific shopping list by clicking

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete item

$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event) {
  if (event.which === 13) {
    // grabbing new item text from imput
    var itemList = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append(
      "<li><span><i class='far fa-trash-alt'></i></span> " + itemList + "</li"
    );
  }
});

$("#toggle").click(function() {
  $("input").fadeToggle();
});
