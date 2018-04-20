<?php
session_start();
require_once "database/loggedinUser.php";
require "database/config.php";
$bericht = '';
$getid = $_SESSION['id'];


// pak de gebruiker gegevens op.
$pakquery = "select * from user WHERE id ='$getid' ";

//Krijg de huidige gebruiker gegevens, laat fout zien als dat voorkomt.
if (!($resultaat = mysqli_query($db, $pakquery))) {
    $message = "Error," . mysqli_error($db);
} else {
    while ($row = mysqli_fetch_assoc($resultaat)) {
        
        $username = $row['username'];
        $password = $row['password'];
        $id = $row['id'];
    }
}


?>
<!DOCTYPE html>
<html>
<head lang="en">
    <?php include 'header.php';?>
</head>
<body>

    <!-- Always shows a header, even in smaller screens. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title">Achievements</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Menu</span>
            
            <nav class="mdl-navigation">

                <a class="mdl-navigation__link" href="dashboard.php">
                    <i class="material-icons icon">dashboard</i>
                    &nbsp;&nbsp;&nbsp; Dashboard
                </a>

                <a class="mdl-navigation__link" href="logout.php">
                    <i class="material-icons icon">keyboard_tab</i>
                    &nbsp;&nbsp;&nbsp; Logout
                </a>
                
            </nav>
        </div>
        <main class="mdl-layout__content">
            <div class="insideapplication">

                Achievments
            </div>
        </main>
    </div>

</body>
</html>