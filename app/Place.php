<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    public function datas(){
        return $this->hasMany(Data::class);
    }
}
