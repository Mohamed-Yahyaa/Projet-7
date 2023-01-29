<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
  
    public function index()
    {
        //
        $fav = Favorite::all();
        return $fav;
    }



    public function store(Request $request)
    {
        //
        $fav = Favorite::create([

            'hotel_id' => $request->hotel_id,
            'name' => $request->name,
            'description' => $request->description, 
           
        ]);
        return $fav;
    }

    public function destroy($id)
    {
        //
        $fav = Favorite::findOrFail($id);
        return $fav->delete();
    }
}