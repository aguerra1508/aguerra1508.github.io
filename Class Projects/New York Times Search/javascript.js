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
            console.log(results);
            
            for(var i = 0; i < results.length; i++ ){
    
                var articlesDiv = document.getElementById("articlesHere");
                var newArticle = document.createElement("div");
                articlesDiv.append(newArticle);
                $(newArticle).addClass("arts")

                var headlineDiv = document.createElement("div");
                $(headlineDiv).addClass("headline");
                newArticle.append(headlineDiv)
                var headlineInfo = results[i].headline.main;
                headlineDiv.innerHTML = headlineInfo

                var authorDiv = document.createElement("div");
                $(authorDiv).addClass("author");
                newArticle.append(authorDiv);
                var authorInfo = results[i].byline.original
                authorDiv.innerHTML = authorInfo;

                /*var pubDateDiv = document.createElement("div");
                $(pubDateDiv).addClass("pubdate");
                newArticle.append(pubDateDiv);
                var pubDateInfo = results[i].pub_date;
                console.log(pubDateInfo);
                pubDateDiv.innerHTML = "Publication Date: " + pubDateInfo;*/

                var abstractDiv = document.createElement("div")
                $(abstractDiv).addClass("abstract");
                newArticle.append(abstractDiv);
                var abstrtDetail = results[i].abstract;
                abstractDiv.innerHTML = abstrtDetail;

                var pubURLDiv = document.createElement("a");
                $(pubURLDiv).addClass("link");
                newArticle.append(pubURLDiv);
                var pubURLInfo = results[i].web_url
                pubURLDiv.href = pubURLInfo;
                pubURLDiv.innerHTML = pubURLInfo;
             }
          });
      });