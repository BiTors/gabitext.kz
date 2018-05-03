@extends('layouts.head')
@section('content')
 @if($article)
	<section class="main clearfix">
	   <div class="body" style="margin: 30px; padding:20px;>
                 <div class="col-sm-4 wow fadeIn" data-wow-delay="0.4s">
                
				    <h1 style="text-align: center;">{{ $article ->title}}</h1>
           
				    <p>{!!$article->body!!} </p>

			    </div>
           
  </div>
	</section><!-- end main -->
	 @endif
 

@endsection('content')