$("#search").on("click", function() {
        var apiKey = "&api-key=cRrvuFEXczzFG7LGmCfA8tTVyAlGe4Lx";
        var query = document.getElementById("searchTerm").value;
        //var filter = document.getElementById("seartYear").value;
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + apiKey;
        
        $.ajax({
          url: queryURL,
          method: "GET",
        })
          .then(function(response) {
    
            var results = response.response.docs;
            
            for(var i = 0; i < results.length; i++ ){
    
                var articlesDiv = document.getElementById("articlesHere");
                var newArticle = document.createElement("div");
                articlesDiv.append(newArticle);
                $(newArticle).addClass("arts")

                var headlineDiv = document.createElement("div");
                $(headlineDiv).attr("id","headline");
                newArticle.append(headlineDiv)
                var headlineInfo = results[i].headline.main;
                headlineDiv.innerHTML = "Title: " + headlineInfo

                var authorDiv = document.createElement("div");
                $(authorDiv).attr("id", "author");
                newArticle.append(authorDiv);
                var authorInfo = results[i].byline.original
                authorDiv.innerHTML = authorInfo;

                var pubDateDiv = document.createElement("div");
                $(pubDateDiv).attr("id", "pubdate");
                newArticle.append(pubDateDiv);
                var pubDateInfo = results[i].pub_date;
                console.log(pubDateInfo);
                pubDateDiv.innerHTML = "Publication Date: " + pubDateInfo;

                var abstractDiv = document.createElement("div")
                $(abstractDiv).attr("id","abstract");
                newArticle.append(abstractDiv);
                var abstrtDetail = results[i].abstract;
                abstractDiv.innerHTML = "Summary: " + abstrtDetail;

                var pubURLDiv = document.createElement("a");
                $(pubURLDiv).attr("id", "link");
                newArticle.append(pubURLDiv);
                var pubURLInfo = results[i].web_url
                pubURLDiv.href = pubURLInfo;
                pubURLDiv.innerHTML = pubURLInfo;
             }
          });
      });