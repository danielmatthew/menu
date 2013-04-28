<!doctype>
<html>
<head>
	<title>Menu</title>
	<meta charset="utf-8">
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="initial-scale=1.0">

	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
	<h1 id="header">Menu</h1>
</body>
<script id="menuTpl" type="text/template">
{{#.}}
		<dt>{{ day }}</dt>
		<dd>{{ meal }}</dd>
{{/.}}
</script>
<script async src="mustache.js"></script>
<script async src="app.js"></script>
</html>