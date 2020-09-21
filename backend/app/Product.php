<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'product_img',
        'product_name',
        'product_description',
        'product_category',
        'quantity_available',
        'product_price',
        'product_discount'
    ];
}
