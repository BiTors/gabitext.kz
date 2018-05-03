
<!DOCTYPE html>
<html lang="ru">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Ora theme tempalte">
    <meta name="author" content="NDT">
    <meta name="keywords" content="Ora theme template">

  

<link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<link href="assets/css/style.css" rel="stylesheet" type="text/css"/>
<link href="assets/css/jquery-ui.min.css" rel="stylesheet" media="screen,projection" type="text/css" />
<link href="assets/css/slider.min.css" rel="stylesheet" media="screen,projection" type="text/css" />
    

    <!-- Title Page-->
    <title>Контент агенство GABITEXT.KZ</title>

	<!-- Fontfaces CSS-->
	<link rel="stylesheet" media="all" href="{{asset('css/font-face.css')}}">
	<link rel="stylesheet" media="all" href="{{asset('vendor/font-awesome/css/font-awesome.min.css')}}"> 
	<link rel="stylesheet" media="all" href="{{asset('vendor/linearicons-free/css/linearicons-free.css')}}">
	<link rel="stylesheet" media="all" href="{{asset('vendor/elegant-icons/css/elegant-icons.css')}}">

   

	<!-- Bootstrap CSS-->
	<link rel="stylesheet" media="all" href="{{asset('vendor/bootstrap/bootstrap.min.css')}}">

	<!-- Vendor CSS-->
	<link rel="stylesheet" media="all" href="{{asset('vendor/animate.css/animate.min.css')}}">
	<link rel="stylesheet" media="all" href="{{asset('vendor/css-hamburgers/hamburgers.min.css')}}">
	<link rel="stylesheet" media="all" href="{{asset('vendor/slick/slick.css')}}">
	<link rel="stylesheet" media="all" href="{{asset('vendor/animsition/animsition.min.css')}}">
	<script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>

	<!-- AOS CSS-->
	<link rel="stylesheet" media="all" href="{{asset('css/aos.css')}}">
	<script src="{{asset('js/aos.js')}}"></script>
	<script src="{{asset('js/typed.min.js')}}"></script>
	<script src="{{asset('assets/js/demos.js')}}"></script>
    
	<!-- AOS JS-->
	<link rel="stylesheet" media="all" href="{{asset('css/aos.css')}}">
	<link rel="stylesheet" media="all" href="{{asset('css/price.css')}}">

	<!-- Main CSS-->
	<link rel="stylesheet" media="all" href="{{asset('css/theme.css')}}">

	

    <!--Favicons-->
    <link rel="shortcut icon" href="favicon.png">
    <link rel="apple-touch-icon" href="apple-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png">
</head>

<body class="animsition page-wrapper">


    <!-- header-->
    <header class="header header-primary header-fixed js-header-bar d-md-block d-none">
        <div class=" container-fluid">
            <div class="section-inner header-bar">
                <div class="header-bar-logo">
                    <a href="/">
							<img src="/storage/{{(setting('site.logo'))}}" alt="GabiText">
                    </a>
                </div>
                <div class="header-bar-menu">
                    <nav class="navbar-primary">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#intro">Главная</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Услуги</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#resume">О нас</a>
                            </li>
                        
                            <li class="nav-item">
                                <a class="nav-link" href="#blog">Блог</a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <header class="memenu header header-mobile js-header-bar-mobile d-md-none">
            <div class="container-fluid">
        <div class="header-bar">
       
            <div class="header-bar-logo">
                <a href="/">
                    <img src="/storage/{{(setting('site.logo'))}}" alt="GabiText">
				</a>
            </div>
            <div class="header-bar-menu">
                <button class="navbar-toggler hamburger" type="button" id="js-header-toggle">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <nav class="navbar-mobile navbar-primary">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#intro">ABOUT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#services">УСЛУГИ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#resume">RESUME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#projects">WORKS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#blog">BLOG</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#testimonials">TESTIMONIALS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">CONTACT</a>
                </li>
            </ul>
        </nav>
    </header>
    <!-- end header-->
@yield('content')

<script>
AOS.init({
	duration: 1200,
  })
</script>
<script src="assets/js/jquery-1.11.0.min.js" type="text/javascript"></script>
<script src="assets/js/jquery-ui.min.js" type="text/javascript"></script>
<script src="assets/js/qs.slider.js" type="text/javascript"></script>
{{--  <script src="assets/js/ads.js" type="text/javascript"></script>  --}}
<script src="assets/js/qs.slider.init.js" type="text/javascript"></script>
<script src="assets/js/touch.js" type="text/javascript"></script>
<script src="assets/js/jquery.maskedinput.min.js" type="text/javascript"></script>


</body>
</html>



