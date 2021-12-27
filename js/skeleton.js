// Nav and Header
let main = Vue.createApp({
    data() {
        return {
            a:true,
            }}
})
main.component("nav-bar", {
    data: function () {
        return {
            my_href: location.href,
            menu: [
                {
                    href: "index.html",
                    text: "About me",
                },
                {
                    href: "education.html",
                    text: "Education",
                },
                {
                    href: "experience.html",
                    text: "Experience",
                },
                {
                    href: "projects.html",
                    text: "Projects",
                }
            ],
        };
    },
    template: `
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand"  href="#page-top"> Yee Sen</a>
        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1" v-for="i in menu">
            <a class="nav-link py-3 px-0 px-lg-3 rounded" v-bind:class="{'active': my_href.endsWith(i.href)}" v-bind:href="i.href">{{i.text}}</a>
            </li>
                <li class="nav-item mx-0 mx-lg-1">
                    <a class="nav-link py-3 px-0 px-lg-3 rounded" href="https://drive.google.com/file/d/1sv900BXcQMj6ZPAU-rT7vAY8gT66eksB/view?usp=sharing"  target="_blank">Curriculum Vitae (PDF)</a>
                  </li>
            </ul>
        </div>
    </div>
</nav>  
`,
});

main.component("about-header", {
    template: `
    <header class="masthead bg-white  text-center" >
    <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image-->
           <!-- Masthead Heading-->
         <br>
           <h2 class="masthead-heading mb-0 animate__animated animate__fadeInDownBig">Developer, Data Scientist & Investor</h2>
                <!-- Masthead Subheading-->
        <p class="masthead-subheading  mb-0 mt-3  animate__animated animate__fadeInLeftBig animate__delay-1s">
           <span class="icode"> I code</span>, <span class="ianalyze">I analyze, </span> <span class="iinvest">I invest</span> , and I enjoy what I do</p>
           <img src="assets/img/my_picture.jpg" class="rounded-circle mb-0 mt-5 animate__animated animate__fadeIn  animate__delay-2s" style="width:15em;" alt="">
          <p class="lead mt-4 animate__animated animate__fadeIn  animate__delay-2s">Tan Yee Sen</p>
    </div>
</header>
`,
});



main.mount("#app")

let main2 = Vue.createApp({
    data() {
        return {
            a:true,
            }}
})


// Footer
main2.component("footer-items", {
    data: function () {
        return {
            my_href: location.href,
            items: [
                {
                    href: "https://www.facebook.com/tyeesen/",
                    icon: "fa-facebook-f",
                },
                {
                    href: "https://github.com/ystan98",
                    icon: "fa-github",
                },
                {
                    href: "https://www.linkedin.com/in/yeesentan/",
                    icon: "fa-linkedin-in",
                },
                {
                    href: "https://t.me/heyitsys",
                    icon: "fa-telegram-plane",
                }
            ],
        };
    },
    template: `
    <footer class="footer text-center mt-0 pb-5">
    <div class="container">
        <div class="row">
           <!-- Footer Social Icons-->
           <div class="col mb-5 mb-lg-0">
           <h4 class="text-uppercase mb-4">Reach out to me at</h4>
           <a v-for="i, index in items" class="btn btn-outline-light btn-social mx-1" v-bind:href="i.href" target="_blank">
           <i class="fab fa-fw" v-bind:class="i.icon"></i>
           </a>
           </div>
           </div>
       </div>
       </footer>
`,
});

main2.component("copyrights", {
    template: `
    <div class="footer py-4 mt-0 pt-0 text-center text-white">
    <div class="container"><small>Copyright &copy; Yee Sen 2021</small></div>
    </div>
`,
});

main2.mount("#app2")


      
    
     
       
