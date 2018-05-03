<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class IndexController extends Controller
{
    protected $mass;
 public function __construct()
 {
     $this->mass = 'Hel';
 }

    public function index()
    {
        $articles =  post::select(['id','title','excerpt','image','slug'])->get();

        return view('page')->with(['mass'=>$this->mass,
        'articles'=>$articles,

        ]);
    }



    public function show($slug)
    {
        $article = post::select(['id','title','slug','body','image'])->where('slug',$slug)->first();
        return view('article-content')->with(['mass'=>$this->mass,
        'article'=>$article,


        ]);;


    }

}
