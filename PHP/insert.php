


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



$sql = "INSERT INTO Users (username)
        VALUES ('$data->username');";

$sql .= "INSERT INTO AddressTB1 (address, city, state, zipcode, type, personID)
        VALUES ('$data->address', '$data->city', '$data->state', '$data->zipcode', 'home', (SELECT personID FROM Users WHERE username = '$data->username'));";

$sql .= "INSERT INTO AddressTB1 (address, city, state, zipcode, type, personID)
        VALUES ('$data->address2', '$data->city2', '$data->state2', '$data->zipcode2', 'work', (SELECT personID FROM Users WHERE username = '$data->username'))";




//free result of each query above to preapare for next sql $sql2 
if (mysqli_multi_query($conn,$sql))
{
  do
    {
    // Store first result set
    if ($result=mysqli_store_result($conn)) {
      
      /* Fetch one and one row
      while ($row=mysqli_fetch_row($result))
        {
        printf("%s\n",$row[0]);
        }
    */
      // Free result set
      mysqli_free_result($result);
      }
    }
  while (mysqli_next_result($conn));
}
                    


//$data = { "personID":90, "username":"hi"};
// need select data from database to send added data back to angular component
$sql2 = "SELECT * FROM Users WHERE username = '$data->username' ";  
$result = $conn->query($sql2);
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
