let index = Vue.createApp({
  data() {
    return {

    }
  }
})


// About Section
index.component("about-section", {
  data: function () {
    return {
       }},
  template: `
  <section class="page-section text-white  bg-primary" id="about">
  <div class="container">
      <!-- About Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase">About Me</h2>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-smile"></i></div>
          <div class="divider-custom-line"></div>
      </div>
      <!-- About Section Content-->
      <div class="row" data-aos="fade-up">
          <div class="col text-center"> <h2>Hi there, I'm Yee Sen. Nice to meet you</h2></div></div>
      <div class="row mt-4" data-aos="fade-up">
          <div class="col-lg-8 mx-auto"><p class="lead2">
  I'm a Year 2 Singapore Management University (SMU) student
    studying Information Systems with dual track
    in Business Analytics and Financial Technology.

    <br><br>
    I previously graduated from Nanyang Polytechnic with
    Diploma with Merit in Financial Informatics. I am capable of building mobile applications, websites and doing data analytics. I did several projects with different programming languages, such as Java, C#, Python, HTML, CSS. Most of my projects were done on Visual Studio and Android Studio.
  </p>
      </div>
  
      </div>
      <div class="text-center mt-4 mb-0">
        <a class="btn btn-xl btn-outline-dark mx-2 mt-1 mb-1" href="education.html"  target="_blank">
            <i class="fas fa-book me-2"></i>
         My academic journey
       
        </a>

        <a class="btn btn-xl btn-outline-dark mx-2 mt-1 mb-1" href="https://drive.google.com/file/d/1sv900BXcQMj6ZPAU-rT7vAY8gT66eksB/view?usp=sharing"  target="_blank">
          <i class="fas fa-road me-2"></i>
       My employment Journey
      </a>
    </div>
     
     
</section>    
`,
});


// Online Certificate
index.component("skill-section", {
  data: function () {
    return {
     }},
  template: `
  <!-- Skills Section-->
<section class="page-section bg-white mb-0 pb-5">
   <div class="container">
       <!-- Skill Section Heading-->
       <h2 class="page-section-heading text-center text-uppercase ">Skills</h2>
       <!-- Icon Divider-->
       <div class="divider-custom divider-dark">
           <div class="divider-custom-line"></div>
           <div class="divider-custom-icon"><i class="fas fa-code"></i></div>
           <div class="divider-custom-line"></div>
       </div>
       <!-- Skill Section Content-->
       <div class="row" data-aos="fade-up">
           <div class="col-lg-4 fullstack p-5 text-center rounded-start">
               <i class="fas fa-laptop-code display-5"></i>
               <p class="lead mt-4"> Full Stack Developer </p>
               <p>I like to bring ideas to life with coding & it gives me satisfaction when I look at the end product.  </p>

               <h6 class="mt-4">Languages I speak in development : </h6>
               <p>Python, Java, C#, HTML5, CSS3, SQL</p>

               <h6 class="mt-4">Frameworks & Libraries : </h6>
               <p>Bootstrap 5, Vue.JS, Animate.css, Interact.js</p>
          

               <h6 class="mt-4">What I create : </h6>
               <p>Websites, Mobile Applications</p>

             

       

           
           </div>
           <div class="col-lg-4  datascience p-5 text-center ">
               <i class="fas fa-chart-bar display-5"></i>
               <p class="lead mt-4">Data Scientist</p>
               <p>I love exploring dataset to discover patterns, visualize them and draw meaningful insights.  </p>

               <h6 class="mt-4">Frameworks & Libraries I use : </h6>
               <p>Pandas, Scikit-learn, Seaborn, Numpy, Matplotlib</p>
  

               <h6 class="mt-4">Techniques : </h6>
               <p>Machine Learning, Clustering (K-means), Linear Regression, Classification (Decision Tree)</p>

               <h6 class="mt-4">Tools : </h6>
               <p>Jupyter Notebook, Tableau</p>


           </div>
           <div class="col-lg-4 investment p-5 text-center rounded-end">
               <i class="fas fa-search-dollar display-5"></i>
               <p class="lead mt-4">Retail Investor</p>
               <p> I primarily invest in undervalued Growth and Dividend stocks, as well as Cryptocurrency.
               </p>

               <h6 class="mt-4">Stocks I invest in: </h6>
               <p>US Tech, Metaverse, Green, REITs & Banks </p>
         

               <h6 class="mt-4">Cryptocurrency I invest in : </h6>
               <p>Bitcoin, Altcoins, Metaverse, NFT, DeFi</p>

               <h6 class="mt-4">I do : </h6>
               <p>Fundamental & Technical Analysis</p>
           </div>
       </div>
      
   </div>
     <!-- About Section Button-->
     <div class="text-center mt-4 mb-0">
       <a class="btn btn-xl btn-outline-dark mx-2" href="https://drive.google.com/file/d/1sv900BXcQMj6ZPAU-rT7vAY8gT66eksB/view?usp=sharing"  target="_blank">
           <i class="fas fa-download me-2"></i>
          CURRICULUM VITAE (PDF)
       </a>

       <a class="btn btn-xl btn-outline-dark mx-2" href="projects.html"  target="_blank">
         <i class="fas fa-cog me-2"></i>
       My Projects
     </a>
   </div>
</section>
 
`,
});


index.mount("#app_about")




