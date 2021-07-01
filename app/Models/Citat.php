<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Citat extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $guarded=[];

    public function pisac(){
        return $this->belongsTo(Pisac::class);
    }


}
