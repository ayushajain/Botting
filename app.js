var page = require('webpage').create(),
    system = require('system'),
    url, time, title;

time = Date.now();
url = system.args[1];


page.open(url, function(status) {
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {

    });

    page.evaluate(function() {
        console.log(document.title);
    });
    time = Date.now() - time;



    //console.log(login.attr('name'));

    console.log('Page title is ' + title);
    console.log('Loading time ' + time + 'ms');

    phantom.exit();
});
