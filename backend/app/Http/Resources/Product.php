<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Product as ProductModel;
class Product extends JsonResource
{
    /*
     * This method computes the discounts and
     * thus the amount to be paid
     */
    public function discountedPrice()
    {
        //public $product = ProductModel::all();
        return $this->product_price - (($this->product_discount * $this->product_price)/100);
    }
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'product_img'=>$this->product_img,
            'product_name'=>$this->product_name,
            'product_description'=>$this->product_description,
            'product_category'=>$this->product_category,
            'quantity_available'=>$this->quantity_available,
            'product_price'=>$this->product_price,
            'product_discount'=>$this->product_discount,
            'initial_qty'=>$this->initial_qty,
            'authorName'=>'Ohwofasa Andrew',
            'discountedPrice'=>$this->discountedPrice()

        ];
    }
}
