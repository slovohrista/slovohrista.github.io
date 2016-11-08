document.addEventListener("DOMContentLoaded", function(event) {
  var filename, startBlock = "";

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
        filename = date + "-" + url_slug(title) + ".md";

        $(".start-block").html(startBlock);
        $(".file-block").html(filename);
    });

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    $(".download").click(function() {
      console.log("download");
        // Start file download.
        download(filename, startBlock);
    });


});
