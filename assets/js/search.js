var searchField = $("#search-field").ghostHunter({
            results : "#results",
            rss : "/rss",
            onKeyUp : true,
            displaySearchInfo : false,
            result_template : "<section class=\"articles\"><header class=\"post-header\"><a href='{{link}}'><p class=\"search-title\">{{title}}</a><time> :: {{pubDate}}</p></time></header></section><hr />"
        });
        
function clearResults() {
    searchField.clear();
}