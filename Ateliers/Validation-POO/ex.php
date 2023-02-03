<?php

abstract class Phone{

    public $id;
    public $name;

    public function presentation(){
        return 'is phone';
    }
    
}

interface IGestionPhones {

    public function Ajoute($data);
    public function delete($data);

}

class IGestion implements IGestionPhones{

    public $compteur = 0;
    public function Ajoute($data)
    {
        $this->compteur++;
    }
    public function delete($data)
    {
        $this->compteur--;
    }
}

class Iphone extends phone{

    public function presentation()
    {
        return 'is IPhone';
    }
}

class Samsung extends phone{
    public function presentation()
    {
        return 'is Samsung';
    }
}






?>