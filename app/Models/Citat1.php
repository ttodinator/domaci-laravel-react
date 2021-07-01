<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Citat1 extends Model
{
    use HasFactory;

    public function pisac(){
        return $this->hasOne(Pisac::class);
    }

}
