


<?php

 include "header.php";
    

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$data = json_decode(file_get_contents("php://input")); // $data is an Hero[] array, now empty

////////////// if we use http post to send data////

//$sql = "SELECT * FROM userHomeAddress WHERE id = '$data->id' ";
////////////////


/////////////// if we use http get to send data////
$id = $_GET['personID'];
$sql = "DELETE FROM AddressTB1 WHERE personID = '$id'";

///////////////

$conn->query($sql); 


$sql = "DELETE FROM Users WHERE personID = '$id'";
$result = $conn->query($sql); 
if ($result->num_rows > 0) {
    // output data of each row
     
    while($row = $result->fetch_assoc()) {
        $data = $row; // assign new object to $data  
        //$data = json_encode($data); // won't get object value in angular component if added
    }
    echo json_encode($data);
} else {
    echo "0";
}

mysqli_close($conn);


?>
