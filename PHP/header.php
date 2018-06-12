<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, X-Requested-With, Accept');

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "smalltown";
$port = 3306;
$conn = new mysqli($servername, $username, $password, $dbname,$port);


$query = "SELECT personID FROM Users";
$res = mysqli_query($conn, $query);

if(empty($res)) {
                $query = "CREATE TABLE Users (
                          personID int(11) AUTO_INCREMENT,
                          username varchar(255) NOT NULL UNIQUE,
                          email varchar(255) NOT NULL,
                          password varchar(255) NOT NULL,                      
                          PRIMARY KEY  (personID)
                          );";

                $query .= "CREATE TABLE AddressTB1(
							addrID int(11) AUTO_INCREMENT, 
							address varchar(255),
							city varchar(255),
							state varchar(255),
							zipcode varchar(255),
							type varchar(255),
							personID int(11),
							PRIMARY KEY (addrID),
							FOREIGN KEY (PersonID) REFERENCES Users(personID)
							);";

                $query .= "CREATE TABLE AddressTB2(
							addrID int(11) AUTO_INCREMENT,
							address varchar(255),
							city varchar(255),
							state varchar(255),
							zipcode varchar(255),
							rent varchar(255),
							PRIMARY KEY  (addrID)

							)";

                //$res = mysqli_query($conn, $query);

				if ($conn->multi_query($query) === TRUE) {
				    echo "New records created successfully";
				} else {
				    echo "Error: " . $sql . "<br>" . $conn->error;
				}
}
?>

