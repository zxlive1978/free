<?php
//session_start();
if (!$_SESSION['auth']) {
	header("Location: index.html");
	exit;
}
?>
<html>
<title></title>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="UTF-8">

<link rel="stylesheet" type="text/css" href="css/jschart5.css">
<link rel="stylesheet" href="css/iziModal.min.css">

<!-- Bootstrap -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<!-- Jquery -->
<link rel="stylesheet" href="css/jquery-ui.min.css">
<!-- <link rel="stylesheet" href="css/style.css"> -->
<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>


    
  <script>
  //JQUERY tabЫ
  $( function() {
    $( "#tabs" ).tabs();
    $('#tabs').hide();
  } );
  $('#tabs').hide();
  </script>
  <script>
//Окно видео
  $( function() {
    $( "#dialogvideo" ).dialog(
      {
        position: { my: "right  top", at: "right center", of:"#drawing" },
        width: 170,
        height: 140,
        //appendTo: "fullscreen",
        //modal: true
      }
    );
  } );
  </script>



<!-- Bootstrap --> 
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>


<script type="text/javascript" src="js/svg.min.js"></script>
<script type="text/javascript" src="js/svg.draggable.min.js"></script>

<script type="text/javascript" src="js/loadsave.js"></script>
<script type="text/javascript" src="js/writeskvs.js"></script>
<script type="text/javascript" src="js/settings.js"></script>

<script type="text/javascript" src="js/pong.js"></script>
<script type="text/javascript" src="js/sutki.js"></script>
<script type="text/javascript" src="js/read_comment.js"></script>




</head>
<body>

<!-- Brand -->
<!-- 	<a class="navbar-brand align-middle" href="#">
    <img src="css/logo.svg" width="60" height="30" class="d-inline-block align-middle" alt="">
    ПФ "Астраханьгазгеофизика"
  </a> -->
<!-- Bootstrap -->


<!-- Navbar -->

  <!-- <div align="center"">
					<svg  xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 200 100"  preserveAspectRatio='meet' fill="#EEF" display="block">
                            <path fill-rule="evenodd"
                                  d="M45.71 2.527c-1.433 2.216-3.817 6.623-4.591 8.492l-.545 1.304a49.82 49.82 0 0 0-1.786 5.172l-.204.732a69.143 69.143 0 0 0-.782 3.396l-.17.94c-.393 2.176-.519 3.186-.832 6.693-.33 3.696.093 9.464 1.011 13.788.335 1.58.454 2.087.662 2.821.057.201.2.72.319 1.152.491 1.786 1.766 5.447 2.364 6.79 1.495 3.354 4.824 9.091 5.276 9.091.178 0 .361-.23 1.18-1.476 2.65-4.035 5.007-9.24 6.423-14.184.538-1.884.482-1.655 1.054-4.246.086-.392.173-.871.42-2.325.76-4.48.88-9.877.317-14.218-.228-1.752-.72-4.596-1.053-6.08a85.25 85.25 0 0 1-.218-.993c-.051-.244-.104-.487-.157-.731-.317-1.44-1.642-5.393-2.294-6.845-.117-.26-.232-.521-.346-.783-.65-1.509-1.814-3.813-2.68-5.303l-.453-.784c-.424-.733-.566-.964-1.34-2.167-.926-1.442-.806-1.424-1.575-.236m2.14 6.506c.7 1.378 1.383 2.765 1.518 3.081 1.371 3.209 2.486 6.47 3.02 8.83l.165.731c.413 1.824.785 4.242 1.062 6.897.182 1.742.246 6.731.11 8.411-.212 2.599-.496 4.911-.648 5.277-.049.12-.092.242-.13.366-.024.086-.075-.948-.115-2.299-.08-2.735-.202-4.132-.609-6.949-.159-1.1-.459-2.733-.624-3.396-.073-.295-.144-.591-.215-.888-.238-1.009-1.535-5.183-1.784-5.747a9.435 9.435 0 0 1-.22-.575 16.51 16.51 0 0 0-.222-.6l-.19-.47c-.053-.13-.156-.4-.23-.602-.602-1.628-2.146-4.702-2.362-4.702-.118 0-1.966 3.612-1.966 3.842 0 .05-.095.284-.211.522-.116.238-.211.483-.211.544a.819.819 0 0 1-.097.292c-.24.453-1.651 4.616-2.01 5.929l-.197.731-.223.836c-.424 1.587-.843 3.913-1.062 5.904-.287 2.607-.34 3.357-.402 5.643-.08 2.957-.177 2.734-.655-1.496-.371-3.291-.376-8.985-.008-11.552.055-.382.151-1.07.214-1.529.225-1.636.906-5.038 1.265-6.322.388-1.382 1.574-4.843 1.944-5.673.083-.184.306-.735.498-1.224.19-.488.481-1.183.646-1.544.164-.36.299-.683.299-.717 0-.292 2.066-4.117 2.21-4.09.102.02.669 1.017 1.441 2.539m15.113 22.124c-.028.072-.038 7.678-.023 16.903l.027 16.771h6.555l.053-14.733.053-14.734 2.846-.028c1.911-.019 2.893-.067 2.99-.145.113-.093.136-.537.114-2.115l-.029-1.997-6.268-.027c-4.958-.02-6.278.001-6.318.105m16.19.105c-1.283 11.63-2.392 23.395-3.453 33.624l6.51-.055c.147-2.684.334-6.857.472-8.794 5.043-.1-2.769-.206 3.229-.088.219 3.09.394 6.295.6 8.934h6.433c-1.219-12.134-2.258-23.009-3.449-33.768-.03-.048-2.358-.087-5.174-.087h-5.12l-.048.235m20.24-.088c-2.892.628-3.62 2.176-3.57 7.585l.027 3.083h6.556l.028-2.974.028-2.974.283-.292c.321-.332.891-.395 1.261-.139.454.314.475.544.441 4.769l-.032 4.013-.256.44c-.439.758-.822.866-3.074.866h-1.904v3.745l1.877.035c3.498.064 3.41-.088 3.41 5.866 0 5.2-.072 5.504-1.249 5.249-.758-.165-.754-.148-.786-3.98l-.027-3.444-3.16-.027c-2.242-.02-3.201.007-3.304.09-.227.188-.207 6.873.025 7.998.312 1.518 1.096 2.728 2.064 3.184.73.344.9.4 1.513.507.948.164 7.148.134 7.961-.039 1.86-.394 2.955-1.528 3.37-3.49.216-1.02.213-10.407-.004-11.112-.512-1.67-1.582-2.503-3.417-2.664-.793-.07-1.144-.35-.438-.35 1.796 0 3.28-1.153 3.89-3.02.184-.562.157-8.545-.031-9.435-.416-1.962-1.51-3.096-3.37-3.49-.874-.186-7.26-.185-8.113 0m16.015-.017c-.028.072-.039 7.678-.023 16.902l.027 16.771 3.304.028 3.303.027.027-14.761.027-14.761h4.903l.053 14.734.053 14.733h6.556V31.079l-7.59-.026c-6.016-.022-7.6 0-7.64.104m19.56.001c-.027.072-.037 7.677-.023 16.902l.028 16.771 3.303.028 3.303.027.027-5.722.028-5.723 2.432-.064c4.095-.11 5.014-.606 5.887-3.182l.245-.724v-7.263c0-6.813-.012-7.301-.198-7.889-.597-1.883-1.677-2.875-3.458-3.175-1.038-.174-11.506-.162-11.574.014m23.16.023c-1.744.43-2.617 1.238-3.213 2.971l-.273.794-.001 12.957-.002 12.957.246.77c.907 2.835 1.84 3.246 7.367 3.246 5.391 0 6.367-.413 7.262-3.075l.246-.732V48.007c0-10.939-.025-13.146-.15-13.584-.535-1.87-1.495-2.828-3.25-3.242-.829-.196-7.438-.196-8.231 0m16.018 16.774v16.928h6.556l.002-10.476c.001-6.695.04-10.531.106-10.632 3.618 21.108 2.362 13.849 3.618 21.108h5.238c1.368-7.2 2.255-14.673 3.377-20.899.182-.867.228 1.182.235 10.528l.007 10.371h6.555V31.027h-4.282c-2.355 0-4.283.035-4.283.079-2.918 16.213-.858 4.735-4.216 23.209l-4.307-23.202c-.029-.047-1.978-.086-4.33-.086h-4.276v16.928M30.771 31.608c-4.673.501-8.205 1.526-12.213 3.542-1.857.934-5.339 3.161-5.974 3.821-.029.031-.36.313-.735.627-2.686 2.25-5.086 5.102-7.277 8.647-.376.609-1.871 3.664-2.134 4.36-.13.345-.276.721-.325.836-.117.278-.468 1.323-.684 2.038C-.599 62.2-.467 69.26 1.813 76.011c.117.346.252.722.3.837.05.114.208.514.353.888 1.72 4.437 5.346 9.487 9.115 12.696.405.344.803.688.883.763.476.443 3.26 2.382 4.073 2.837.21.117.56.315.779.44a35.9 35.9 0 0 0 3.251 1.585l1.164.484c3.234 1.36 8.305 2.303 12.385 2.303 2.82 0 7.078-.583 9.131-1.249.146-.047.479-.145.74-.217 3.008-.833 6.49-2.486 9.385-4.455 2.37-1.613 5.427-4.293 5.581-4.894.03-.115.041-5.311.025-11.547l-.029-11.337H34.101l-.027 5.049c-.03 5.544-.035 5.492.506 5.024 5.8-5.017 14.845-1.564 15.806 6.035.466 3.679-1.182 6.885-4.95 9.634-4.152 3.03-10.408 4.473-14.824 3.419l-.905-.212c-7.662-1.785-13.254-7.865-14.576-15.847-.15-.9-.148-4.34.002-5.155.53-2.894 1.526-5.626 2.623-7.203.18-.258.327-.497.327-.531 0-.077.915-1.261 1.576-2.04 3.146-3.705 8.21-6.208 13.044-6.446 1.255-.062 1.353-.082 1.403-.286.03-.12.04-5.814.024-12.654l-.029-12.435-1.004-.015c-.552-.009-1.6.048-2.326.126m54.8 20.448c-.043.081-2.39.114-2.47.036l1.251-16.761m58.687.143c.617.428.604.274.604 6.943 0 7.328.008 7.287-1.512 7.19l-.497-.032-.027-7.001c-.015-3.85-.005-7.06.023-7.132.074-.192 1.12-.168 1.409.032m19.695-.055c.543.287.523-.182.523 12.542v11.823l-.36.355c-.53.523-1.168.433-1.554-.219-.24-.408-.307-23.423-.069-23.95.267-.59.92-.836 1.46-.551m-115.802 4.1c.694 1.486 1.498 4.148 1.805 5.98.068.403.173 1.011.234 1.353.357 2 .074 6.227-.59 8.818-.51 1.985-1.65 4.818-1.94 4.822-.289.004-1.38-2.642-1.931-4.681-.22-.813-.29-1.16-.594-2.945-.208-1.224-.254-5.62-.066-6.426.067-.287.18-.828.249-1.202.446-2.382 1.93-6.482 2.343-6.477.075.001.295.342.49.758M62.94 87.271L62.967 99H200V75.594l-68.544-.026-68.543-.026.027 11.729m38.686-7.828c2.729.87 3.109 1.931 3.025 8.429-.052 4.023-.086 4.32-.608 5.331-1.498 2.908-7.58 2.815-9.019-.138-.53-1.086-.548-1.29-.548-5.925 0-4.972.01-5.046.86-6.328.866-1.306 4.207-2.034 6.29-1.37m45.084.078c1.991.736 2.907 2.12 2.907 4.398v.719l-1.93-.029-1.93-.028-.03-.904c-.042-1.276-.362-1.607-1.448-1.566-.87.007-1.006.125-1.006 5.105v4.44c.206.542.298.66 1.323.688.975-.08 1.096-.318 1.136-2.224l.026-1.254 1.945-.029 1.945-.028-.061 1.49c-.15 3.67-1.48 4.978-5.067 4.989-3.019.009-4.524-1.054-5.004-3.534-.212-1.091-.218-8.451-.007-9.317.415-1.716 1.655-2.791 3.659-3.171.714-.136 2.914.022 3.542.255m46.395.02c1.848.677 2.684 1.861 2.796 3.965l.06 1.128h-3.838v-.79c0-1.191-.427-1.719-1.39-1.718-1.163.001-1.253.357-1.253 4.952 0 4.505.067 4.893.91 5.245 1.118.468 1.733-.359 1.733-2.326v-1.188l1.877.028 1.877.028-.008 1.463c-.017 2.913-.911 4.252-3.217 4.814-.714.174-3.069.194-3.588.03-1.865-.589-2.661-1.312-3.09-2.81-.223-.779-.25-9.681-.031-10.321.814-2.381 4.23-3.574 7.162-2.5M75.603 80.974v1.463h-2.265c-1.245 0-3.554-.002-2.805.033.039 12.443.104 6.706.039 12.443 0 0-1.87-.001-3.618-.062-.06-15.105-.068-9.018-.06-15.105l.063-.235h8.646v1.463m13.955-1.298l.001 2.761-4.917-.03-.047 3.115 4.383-.002v2.821l-4.475.028c-.013 3.613-.015-.092.034 3.598 1.338.031 4.983.05 5 .063.015.011.015.667 0 1.457l-.03 1.437-8.685-.064c-.08-15.183-.041-.556-.08-15.183m36.452.04c1.969.497 2.854 1.747 2.997 4.232.194 3.352-1.577 5.071-5.222 5.071h-.985v2.853c0 2.08-.034 2.887-.127 2.978-.088.088-.662.125-1.903.125h-1.776V79.512h3.102c2.737 0 3.198.025 3.914.206m17.176-.08c.086.084.127.562.127 1.463v1.337h-2.473c-2.89 0-2.603-.171-2.6 1.55.001 1.608-.21 1.471 2.329 1.504l2.162.029v2.821l-2.182.028c-2.572.034-2.308-.18-2.31 1.87-.002 1.9-.282 1.707 2.474 1.707 1.684 0 2.382.036 2.473.126.19.187.175 2.63-.017 2.788-.104.085-1.337.111-4.362.092l-4.217-.028-.028-7.576c-.015-4.166-.004-7.634.024-7.706.071-.185 8.413-.19 8.6-.005m23.935.24c.5 2.636-.086-.313 1.47 7.263.66-2.515 1.192-5.063 1.858-7.576l1.922-.028c1.853-.028 1.923-.021 1.923.178-2.195 7.54-3.867 13.665-4.608 14.492-.66.653-1.374.875-2.812.875-2.101 0-2.223-.1-2.18-1.802l.03-1.176.708-.008c1.25-.014 1.247.008.393-2.917-.844-2.759-1.961-6.899-2.76-9.62 3.97-.124-.19-.056 2.06-.022l1.91.028.086.314m18.856-.223c2.221.475 3.228 1.909 3.224 4.592-.005 3.31-1.586 4.773-5.153 4.774h-.979v2.853c0 2.079-.034 2.886-.126 2.978-.134.132-3.29.186-3.618.062-.171-.065-.27-14.805-.103-15.237.085-.22 5.74-.24 6.755-.022m-77.99 2.504c-.925.41-.941.493-.941 4.947 0 4.064.048 4.548.495 4.963.402.373 1.296.349 1.697-.046l.293-.29.032-4.36c.038-5.007.054-4.902-.805-5.191a6.61 6.61 0 0 0-.488-.154 5.437 5.437 0 0 1-.284.13m14.894.236c-.044.043-.08.894-.08 1.89v1.811h.555c1.477 0 2.364-1.703 1.564-3-.31-.502-1.742-.994-2.04-.7m60.242.061c-.031.08-.044.92-.028 1.867l.03 1.72.595-.002c1.383-.005 2.195-1.68 1.426-2.936-.35-.57-1.865-1.056-2.023-.649"></path>
</svg></div> -->

<nav class="navbar navbar-expand-md navbar-light  py-0 navbar-fixed-top" id="bigpan">
 <!-- <a class="navbar-brand align-middle" href="#"> <img src="css/logo.svg" width="100" height="50" class="d-inline-block align-middle" alt=""></a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
     
   
	  <!-- <li>
	  <div class="dropdown">
		<button class="btn bg-light btn-lg dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		СКВАЖИНА
		</button>
		<div class="dropdown-menu" aria-labelledby="dropdownMenu2">
		 <button class="dropdown-item btn-lg" type="button" id="par0" >АГКМ406-1</button> -->
		<!-- <button class="dropdown-item btn-lg" type="button" id="par1">АГКМ73-1</button> 
		<button class="dropdown-item btn-lg" type="button" id="par0">АГКМ99-1</button>
		<button class="dropdown-item btn-lg" type="button" id="par1">АГКМ609-1</button>
		<button class="dropdown-item btn-lg" type="button" id="par2">АГКМ260-1</button>
		<button class="dropdown-item btn-lg" type="button" id="par3">АГКМ9917-1</button>
		<button class="dropdown-item btn-lg" type="button" id="par4">АГКМ629-1</button>
		<button class="dropdown-item btn-lg" type="button" id="par5">АГКМ627-1</button>
		<button class="dropdown-item btn-lg" type="button" id="par6">АГКМ934-1</button>
		<button class="dropdown-item btn-lg" type="button" id="par7">АГКМ604-1</button>
		<button class="dropdown-item btn-lg" type="button" id="par8">АГКМ106-1</button>
		<button class="dropdown-item btn-lg" type="button" id="par9">АГКМ71-1</button>
		</div>
		</div>
	  </li> -->

    
	  
	   
		<li>
    <div id="dialogvideo" name="dialogvideo" title="Камера 2">
    <iframe width="100%" height="100%"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    webkitAllowFullScreen mozallowfullscreen allowfullscreen allow="autoplay"
    title="0" byline="0" portrait="0"
    width="280" height="157"
    frameborder="0"
    <!-- allow="autoplay" -->
      src="//hydrofalll.ddns.net:5443/LiveApp/play.html?name=728732916424756293354866"> </iframe>
    
    </div>
		<div class="btn-group" role="group" aria-label="">
		<button class="btn bg-light btn-lg " type="button" id="adm" name="adm" onclick='adm()'>
    Админка</button>	
		</div>
  
    <!--</li>
    <button class="btn bg-light btn-lg " type="button" id="stop" name="stop" onclick='stopCam()'>
    STOP поток</button>
    <button class="btn bg-light btn-lg " type="button" id="start" >

    
		START поток</button>
    <li>

    </li> -->


		<!-- <li>
		<button type="button" class="btnbg-light bg-light btn-lg" data-toggle="modal" data-target="#videoModal" data-theVideo="">В окне</button>
		<div class="modal fade bd-example-modal-lg" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModal" aria-hidden="true">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-body">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<div>
							<iframe width="100%" height="800px" src="https://hydrofalll.ddns.net:5080/WebRTCApp/play.html?name=983687349095562644239572"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
		</li> -->
		
    </ul>
	
  </div>
  
  <div class="media-left" title="">
  <a class="navbar-brand" href="#">
    <img src="css/img_avatar1.png" class="rounded-circle" style="width:50px">
    <?php echo ' '.$_SESSION['login']; ?>
  </a>
  </div>
  
  <div class="btn-group" aria-hidden="true" role="group" aria-label="Basic example" onClick='location.href="index.html"'>
			<button type="button" class="btnbg-light bg-light btn-md">ВЫХОД</button>
			</div>
</nav>


<!-- MAIN -->
<main class="main">
  <div class="container-fluid">

 <!-- The Modal шаблон-->
  <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Список шаблонов</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          <h3>Выберите шаблон</h3>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
<!-- Табы -->
<div id="tabs">
  <ul>
    <li><a href="#tabs-1">Пользователи</a></li>
    <li><a href="#tabs-2">Скважины</a></li>
    <li><a href="#tabs-3">Камеры</a></li>
  </ul>
  <div id="tabs-1">
  </div>
  <div id="tabs-2">
  </div>
  <div id="tabs-3">
  </div>
</div>


<div id="drawing"  ></div>
<script type="text/javascript">
function getStart() {
      //alert('ok');
	  pongpong();
	 /*  $("#wells").iziModal();
	  //$("#modal").iziModal();
	  $("#kalendar").iziModal();
	  $("#lupa").iziModal();
	  $("#lupa").iziModal();
	  $("#addgraf").iziModal();
	  $("#nastrstolb").iziModal();
	  $("#nastrgraf").iziModal();
	  $("#nastrtxtpar").iziModal();
	  $("#nastrtxtlabel").iziModal();
	  $("#openfile").iziModal();
	  $("#savefile").iziModal(); */
	  
	  
}
window.onload = getStart;
window.onresize = function(event) {
    repaint();
    //console.log('ресайз');
};
</script>


<div class="modal fade" id="myModal1">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Настройки формы</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          <table>

  <tr>  
 
  <tr>
  <td><label for="hcolcolor">Цвет линий:</label></td><td><input type="color" id="syscolor" name="syscolor" value="#e66465"/>
  </tr>
   <tr>
  <label for="hcolcolor">Толщина линий оформления:</label><input type="text"  class="form-control input-lg"  id="width_line_p" name="width_line_p" value="0"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Толщина линий графиков:</label></td><td><input type="text" id="width_gxf_line" name="width_gxf_line" value="0"/>
  </tr>
  <tr>
  <tr>
  <td><label for="hcolcolor">Шрифт:</label></td><td><select id="font" name="font" value="3">
  <option value="1">3 часа</option>
  </select>
  </tr>
  <tr>
  <td><label for="hcolcolor">Коэфф. размера шрифта:</label></td><td><input type="text" id="K_size_txt" name="K_size_txt" value="0"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Коэфф. размера шрифта(моб):</label></td><td><input type="text" id="K_size_txt_mobile" name="K_size_txt_mobile" value="0"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Радиус круга полож. столбца:</label></td><td><input type="text" id="markheight" name="markheight" value="0"/>
  </tr>
   <tr>
  <td><label for="hcolcolor">Цвет круга полож. столбца:</label></td><td><input type="color" id="markcol" name="markcol" value="#e66465"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Цвет ключевого столбца:</label></td><td><input type="color" id="marktime" name="marktime" value="#e66465"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Размер шрифта комментариев:</label></td><td><input type="text" id="cmtsize" name="cmtsize" value="0"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Цвет комментариев:</label></td><td><input type="color" id="cmtcolor" name="cmtcolor" value="#e66465"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Высота панели инструментов:</label></td><td><input type="text" id="icosize" name="icosize" value="0"/>
  </tr>
   <tr>
  <td><label for="hcolcolor">Высота панели инструментов (моб):</label></td><td><input type="text" id="icosizem" name="icosizem" value="0"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Цвет 1 панели инструментов:</label></td><td><input type="color" id="grcol1" name="grcol1" value="#e66465"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Цвет 2 панели инструментов:</label></td><td><input type="color" id="grcol2" name="grcol2" value="#e66465"/>
  </tr>	
  <tr>
  <td><label for="hcolcolor">Пунктирная линия:</label></td><td><input type="text" id="dasharray" name="dasharray" value="0"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Цвет пунктирной линии:</label></td><td><input type="color" id="dashcol1" name="dashcol1" value="#e66465"/>
  </tr>	
  <tr>
  <td><label for="hcolcolor">Цвет области пропуска значений:</label></td><td><input type="color" id="holcol" name="holcol" value="#e66465"/>
  </tr>
   <tr>
  <td><label for="hcolcolor">Прозрачность обл. пропуска значений:</label></td><td><input type="text" id="holhide" name="holhide" value="0"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Ширина области текущ. значений:</label></td><td><input type="text" id="width_value" name="width_value" value="0"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Высота области текущ. значений:</label></td><td><input type="text" id="height_value" name="height_value" value="0"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Цвет области текущ. значений:</label></td><td><input type="color" id="curcolorval" name="curcolorval" value="#e66465"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Прозрачность области текущ. значений:</label></td><td><input type="text" id="faderr" name="faderr" value="0"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Кнопка "Удалить":</label></td><td><input type="color" id="delcol" name="delcol" value="#e66465"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Кнопка "Настройки":</label></td><td><input type="color" id="toolcol" name="toolcol" value="#e66465"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Кнопка "Добавить":</label></td><td><input type="color" id="pluscol" name="pluscol" value="#e66465"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Кнопка "Замок":</label></td><td><input type="color" id="rawsvg0" name="rawsvg0" value="#e66465"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Редактирование экрана:</label></td><td><input type="checkbox" id="editscrn" name="editscrn"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Кнопка "Скважина":</label></td><td><input type="color" id="rawsvg1" name="rawsvg1" value="#e66465"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Кнопка "Календарь":</label></td><td><input type="color" id="rawsvg2" name="rawsvg2" value="#e66465"/>
  </tr>
   <tr>
  <td><label for="hcolcolor">Кнопка "Лупа":</label></td><td><input type="color" id="rawsvg3" name="rawsvg3" value="#e66465"/>
  </tr>
   <tr>
  <td><label for="hcolcolor">Кнопка "Форма":</label></td><td><input type="color" id="rawsvg4" name="rawsvg4" value="#e66465"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Фон кнопок (белый/ черный):</label></td><td><input type="checkbox" id="fonbut" name="fonbut"/>
</table>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK5()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>



<div class="modal fade" id="myModal2">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Выбор даты</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<table>
  <tr><td>Выбор даты(<10 дней)</td></tr>
  <tr>
  <td> <input type='date' id='localdate1' name='date1' max=<?php echo date('Y-m-d');?> min=<?php $date = new DateTime(); $date->modify('-9 day'); echo $date->format('Y-m-d'); ?>>
  </td> 
  </tr>
</div>
</table>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK3()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>

<div class="modal fade" id="myModal3">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Ширина интервала</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<table>
	<tr><td>Ширина интервала</tr></td>
  <tr><td>
  <select id="zooom1" name="zooom1" value="3">

  <option value="3">3 часа</option>
   <option value="1">1 час</option>
  <option value="8">8 часов</option>
  <option value="24">1 день</option>
 </select>
  </tr>
</tr>
</div>
</table>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK4()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>


<div class="modal fade" id="myModal4">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Выбор скважины</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<table>
  <tr>
  <td><label for="hcolcolor">Название скважины:</label></td><td><select name="wellN" id="wellN"  size="1" >
  </tr>
  <tr>
  <td><label for="hcolcolor">Тип работ:</label></td><td><label for="namePar" name="wellNwork1" id="wellNwork1"></label>
  </tr>
  <tr>
  <td><label for="hcolcolor">Тип станции:</label></td><td><label for="namePar" name="wellNwork2" id="wellNwork2"></label>
  </tr>
  <tr>
  <td><label for="hcolcolor">Нач. партии:</label></td><td><label for="namePar" name="wellNwork3" id="wellNwork3"></label>
  </tr>
  <tr>
  <td><label for="hcolcolor">Телефон:</label></td><td><label for="namePar" name="wellNwork4" id="wellNwork4"></label>
  </tr>
  <tr>
  <td><label for="hcolcolor">E-mail:</label></td><td><label for="namePar" name="wellNwork5" id="wellNwork5"></label>
  </tr>
</div>
</table>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK10()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>

<div class="modal fade" id="myModal5">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Добавить параметр</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<table>
    <div>
  <tr>
  <tr>
  <td><label for="hcolcolor">Тип параметра:</label></td><td><select name="colitems7" id="colitems7"  size="1">
  </tr>
  
  <tr>
  <td><label for="hcolcolor" name="colitems22" id="colitems22">Параметр:</label></td><td><select name="colitems2" id="colitems2"  size="1" >
  </tr>
</tr>
</div>
</table>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK2()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>


<div class="modal fade" id="myModal6">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Настройки колонки</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<table>
 <tr>
  <td><label for="hcolcolor">Область легенд:</label></td><td><input type="color" id="colcolor1" name="colcolor1" value="#e66465"/>
  </tr>
  <tr>
  <td><label for="hcolcolor">Область графиков:</label></td><td><input type="color" id="colcolor2" name="colcolor2" value="#e66465"/>
  </tr>
 <!--   <tr>
  <td><label for="hcolcolor">Тип сетки:</label></td><td><select name="gridtype" id="gridtype"  size="1" style="height: auto">
  </tr> -->
  <tr>
  <td><label for="hcolcolor">Шаг сетки:</label></td><td><input type="text" id="gridnum" name="gridnum" value="0"/>
</tr>
</div>
</table>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>


<div class="modal fade" id="myModal7">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Настройки параметра</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<table>
<td><label for="name">Параметр:  </label></td>
  <td><label for="namePar" name="namePar" id="namePar"></label></td>
  </tr>
        <tr>
            <td><label for="name">Начало:</label></td>
            <td><input type="text" name="begedge" id="begedge" value="0">
        </td>
        <tr>
            <td><label for="address">Конец:</label></td>
            <td><input type="text" name="endedge" id="endedge" value="0">
        </td>
  </tr>
  <tr>
            <td><label for="ncolor">Цвет:</label></td>
            <td><input type="color" id="parcolor" name="parcolor" value="#e66465"/>
        </td>
  </tr>

  <tr>
            <td><label for="ncolor">Логариф. шкала:</label></td>
            <td><input type="checkbox" id="parlog" name="parlog" value="#e66465"/>
        </td>
  </tr>
  <tr>
            <td><label for="ncolor">Единицы измерения:</label></td>
            <td><input type="text" name="nameUnit" id="nameUnit" value="0">
        </td>
  </tr>
  <tr>
            <td><input type="checkbox" id="pardel" name="pardel"/> <label for="ncolor">Удалить?</label></td>
  </tr>
</div>
</table>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='parOK()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>

<div class="modal fade" id="myModal8">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Настройки параметра</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<table>
    <div>
	<tr>
  <td><label for="name">Параметр:  </label></td>
  <td><label for="namePar1" name="namePar1" id="namePar1"></label></td>

  <tr>
            <td><label for="name">Позиция (0..1):</label></td>
            <td><input type="text" name="txt7" id="txt7" ></input>
  </td>
  <tr>
            <td><label for="ncolor">Цвет:</label></td>
            <td><input type="color" id="parcolor7" name="parcolor7" value="#e66465"/>
        </td>
  </tr>
  <tr>
            <td><input type="checkbox" id="pardel7" name="pardel7"/> <label for="ncolor">Удалить?</label></td>
  </tr>
</tr>
	</div>
</table>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK7()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>


<div class="modal fade" id="myModal9">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Настройки параметра</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<table>
    <div>
	<tr>
  <td><label for="name">Параметр:  </label></td>
  <td><label for="namePar2" name="namePar2" id="namePar2"></label></td>
  <tr>
            <td><label for="ncolor">Цвет:</label></td>
            <td><input type="color" id="parcolor6" name="parcolor6" value="#e66465"/>
        </td>
  </tr>
  <tr>
            <td><input type="checkbox" id="pardel6" name="pardel6"/> <label for="ncolor">Удалить?</label></td>
  </tr>
</tr>
	</div>
</table>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK6()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>




<div class="modal fade" id="myModal10">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Загрузить/Сохранить(Создать) форму</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<table>
    
 <tr><td><label for="hcolcolor">Каталог форм:   </label></td></tr>
  <tr><td><select name="colitems9" id="colitems9"  size="5" style="height: auto; width: 300px;"></tr>
  <tr><label for="hcolcolor">Имя формы:      </label></tr>
  <tr><input type="text" id="colitems99" name="colitems99" value=""/></tr>
  
</table>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK8()'>Загрузить</button>
			<button type="button" class="btn btn-warning" data-dismiss="modal" onclick='colOK9()'>Сохранить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>
  </div>




 <!-- Добавить скважину -->
  <div class="modal fade" id="myModal12">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Добавить скважину</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<table>
  <tr>
            <td><label for="ncolor">Скважина:</label></td>
            <td><input type="text" id="colitems121" name="colitems121" value=""></td>
  </tr>
  <tr>
            <td><label for="ncolor">База:</label></td>
            <td><input type="text" id="colitems122" name="colitems122" value=""></td>
  </tr>
  <tr>
            <td><label for="ncolor">Тип работ:</label></td>
            <td><input type="text" id="colitems123" name="colitems123" value=""></td>
  </tr>
  <tr>
            <td><label for="ncolor">Тип станции:</label></td>
            <td><input type="text" id="colitems124" name="colitems124" value=""></td>
  </tr>
  <tr>
            <td><label for="ncolor">Фамилия начальника:</label></td>
            <td><input type="text" id="colitems125" name="colitems125" value=""></td>
  </tr>
  <tr>
            <td><label for="ncolor">Телефон:</label></td>
            <td><input type="text" id="colitems126" name="colitems126" value=""></td>
  </tr>
  <tr>
            <td><label for="ncolor">Эл.почта:</label></td>
            <td><input type="text" id="colitems127" name="colitems127" value=""></td>
  </tr>
  

</div>
</table>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK12()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>



<!-- Редактировать, удалить скважину -->
<div class="modal fade" id="myModal13">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Редактировать/удалить скважину</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<table>
  <tr>
            <td><label for="ncolor">Скважина:</label></td>
            <td><input type="text" id="colitems131" name="colitems131" value=""></td>
  </tr>
  <tr>
            <td><label for="ncolor">База:</label></td>
            <td><input type="text" id="colitems132" name="colitems132" value=""></td>
  </tr>
  <tr>
            <td><label for="ncolor">Тип работ:</label></td>
            <td><input type="text" id="colitems133" name="colitems133" value=""></td>
  </tr>
  <tr>
            <td><label for="ncolor">Тип станции:</label></td>
            <td><input type="text" id="colitems134" name="colitems134" value=""></td>
  </tr>
  <tr>
            <td><label for="ncolor">Фамилия начальника:</label></td>
            <td><input type="text" id="colitems135" name="colitems135" value=""></td>
  </tr>
  <tr>
            <td><label for="ncolor">Телефон:</label></td>
            <td><input type="text" id="colitems136" name="colitems136" value=""></td>
  </tr>
  <tr>
            <td><label for="ncolor">Эл.почта:</label></td>
            <td><input type="text" id="colitems137" name="colitems137" value=""></td>
  </tr>
  

</div>
</table>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onclick='colOK131()'>Удалить</button>
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK13()'>Сохранить</button>
      
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>






</main>
</body>
</html>