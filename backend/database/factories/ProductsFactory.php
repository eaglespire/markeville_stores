<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Storage;

function product_img($dir)
{
    $files = glob($dir . '/*.*');
    $file = array_rand($files);
    return $files[$file];
}

$factory->define(Product::class, function (Faker $faker) {
    return [
        'product_img'=>array_rand(Storage::files('storage/products/images')),
        'product_name'=>$faker->name,
        'product_description'=>$faker->paragraph,
        'product_category'=>$faker->name,
        'quantity_available'=>$faker->numberBetween(0,20)
    ];
});
