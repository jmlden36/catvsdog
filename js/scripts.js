$(document).ready(function() {
  
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li><strong>Bark at ya!<strong></li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });

  });

  

  $("button#bark").click(function() {
    $("ul#cat").prepend("<li><Strong>Meow that's not very nice!<strong></li>");
    $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("h1").click(function()  {
    $(this).remove();
  })

});
