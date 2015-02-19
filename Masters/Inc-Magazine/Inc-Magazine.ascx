<%@ Control Language="C#" Inherits="LiveBallPage" EnableViewState="false" %>
<!DOCTYPE html> 
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" runat="server">
<head id="page_title" runat="server">
	<!-- code injection 1 --><!-- end code injection 1 -->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="" id="page_description">
    <meta name="keywords" content="" id="page_keywords">
	<title></title>
	<!--    FRAMEWORK:    Insperity    -->
	<!--    PAGE:         Home Page     -->
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,300,300italic,500,400italic,500italic,700italic,700,900,900italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,100,700' rel='stylesheet' type='text/css'> 
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="../common.css" rel="stylesheet" type="text/css"> 
    <link href="../commonResponsive.css" rel="stylesheet" type="text/css">
	<!--[if lt IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
 	<link href="../ie.css" rel="stylesheet" type="text/css">
	<![endif]-->
    <!-- code injection 2 --><!-- end code injection 2 -->  
</head>

<body id="page_body" friendlyname="Body" runat="server">
	<div class="container">
        <header class="header" role="banner">
            <div id="header_pretitle1" class="pretitle" runat="server"></div>
            <div id="header_title1" class="title" runat="server"></div>
        </header> 
        <!-- end header -->
        <div class="page">
            <article class="main" role="main">
                <div class="left-side">
                	<div id="title1" class="title" runat="server"></div>
					<div id="text1" class="text" runat="server"></div>
                    <div class="link">
                    	<div id="link1" runat="server"></div>
                    </div>
                    <div class="contact">
                    	<div class="img-holder"><img src="/Templates/ion/Inc-Magazine/Masters/inc-lp-phone.svg" width="49" height="64"></div>
                        <div id="title2" class="subtitle" runat="server"></div>
                        <div id="text2" class="text" runat="server"></div>
                        <div id="phone2" class="phone" runat="server"></div>
                    </div>
                </div>
                <!-- end left-side -->
                <div class="right-side">
                    <div class="form">
                        <div id="title3" class="title" runat="server"></div>
                        <form id="FormSocket" runat="server" friendlyname="Form" data-liveball="placeholder-width:280;placeholder-height:40"></form>
                        <div id="form_text1" class="text" runat="server"></div>
                    </div>
                    <!-- end form -->
                </div>
                <!-- end right-side -->
                <div class="clearfix"></div>
                <section class="videos">
                	<div id="title4" class="title" runat="server"></div>
					<img src="/Templates/ion/Inc-Magazine/Masters/arrow.png" class="arrow">
                    <div class="row">
                    	<div class="video">
                        	<div id="video1" runat="server"></div>
                            <div id="video_text1" class="text" runat="server"></div>
                            <div id="video_speaker1" class="speaker" runat="server"></div>
                            <div id="video_company1" class="company" runat="server"></div>
                        </div>
                        <div class="video mid">
                        	<div id="video2" runat="server"></div>
                            <div id="video_text2" class="text" runat="server"></div>
                            <div id="video_speaker2" class="speaker" runat="server"></div>
                            <div id="video_company2" class="company" runat="server"></div>
                        </div>
                        <div class="video">
                        	<div id="video3" runat="server"></div>
                            <div id="video_text3" class="text" runat="server"></div>
                            <div id="video_speaker3" class="speaker" runat="server"></div>
                            <div id="video_company3" class="company" runat="server"></div>
                        </div>
                        <div class="clearfix"></div>
                    </div>	
                </section>
                <!-- end videos -->
            </article>
        </div>
        <!-- end page -->
	</div>
	<!-- end container -->
    <div class="container" style="padding: 0;">
    	<img src="/Templates/ion/Inc-Magazine/Masters/bracket.png" style="display:block;">
   	</div>
    <footer role="contentinfo" id="footer" friendlyname="footer">
    	<div class="container" style="padding: 0;">
        <p>Copyright &copy; <span id="year"></span> Insperity. All Rights Reserved.<br><br>
        The Compass logo, Insperity, Inspiring Business Performance, Workforce Optimization are trademarks of Insperity, Inc. Descriptions Now Online, Performance Now Online, Policies Now Online, Insperity TimeStar, Insperity Reveal and Insperity OrgPlus are trademarks of Insperity Business Services, L.P. PerformSmart, Descriptions Now, Performance Now, Policies Now and Ultimate Employer are registered trademarks of Insperity Business Services, L.P. Workforce Optimization and MidMarket Solutions are trademarks of Insperity, Inc. Insperity ExpensAble is a registered trademark of Insperity Expense Management, Inc. Insperity, Inc. and its affiliated companies may also have trademark rights in other terms used herein.</p>
        </div>
    </footer>
    <div class="overlay">
    	<div class="wrap">
        	<div id="close" class="close video-close" runat="server" onclick="stopInterval()"></div>
            <div id="close1" class="close form-close"></div>
            <div class="loader"></div>
        </div>
    </div>
    <div id="clock"></div>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="/Templates/ion/Inc-Magazine/Themes/insperity/jquery-cookie.js"></script>
    <script src="/Templates/ion/Inc-Magazine/Themes/insperity/svgmagic.js"></script>
    <script src="/Templates/ion/Inc-Magazine/Themes/insperity/scripts.js"></script>
	<script>
    $(document).ready(function(){
       $('img').svgmagic();
    });
    </script>
        
</body>
</html>