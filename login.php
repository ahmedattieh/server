<?php
if ($_POST['code']=='1990' and $_POST['password']=='5050'){
    header('location: students.html');
}else{
    header('location: error.html');
}




?>
