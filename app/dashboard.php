<?php
session_start();
require_once "database/loggedinUser.php";
require "database/config.php";
$bericht = '';
$getid = $_SESSION['id'];


?>
<!DOCTYPE html>
<html>
<head lang="en">
    <?php include 'header.php';?>
</head>
<body>
    dashboard
</body>
</html>