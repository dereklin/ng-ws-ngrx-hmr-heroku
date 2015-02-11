<!---
	Here you can add routes to your application and edit the default one.
	The default route is the one that will be called on your application's "home" page.
--->
<cfset addRoute(name="home", pattern="", controller="main", action="welcome")>

<cfscript>
addRoute(name="admin", 	pattern="/admin/", controller="admin", action="index");
addRoute(name="user", 	pattern="/[user]/[controller]/[action]/[key]");
addRoute(name="user", 	pattern="/[user]/[controller]/[action]/");
addRoute(name="user", 	pattern="/[user]/[controller]/", controller="[controller]", action="index");
addRoute(name="user", 	pattern="/[user]/", controller="default", action="index");
</cfscript>