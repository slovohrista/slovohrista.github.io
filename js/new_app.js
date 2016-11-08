document.addEventListener("DOMContentLoaded", function(event)  {

    $(".gen").click(function() {
        // var title = document.getElementById("title").value;
        var category = "";

        title = $(".title").val();
        author = $(".author").val();
        date = $(".date").val();

        if (document.getElementById("doctrine").checked) {
          category = "doctrine";
        } else if (document.getElementById("poetry").checked) {
          category = "poetry";
        }

        startBlock = "---\nlayout: single\ncategory: " + category + "\ntitle: " + title + "\nauthor: " + author + "\n---";

        $(".start-block").html(startBlock);
        $(".file-block").html(date + "-" + url_slug(title) + ".md");
    });


});
