


<?php

include "header.php";
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


/*

$sql = "INSERT INTO userHomeAddress (name )
VALUES ('John')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

*/

$data = json_decode(file_get_contents("php://input"));//contain a hero object sent from  heroservice component clas

if(isset($data)) {
    $address = $data->address;

    //check if record already exists
    $check=mysqli_query($conn,"SELECT * FROM Apartments WHERE address ='$address'");
    $checkrows=mysqli_num_rows($check);

   if($checkrows>0) {
      //echo "customer already exists";  //not encoded so will cause error
      
      //$data = array("personID"=>"0", "username"=>  "alread Exist!"); 
      //echo json_encode($data); // encode needed and echo will pass data back

        $sql = "DELETE FROM Apartments 
              WHERE address ='$address';";   // delete existing record for adding it to the bottom of the table later
        $result = $conn->query($sql);
        $sql = "INSERT INTO Apartments (address) 
                VALUES ('$data->address');"; // add the same record to bottom

        $result = $conn->query($sql);
     
   } else { 

        $sql = "INSERT INTO Apartments (address) 
                VALUES ('$data->address');"; // add the same record to bottom

        $result = $conn->query($sql);
      

      }

}
mysqli_close($conn);


?>
