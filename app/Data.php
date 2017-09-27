<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function item(){
        return $this->belongsTo(Item::class);
    }

    public function place(){
        return $this->belongsTo(Place::class);
    }
}
