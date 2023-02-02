<?php

abstract class Phone {  
 public $Model;
 public $Serie;
 
  public function Presentation(){
    return 'is Phone ';
 }
}
 interface IGestionPhone   {
    
     public function Ajouter($data);
     public function Supprimer($data);
}
 class GestionPhone implements IGestionPhone  {
    public $compteur = 0;
     public function Ajouter($data)
    {
        $this->compteur++;
    }
     public function Supprimer($data){
        $this->compteur--;
     }
}
class Iphone extends Phone {
    public function Presentation(){
      return 'is Iphone';

    }  
    
}
class Samsung extends Phone {
    public function Presentation(){
        return 'is Samsung';
      }    
}

// programme test
$Iphone = new Iphone();
$Samsung= new Samsung;
$Samsung->Model= 'A';
$Samsung->Serie= '128 GB 2022';

$gestion = new GestionPhone;

$gestion->Ajouter($Iphone);
$gestion->Ajouter($Samsung);
$gestion->Ajouter($Samsung);

echo $gestion->compteur ."<br>";//echo :
$gestion2 = new GestionPhone;
$gestion2->Ajouter($Iphone);
$gestion2->Ajouter($Samsung);

echo $gestion2->compteur."<br>";//output : 
echo $Iphone->Presentation() ."<br>" ;// is Iphone
echo $Samsung->Presentation();// is stagiare
?>