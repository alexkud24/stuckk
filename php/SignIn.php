 <div id="formsForSignIn">
                        <?php
        $mail = $_POST["mail"];
        $password = $_POST["password"];
        ?>
    <button id="loginBtn">Login</button>
   <div id="loginPanel" style="display: none;">
    <form id="form" method="post" action="index.php">
      <div>
        <label for="mail">Логин:</label>
        <input class="inputdann" name="mail" type="email" placeholder="Email" required>
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input class="inputdann" name="password" type="password" placeholder="Password" required minlength="6">
      </div>
      <div>
        <input type="submit" id="SignInButton" value="Войти">
      </div>
    </form>
   </div>