<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <title>Memory Game</title>
        <meta name="description" content="Memory Games">
        <meta name="author" content="Gabriele D'Arrigo">

        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/main.css">

    </head>
    <body>
        <!-- Struttura HTML -->
        <div id="board">
            <h1 class="title">
                <span>Rock N' Roll</span>
                <span id="logo"><span id="noVisible">Virgin Radio</span></span>
                <span>Memory game</span>
            </h1>

            <div id="info">
                <span id="time">
                    <span id="seconds">0 Secondi</span>
                    <span id="minutes">0 Minuti</span>
                </span>

                <span id="tentativi">
                    <span id="attempts">Tentativi: 0</span>
                </span>
            </div>

            <div id="cards">

            </div>

            <div id="message">
                <h1><img src="img/stella.png"/></h1>
                <h1>Complimenti!</h1>
                <p>Hai completato il gioco in <span id="finalMinutes"></span> Minuti, <span id="finalSeconds"></span> Secondi e <span id="finalAttempts"> </span> tentativi!</p>
            </div>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.2.min.js"><\/script>')</script>

        <!--[if lt IE 9]>
        <script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <script>window.html5 || document.write('<script src="js/libs/html5.js"><\/script>')</script>
        <![endif]-->

        <script src="js/game.js"></script>
    </body>
</html>
