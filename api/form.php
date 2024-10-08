<?php

$name=$_POST['userName'];
$email=$_POST['email'];
$inquiry=$_POST['inquiry'];

date_default_timezone_set("America/Vancouver");
$date=date("Y/m/d/H/i/s");

function db_open(){
    
    $user=$_ENV['USER'];
    $password=$_ENV['PASSWORD'];
    $opt=[
        PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES=>false,
        PDO::MYSQL_ATTR_MULTI_STATEMENTS=>false,
    ];
    $dbh=new PDO($_ENV['URL'], $user,$password,$opt);
    return $dbh;
};

try{
    $dbh=db_open();
    $sql='insert into Form (id, name, email, inquiry, date) values (null, :name, :email, :inquiry, :date)';
    $stmt2=$dbh->prepare($sql);
    
    $stmt2->bindParam(':name', $name, PDO::PARAM_STR);
    $stmt2->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt2->bindParam(':inquiry', $inquiry, PDO::PARAM_STR);
    $stmt2->bindParam(':date', $date, PDO::PARAM_STR);
    
    $stmt2->execute();

    echo '<script>location.href="https://portfolio-daisuke.vercel.app?inquiry"</script>';
    
}catch(PDOException $e){
    echo 'Error: '.$e;
    exit;
};

?>