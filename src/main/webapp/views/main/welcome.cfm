<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="javascripts/jquery/jquery-1.8.3.min.js"></script>
<title>Testing JQuery</title>
<script>
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});




$( document ).on( "myCustomEvent", {
    foo: "bar"
}, function( event, arg1, arg2 ) {
    console.log( event.data.foo ); // "bar"
    console.log( arg1 );           // "bim"
    console.log( arg2 );           // "baz"
});
 
$( document ).trigger( "myCustomEvent", [ {"testId":"Test1"}, "baz" ] );
</script>
</head>
<body>

<p>If you click on me, I will disappear.</p>
<p>Click me away!</p>
<p>Click me too!</p>

</body>
</html>