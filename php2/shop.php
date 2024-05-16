<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css2/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=AR+One+Sans&display=swap" rel="stylesheet">
    <title>Document</title>
</head>
<body>
        <?php
        $head = file_get_contents('header2.html');
        $marque = file_get_contents('marque.html');
        $block1 = file_get_contens('block1.html');
        $block2 = file_get_contens('block2.html');
        $cart = file_get_contens('cart.html');
        echo $head;
        echo $marque;
        echo $block1;
        echo $block2;
        echo $cart;
        ?>

    <script src="script.js"></script>
</body>
</html>