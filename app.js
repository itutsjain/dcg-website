
"use strict";
// Sweet Alert CDN through JS
let script = document.createElement("script");
script.type = 'text/javascript';
script.src="https://unpkg.com/sweetalert/dist/sweetalert.min.js";
document.body.appendChild(script);

// Header

let header = $(`
<nav class="navbar navbar-expand-lg sticky-top navbar-dark justify-content-between" style="background-color:black ; 
padding: 0.2rem 1rem;
display: flex;
align-items: center;
justify-content: space-between;">
  <a class="navbar-brand" href="#">
    <img src="img/header.png" width="120px" height="50px" alt="">
  </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse"></div>
  <div class="collapse navbar-collapse"></div>
  <div class="collapse navbar-collapse"></div>
  <div class="collapse navbar-collapse"></div>
  <div class="collapse navbar-collapse"></div>
  <div class="collapse navbar-collapse"></div>
  <div class="collapse navbar-collapse"></div>
  
  <div class="collapse navbar-collapse"></div>
  <div class="collapse navbar-collapse"></div>
  <div class="collapse navbar-collapse"></div>
  <div class="collapse navbar-collapse"></div>
  
  <div class="collapse navbar-collapse"></div>
  <div class="collapse navbar-collapse"></div>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <ul class="navbar-nav ml-auto" style="text-align:justify">
        <li class="nav-item ml-auto">
          <a class="nav-link" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="team.html">Team </a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="projects.html">Projects </a>
    </li>
   
<li class="nav-item active">
    <a class="nav-link" href="contact.html">Contact</a>
</li>

    </ul>
    </div>
  </div>
</nav>`);

// Footer

let footer = $(`
<!--footer starts-->
<div class="footer" style="background-color:black;">
  <div class="inner-footer">
      <img src="img/footer.jpg" style="width:450px; height:230px; margin-left: -15%; margin-left: -15%;
       padding-right: 50px;">
<!--  for company name and description -->


<!--  for quick links  -->
    <div class="footer-items">
      <h3>Quick Links</h3>
      <div class="border1"></div> <!--for the underline -->
        <ul>
          <a href="index.html"><li>Home</li></a>
          <a href="team.html"><li>Teams</li></a>
          <a href="projects.html"><li>Projects</li></a>
          <a href="contact.html"><li>Work with Us</li></a>
          <a href="#"><li>Important Links</li></a>         </ul>
    </div>

<!--  for contact us info -->
    <div class="footer-items">
      <h3>Contact Us</h3>
      <div class="border1"></div>
        <ul>
          <li><img src=img/logo.png style="width: 27px;height: 27px;margin-right: 10px;
            margin-left: -5px;">DTU Consulting Group</li>
          <li><i class="fa fa-map-marker" aria-hidden="true"></i>Delhi Technological University</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>President: 7417645678</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i>event.dcg@gmail.com</li>
          <li>
              <div class="social-media">
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                  <a href="#"><i class="fab fa-google-plus-square"></i></a>
                </div> </li>
        </ul> 
      
    </div>
  </div>
</section>
<!--   Footer Bottom start  -->
  <div class="footer-bottom">
   
    Copyright &copy; DTU Consulting Group 2023.
  </div>
</div>
`);

// Window Loads
$(function () {
  let bodyElement = $(`body`);
  bodyElement.prepend(header);
  bodyElement.append(footer);
  bodyElement.append(upArrow);
  $("#btnScrollToTop").css("visibility", "hidden");

  //toggler hamburger functions
  const menuBtn = document.querySelector(".navbar-toggler");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
});

// function for toggling hamburger is-active class

$(function () {
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
});

// Navbar current page highlight

let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}
$(function () {
  $("a.nav-link").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("current-link");
    }
  });
});

//function to remove underline on hover

$(document).ready(function () {
  $("a.nav-link").hover(
    function () {
      $(this).removeClass("current-link");
    },
    function () {
      if ($(this).prop("href") == window.location.href) {
        $(this).addClass("current-link");
      }
    }
  );
});

