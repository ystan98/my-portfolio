let project_mobile = Vue.createApp({
  data() {
    return {

    }
  }
})

let project_web = Vue.createApp({
  data() {
    return {

    }
  }
})

let projects_analytics = Vue.createApp({
  data() {
    return {

    }
  }
})

// Mobile Apps
project_mobile.component("project1a", {
  data: function () {
    return {
    };
  },
  template: `
  <div class="page-section text-white bg-primary pb-5" id="project_medical">
  <div class="container">
    <!-- About Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase">
      寻医问诊
    </h2>
    <!-- Icon Divider-->
    <div class="divider-custom divider-light">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <i class="fas fa-mobile-alt"></i>
      </div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- About Section Content-->
    <div class="row">
      <div class="col text-center"><h2>Mobile Application</h2></div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-8 mx-auto">
        <p class="lead text-center">
          Front End | Android Studio | Java | Internship
        </p>
        <p class="lead2 text-start">
          Mobile Application to provide Tele-medical services for people
          living in rural areas of Sichuan Province. Allows users to book
          appointment, consult doctors, chat with doctors, check illness
          they have based on symptoms, get medical advise.
        </p>
      </div>
    </div>

    <div class="section-p1 section-1">
      <span class="slide-in-l1"
        ><img src="assets/img/projects/img1.png" alt=""
      /></span>
      <span class="slide-in-t1"
        ><img src="assets/img/projects/img2.png" alt=""
      /></span>
      <span class="slide-in-r1"
        ><img src="assets/img/projects/img3.png" alt=""
      /></span>
    </div>
  </div>
</div>
`,
});

// Mobile Apps
project_mobile.component("project2a", {
  data: function () {
    return {
    };
  },
  template: `
   
  <div class="page-section text-white bg-secondary pb-5" id="project_fintech">
  <div class="container">
    <!-- About Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase">
      FinTech Mobile Application
    </h2>
    <!-- Icon Divider-->
    <div class="divider-custom divider-light">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <i class="fas fa-mobile-alt"></i>
      </div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- About Section Content-->
    <div class="row">
      <div class="col text-center"><h2>Mobile Application</h2></div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-8 mx-auto">
        <p class="lead text-center">
          Front End | Android Studio | Java | Final Year Project
        </p>

        <p class="lead2">
          Application allows user to do Mobile Payment, Bill Splitting,
          ordering food by scanning QR Code, P2P Transfer, and P2P Loan.
          Project was selected to be showcased in Nanyang Polytechnic's Open
          House 2017.
        </p>
      </div>
    </div>

    <div class="section-p1 section-1">
      <span class="slide-in-l1"
        ><img src="assets/img/projects/project2.png" alt=""
      /></span>
      <span class="slide-in-r1"
        ><img src="assets/img/projects/project2_pic2.png" alt=""
      /></span>
      <span class="slide-in-t1"
        ><img src="assets/img/projects/project2_pic4.png" alt=""
      /></span>
    </div>
  </div>
</div>
`,
});




// Web Apps
project_web.component("project1b", {
  data: function () {
    return {
    };
  },
  template: `
 
  <div class="page-section text-white bg-secondary pb-5">
  <div class="container">
    <!-- About Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase">
      Luxury Items (E-Commerce)
    </h2>
    <!-- Icon Divider-->
    <div class="divider-custom divider-light">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <i class="fas fa-globe"></i>
      </div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- About Section Content-->
    <div class="row">
      <div class="col text-center"><h2>Front End Web Development</h2></div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-8 mx-auto">
        <p class="lead text-center">
         Front End | Bootstrap 5 | Figma | Internship
        </p>
        <p class="lead2 text-start">
       Built an E-commerce website with standard e-commerce feature for a Vietnam Start-Up Company.
       *Designs are provided from the company design team. I translated the figma design into front end codes.
    </p>
      </div>
    </div>

    <div class="section-p2b text-center">
      <img data-aos="fade-up" src="assets/img/projects/beluxuria2.png" alt="" />
      <img data-aos="fade-up" src="assets/img/projects/beluxuria1.png" alt="" />
  
    </div>
  </div>
</div>

`,
});

// Web Apps
project_web.component("project2b", {
  data: function () {
    return {
    };
  },
  template: `
  <div class="page-section text-white bg-success pb-5" id="project_WAD2">
  <div class="container">
    <!-- About Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase">
     FoodVault
    </h2>
    <!-- Icon Divider-->
    <div class="divider-custom divider-light">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <i class="fas fa-globe"></i>
      </div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- About Section Content-->
    <div class="row">
      <div class="col text-center"><h2>Front End Web Development</h2></div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-8 mx-auto">
        <p class="lead text-center">
          Front End | Bootstrap 5 | Vue.JS | Interact JS | Animate.CSS | Academic Project
        </p>
        <p class="lead2 text-start">
       Responsive Front-End Web Application Project that seeks to reduce food waste by educating public through
       interactive means such as games, infographics , and allow merchants to sign up as partners to contribute by donating excess food.
    <br><br>
    There is also a recipe generator on the website to let user enter a list of possible recipe based on the remainders/leftover food items they have at home.
    </p>
      </div>
    </div>

    <div class="section-p3 text-center">
      <img data-aos="fade-up" src="assets/img/projects/foodvault3.png" alt="" />
      <br>
       <img id="p3-v" data-aos="fade-up" src="assets/img/projects/foodvault1.png" alt="" />
      <img id="p3-h" data-aos="fade-up" src="assets/img/projects/foodvault2.png" alt="" />
    
    </div>
  </div>
</div>
`,
});

// Web Apps
project_web.component("project3b", {
  data: function () {
    return {
    };
  },
  template: `
  <div class="page-section text-white bg-dark pb-5" id="project_ESD">
  <div class="container">
    <!-- About Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase">
     Chook
    </h2>
    <!-- Icon Divider-->
    <div class="divider-custom divider-light">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <i class="fas fa-globe"></i>
      </div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- About Section Content-->
    <div class="row">
      <div class="col text-center"><h2>Front End Web Development</h2></div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-8 mx-auto">
        <p class="lead text-center">
          Full Stack | Flask | Dockers | Microservice | Academic Project
        </p>
        <p class="lead2 text-start">
       Full Stack Web Application Project for queue management system that supports appointment booking. Customer can view queue status for each shop, enter phone number to join queue. Alternatively, they can book appointment on the website as well. *Please note that this project is done together with 5 other group members.
    <br><br>
  
    </p>
      </div>
    </div>

    <div class="section-p3b text-center">
    <img class="p3-esdimg1" data-aos="fade-up" src="assets/img/projects/chook3.png" alt="" />
    <br>
   <img class="p3-esdimg2" data-aos="fade-up" src="assets/img/projects/chook1.png" alt="" />
  <img class="p3-esdimg2" data-aos="fade-up" src="assets/img/projects/chook2.png" alt="" />
  
    
    </div>
  </div>
</div>
`,
});



// Analytics Apps
projects_analytics.component("project1c", {
  data: function () {
    return {
    };
  },
  template: `
  <div class="page-section text-white bg-dark pb-5" id="project_BAPJ">
  <div class="container">
    <!-- About Section Heading-->
    <h2 class="page-section-heading text-center text-uppercase">
      Business Analytics Project
    </h2>
    <!-- Icon Divider-->
    <div class="divider-custom divider-light">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <i class="fas fa-chart-pie"></i>
      </div>
      <div class="divider-custom-line"></div>
    </div>
    <!-- About Section Content-->
    <div class="row">
      <div class="col text-center"><h2>Data Analytics</h2></div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-8 mx-auto">
        <p class="lead text-center">
          Data Analytics | Dashboard | SAS | Academic Project
        </p>
        <p class="lead2 text-start">
        Analyzing and presenting credit card data, consisting of over 240k transactions, sign up campaigns etc over 5 years and providing recommendations
    <br><br>
    Business Questions answered includes : How to increase sign-ups, how to improve transaction and profits based on customer behavior etc. 
    </p>
      </div>
    </div>

    <div class="section-p2 text-center">
      <img data-aos="fade-up" src="assets/img/projects/dashboard1.png" alt="" />
      <img data-aos="fade-up" src="assets/img/projects/dashboard2.png" alt="" />
    </div>
  </div>
</div>

`,
});



project_mobile.mount("#app_project_mobile")
project_web.mount("#app_project_web")
projects_analytics.mount("#app_project_analytics")