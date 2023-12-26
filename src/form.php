<?php

$name=$_POST['userName'];
$email=$_POST['email'];
$inquiry=$_POST['inquiry'];


function db_open(){
    $user='id21668771_phpuser';
    $password='Nira_1226';
    $opt=[
        PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES=>false,
        PDO::MYSQL_ATTR_MULTI_STATEMENTS=>false,
    ];
    $dbh=new PDO('mysql:host=localhost;dbname=id21668771_forform',$user,$password,$opt);
    return $dbh;
    }



    try{
        $dbh=db_open();
    
    
        $sql='insert into Form (id, name, email, inquiry) values (null, :name, :email, :inquiry)';
        $stmt2=$dbh->prepare($sql);
        //var_dump($stmt);
        
        $stmt2->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt2->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt2->bindParam(':inquiry', $inquiry, PDO::PARAM_STR);
        
        $stmt2->execute();

        // echo '<script>alert("Inquiry has been successfully sent.")</script>';
        echo '<script>location.href="https://portfolio2023dec13.000webhostapp.com/index.html?inquiry"</script>';
        
        
        
    }catch(PDOException $e){
        echo 'Error: ';
        exit;
    }

?>