<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

class ProductsTableSeeder extends Seeder
{
    public $imagePath = [
        '/storage/products/images/1.jpg',
        '/storage/products/images/2.jpg',
        '/storage/products/images/3.jpg',
        '/storage/products/images/4.jpg',
        '/storage/products/images/5.jpg',
        '/storage/products/images/6.jpg',
        '/storage/products/images/7.jpg',
        '/storage/products/images/8.jpg',
        '/storage/products/images/9.jpg',
        '/storage/products/images/10.jpg',
        '/storage/products/images/11.jpg',
        '/storage/products/images/12.jpg',
        '/storage/products/images/13.png',
        '/storage/products/images/14.jpg',
        '/storage/products/images/15.jpg',
        '/storage/products/images/16.jpg',
    ];

    public $discount = [5,6,7,8,9,10];
    public $price = [2500,3500,4000,17000,1600,1000,800,2300,1500,15000];
    public $quantity = [2,5,12,24,8,10,11,3,4,7];
    public $productCategory = [
        'Mobile accessories',
        'Consumer electronics',
        'Clothing',
        'Shoes and bags',
        'Computers accessories',
        'Children Toys',
        'Books',
        'Kitchen utensils',
        'Beverages'
    ];
    public $productNames = [
        'Jipit A Ril Nit Ullum',
        'Pipit A Ril Nit Ullum',
        'Jipit A Ril Nit Ullum',
        'Pipit A Ril Nit Ullum',
        'Sipit A Ril Nit Ullum',
        'Ripit A Ril Nit Ullum',
    ];
    public $descr = [
        'Cobalt facillametum exeraestrud magnis ullum etum cipit
         volute. Atem mconse dionsenim, quis vullan, dolortio
        Iriustrud modiat vercincinis minit hendrem facipis.
         ',
        'Cobalt facillametum exeraestrud magnis ullum etum cipit
         volute. Atem mconse dionsenim, quis vullan, dolortio
        Iriustrud modiat vercincinis minit hendrem facipis.
         ',
        'Cobalt facillametum exeraestrud magnis ullum etum cipit
         volute. Atem mconse dionsenim, quis vullan, dolortio
        Iriustrud modiat vercincinis minit hendrem facipis.
         ',
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //factory(\App\Product::class,50)->create();

        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/1.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/2.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/3.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/4.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/5.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/6.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/7.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/8.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/9.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/10.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/11.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/12.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/13.png',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/14.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/15.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
        DB::table('products')->insert([
            'product_img'=>'/storage/products/images/16.jpg',
            'product_name'=>Arr::random($this->productNames),
            'product_description'=>Arr::random($this->descr),
            'product_category'=>Arr::random($this->productCategory),
            'quantity_available'=>Arr::random($this->quantity),
            'product_price'=>Arr::random($this->price),
            'product_discount'=>Arr::random($this->discount),
        ]);
    }
}
