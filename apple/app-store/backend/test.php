<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test</title>
</head>
<body>
    
    <form method="POST" encode="urlencode">
        <input type="checkbox" name="selected">
        <input type="checkbox" name="selected">
        <input type="submit" value="submit">
    </form>
    
    <pre><?=file_get_contents('php://input')?></pre>
    
</body>
</html>