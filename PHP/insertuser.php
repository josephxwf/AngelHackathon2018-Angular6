


<?php

include "header.php";
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}



$data = json_decode(file_get_contents("php://input"));//contain a user object json sent from  userservice component clas


if(isset($data)) {

    //get the name and comment entered by user
    $username = $data->username;
    

    //check if record already exists
    $check=mysqli_query($conn,"SELECT * FROM Users WHERE username='$username'");
    $checkrows=mysqli_num_rows($check);

   if($checkrows>0) {
      //echo "customer already exists";  //not encoded so will cause error
      
      $data = array("personID"=>"0", "username"=>  "alread Exist!"); 
      echo json_encode($data); // encode needed and echo will pass data back
     
   } else {  
    //insert results from the form input
 
          $sql = "INSERT INTO Users (username)
                  VALUES ('$data->username');";

          $sql .= "INSERT INTO AddressTB1 (address, city, state, zipcode, type, personID)
                  VALUES ('$data->address', '$data->city', '$data->state', '$data->zipcode', 'home', (SELECT personID FROM Users WHERE username = '$username '));";

          $sql .= "INSERT INTO AddressTB1 (address, city, state, zipcode, type, personID)
                  VALUES ('$data->address2', '$data->city2', '$data->state2', '$data->zipcode2', 'work', (SELECT personID FROM Users WHERE username = '$username'))";




          //free result of each query above to preapare for using next sql query $sql2 
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
          }else{
            die('Error querying database.');
          }




      

               
          // need select data from database and send added data back to angular component for show
          $sql2 = "SELECT * FROM Users WHERE username = '$username' ";  
          $result = $conn->query($sql2);
          if ($result->num_rows > 0) {
              // output data of each row
               
              while($row = $result->fetch_assoc()) {
                  $data = $row; // assign new object to $data  
                  //$data = json_encode($data); // won't get object value in angular component if added
              }
              echo json_encode($data); // encode needed and echo will pass data back
          } else {
             // echo "0";
          }




          
    }
    //echo "Customer Added";  // not encoded so causing error: UserService: addUser failed: Http failure during parsing for http://localhost:8888/insert.php
    }
mysqli_close($conn);


                  


?>
