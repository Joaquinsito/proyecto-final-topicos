<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category_id',
        'description',
        'price',
        'stock',
    ];

    public function compraUser(){
        return $this->hasMany(CompraUser::class);
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }

    
}
