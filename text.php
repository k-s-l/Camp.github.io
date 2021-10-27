<?php
$insert = false;
if(isset($_POST['name'])){
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";
$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$dxc = $_POST['dxc'];


$sql = "INSERT INTO `form`.`form` (`name`, `email`, `age`, `phone`, `gender`, `dxc`, `date`) VALUES ('$name', '$email', '$age', '$phone', '$gender', '$dxc', current_timestamp());";
//echo $sql;

if ($conn->query($sql)==true){

    //echo "sucessfully inserted";
    $insert=true;
}
else{
    echo"ERROR:$sql <br> $conn->error";
    //$not_insert=true;
}

$conn->close();
}
?>

