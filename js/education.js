let education = Vue.createApp({
  data() {
    return {

    }
  }
})


// Online Certificate
education.component("online-accreditation", {
  data: function () {
    return {
      certification: [{
          title: "Applied Data Science Capstone",
          tags: ['Coursera', 'Data Science'],
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
        `,
          type: 'Specialization',
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WB7S2Y5EUBZX",
        },
        {
          title: "Blockchain Specialization",

          tags: ['Coursera', 'Blockchain'],
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
          `,
          type: 'Specialization',
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WB7S2Y5EUBZX",
        },
        {
          title: "Cutting-Edge CSS",
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0 " style="background-color:#2867B2 !important;  font-family: 'Source Sans Pro', sans-serif;">
          Linked <span class=" px-2 py-0 rounded" style="background-color:white; color:#2867B2;">in</span></p>
          `,
          tags: ['LinkedIn', 'Web Development'],

          type: 'Course',
          link: "https://www.linkedin.com/learning/certificates/dccc163de9e52ca5943b103ec847b0ec0b31103179ca2c9b9af553b0554beead?u=21102035&trk=flagship-lil_details_certification&trk=lil_details_certification",
        },
        {
          title: "Data Analysis with Python",
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
          `,
          tags: ['Coursera', 'Data Science'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/YC65BA2EHN2P",
        },
        {
          title: "Data Analysis and Visualizations Foundations",
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
          `,
          tags: ['Coursera', 'Data Analytics'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/KT45LY3EMN4D",
        },
        {
          title: "Data Visualization with Python",
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
          `,

          tags: ['Coursera', 'Data Science'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/U5C6ALUU9WND",
        },
        {
          title: "Data Science Fundamentals with Python & SQL",
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
          `,
          tags: ['Coursera', 'Data Science'],

          type: 'Specialization',
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/RPQBHBE786SE",
        },

        {
          title: "IBM Data Science Professional Certificate",
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:black;  font-family: 'Source Sans Pro', sans-serif;">
          IBM</p>
          `,
          tags: ['Coursera', 'IBM', 'Data Science'],

          type: 'Professional',
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3HMJV9SWQCH3",
        },

        {
          title: "Introduction to Data Science Specialization",
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
          `,
          tags: ['Coursera', 'Data Science'],

          type: 'Specialization',
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/E97B8GFZQJYg",
        },

        {
          title: "Introduction to Deep Learning & Neuron Networks with Keras",
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
          `,
          tags: ['Coursera', 'Deep Learning'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/A3R3V27A6X2Y",
        },

        {
          title: "Machine Learning with Python",
          tags: ['Coursera', 'Machine Learning'],
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
          `,

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/KMPV8HELFF6P",
        },

        {
          title: "Python Project for Data Science",
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
          `,
          tags: ['Coursera', 'Data Science'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/6TXFL8U2XE3E",
        },

        {
          title: "Python for Data Science, AI & Development",

          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
          `,
          tags: ['Coursera', 'Data Science'],
          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/RZ2QCQG8YC2U",
        },

        {
          title: "Statistics for Data Science with Python",
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
          `,
          tags: ['Coursera', 'Data Science'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/4QWMAQ7PN3MC",
        },

        {
          title: "Python Project for Data Science",
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#0056D2;  font-family: 'Source Sans Pro', sans-serif;">coursera</p>
          `,
          tags: ['Coursera', 'Data Science'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/6TXFL8U2XE3E",
        },

        {
          title: "Process Automation Specialist",
          tags: ['Salesforce', 'Process Automation'],
          head: `                        <p class="display-6 text-white text-center card-img-top p-4  m-0" style="background-color:#00A1E0;  font-family: 'Source Sans Pro', sans-serif;">salesforce</p>
          `,

          type: 'Badge',
          link: "https://trailblazer.me/id/tanyeesen",
        },

        {
          title: "The Complete Dividend Investing Course",
          tags: ['Udemy', 'Finance'],
          head: `  <p class="display-6 text-dark text-center card-img-top p-4  m-0" style="background-color:#F2F3F5; 
          font-family: 'Source Sans Pro', sans-serif;"><span style="color:#A435F0">Û</span>demy</p>
         `,
          type: 'Course',
          link: "https://www.udemy.com/certificate/UC-5125252f-efc6-4aba-9657-bfc9b3528941/",
        },

        {
          title: "The Complete Foundation Stock Trading Course",
          tags: ['Udemy', 'Finance'],
          head: `  <p class="display-6 text-dark text-center card-img-top p-4  m-0" style="background-color:#F2F3F5; 
          font-family: 'Source Sans Pro', sans-serif;"><span style="color:#A435F0">Û</span>demy</p>
         `,
          type: 'Course',
          link: "https://www.udemy.com/certificate/UC-e23497ef-7b56-4fbe-b66b-b67371700202/",
        },

        {
          title: "Value Investing Bootcamp : How to invest Wisely",
          tags: ['Udemy', 'Finance'],
          head: `  <p class="display-6 text-dark text-center card-img-top p-4  m-0" style="background-color:#F2F3F5; 
           font-family: 'Source Sans Pro', sans-serif;"><span style="color:#A435F0">Û</span>demy</p>
          `,
          type: 'Course',
          link: "https://www.udemy.com/certificate/UC-4bbbec6b-4eed-4fa7-ae7e-b8a862889f63/",
        },

      ]
    };
  },
  template: `
    <section class="page-section bg-white mt-0 mb-0 pb-5">
                    <div class="container">
                       
                        <h2 class="page-section-heading text-center text-uppercase ">Online Accreditations</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom divider-dark">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-certificate"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row" >
                        <div data-aos="fade-up" class="col col-xl-3 col-sm-6 col-12 px-sm-2 px-5" style="height:fit-content;" v-for="i,index of certification">
                        <div class="card my-3" style="height:240px">
                        <span class="" style="height:100px!important;" v-html="certification[index].head"></span>

                                     
                                           
                                 
                        <div class="card-body  ">
                          <h6 class="card-title">{{certification[index].title}}</h6>
                          <p class="mt-2">
                          <span v-for="t,i in certification[index].tags">
                          <span v-if="certification[index].tags.length>2"> 
                          
                          <span class="badge" v-if="i==0" 
                          style='background-color:darkblue'>{{t}}
                          </span>

                          <span class="badge" v-else-if="i==1" 
                          style='background-color:darkblue'>{{t}}
                          </span>

                          <span class="badge" v-else 
                          style='background-color:green'>{{t}}
                          </span>


                          </span>
                          <span v-else>   <span class="badge" v-bind:style="i==0? 'background-color:darkblue;' : 'background-color:green;'">
                          {{t}} 
                          </span></span>

                           &nbsp;
                           </span>
                           </p>
                          <div class="card-bot" style="position:absolute; bottom:5 px;">
                          <a class="btn ms-0 ps-0" v-bind:href="certification[index].link"  target="_blank">
                          <i class="fas fa-search me-2"></i>
                        View Certificate
                      </a>

                      
                            </div>
                        </div>
                      </div>

</div>
                      </div>

                           </div>
                                  </section>
`,
});

// Education Achievements
education.component("education-achievement", {


  template: `
    <section class="page-section bg-primary mt-0 mb-0 pb-5 text-white">
                    <div class="container">
                       
                        <h2 class="page-section-heading text-white text-center text-uppercase ">Academic Journey</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-user-graduate text-white"></i></div>
                        <div class="divider-custom-line"></div>
                        
                        </div>
                        <div class="row" data-aos="fade-up">
                      

    <ul class="timeline">
        <li>
          <div class="timeline-badge"><i class="fa fa-graduation-cap"></i></div>
          <div class="timeline-panel bg-dark" data-aos="fade-right">
            <div class="timeline-heading">
              <h5 class="timeline-title">Singapore Management University <br> (School of Computing & Information Systems)</h5>
              <p><small class="text-muted2"> 2020 - Present</small></p>
            </div>
            <div class="timeline-body">
              <p>Bachelors of Science, Major in Information Systems. 
                  <br>(Dual Track in Business Analytics & Financial Technology)</p>
                  <ul class="mt-2">
                  <li>SCIS Aspiration Scholarship </li>               
                  <li>Global Ready Talent Programme (GRT) grant recipient (AY 21/22)</li>
                  <li> Deans's List (AY 20-21)   </li>
         
              
              </ul>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge warning"><i class="fa fa-graduation-cap"></i></div>
          <div class="timeline-panel bg-dark" data-aos="fade-left">
            <div class="timeline-heading">
              <h5 class="timeline-title">Nanyang Polytechnic</h5>
              <p><small class="text-muted2"> 2015-2018</small></p>
            </div>
            <div class="timeline-body">
              <p>Diploma in Financial Informatics</p>
              
              <ul class="mt-2">
                  
                <li>OCBC Bank Silver Medal (2018)  </li>
                <li>Singapore Computer Society Award for Outstanding Project Work (2018) </li>   
                <li>Diploma with Merit (2018)</li>
                <li>Edusave Skills Award (2018) </li>
                <li> Young Talent Programme (YTP) recipient  </li>   
                <li> Edusave Certificate of Academic Achievement 2018  </li> 
                <li> Edusave Certificate of Academic Achievement 2017  </li>              
                <li> Director's List (AY 17 Semester 2)   </li>
                <li> Director's List (AY 17 Semester 1)   </li>
                <li> Director's List (AY 16 Semester 2)   </li>
                <li> Director's List (AY 16 Semester 1)   </li>
                <li> Director's List (AY 15 Semester 2)  </li>
                <li> Director's List (AY 15 Semester 1)  </li>            
               
            </ul>
             
            </div>
          </div>
        </li>
        <li>
            <div class="timeline-badge danger"><i class="fa fa-graduation-cap"></i></div>
            <div class="timeline-panel bg-dark" data-aos="fade-right">
            <div class="timeline-heading">
              <h5 class="timeline-title">Mayflower Secondary School</h5>
              <p><small class="text-muted2"><i class="glyphicon glyphicon-time"></i> 2010-2014</small></p>
            </div>
            <div class="timeline-body">
              <p>Express Stream - GCE O-Level</p>
            </div>
          </div>
        </li>

    </ul>



                           </div>
                                  </section>
`,
});

education.mount("#app_education")