<!doctype html>
<html lang="en">

  <head>
    <?php include 'header.php';?>
  </head>

  <body>

    <div class="front">

      <!-- Title -->
      <h4 class="title">
        <i class="material-icons icon">alarm</i>
        Stop Delaying
      </h4>

      <form action="#">
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" id="sample1">
          <label class="mdl-textfield__label" for="sample1">Username</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="password" id="sample1">
          <label class="mdl-textfield__label" for="sample1">Password</label>
        </div>

        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Login
        </button>

      </form>

      <a href="registration.php"> 
        <button class="mdl-button mdl-js-button linkfield">Sign up now!</button>
      </a>

    </div>

  </body>

</html>
