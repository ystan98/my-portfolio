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
          title: "Blockchain Specialization",
          tags: ['Coursera', 'Blockchain'],
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
    <section class="page-section bg-white mb-0 pb-5">
                    <div class="container">
                       
                        <h2 class="page-section-heading text-center text-uppercase ">Online Accreditations</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom divider-dark">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-certificate"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row" >
                        <div class="col col-md-4 col-xl-3 col-sm-6 col-12" style="height:fit-content;" v-for="i,index of certification">
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
                          <div class="card-bot" style="position:absolute; bottom:5px;">
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
  data: function () {
    return {
      awards: [{
          title: "OCBC Bank Silver Medal (2018)",
          desc: 'Awarded to graduating student in 2018 with the second highest GPA in cohort.',
          head: `<img style="width:100%; height:60px;" src="assets/img/education/ocbc.png">`,
        }, 
        {
          title: "Singapore Computer Society Award for Outstanding Project Work (2018)",
          desc: 'Awarded to one student for outstanding projects done  ',
          head: `<img style="width:100%; height:60px;" src="assets/img/education/scs.png">`,
        }, 
        {
          title: "MOE Edusave Skills Award <br> (2018)",
          desc: 'Up to 10% of graduating students  who demonstrated excellent professional & soft skills  and good conduct.',
          head: `<img style="width:100%; height:60px;" src="assets/img/education/moe.png">`,
        },
        {
          title: "Edusave Certificate of Academic Achievement (2018)",
          desc: 'Awarded to students based on learning dispositions and excellent academic performance.',
          head: `<img style="width:100%; height:60px;" src="assets/img/education/moe.png">`,
        },
        {
          title: "Edusave Certificate of Academic Achievement (2017)",
          desc: 'Awarded to students based on learning dispositions and excellent academic performance.',
          head: `<img style="width:100%; height:60px;" src="assets/img/education/moe.png">`,
        },
        {
          title: "Director's List (2017 Semester 2)",
          desc: "Director's list is awarded to top 15% students in the cohort for each academic semester",
          head: `<img style="width:100%; height:60px;" src="assets/img/education/nyp.jpg">`,
        },
        {
          title: "Director's List (2017 Semester 1)",
          desc: "Director's list is awarded to top 15% students in the cohort for each academic semester",
          head: `<img style="width:100%; height:60px;" src="assets/img/education/nyp.jpg">`,
        },
        {
          title: "Director's List (2016 Semester 2)",
          desc: "Director's list is awarded to top 15% students in the cohort for each academic semester",

          head: `<img style="width:100%; height:60px;" src="assets/img/education/nyp.jpg">`,
        },
        {
          title: "Director's List (2016 Semester 1)",
          desc: "Director's list is awarded to top 15% students in the cohort for each academic semester",
          head: `<img style="width:100%; height:60px;" src="assets/img/education/nyp.jpg">`,
        },



        {
          title: "Director's List (2015 Semester 2)",
          head: `<img style="width:100%; height:60px;" src="assets/img/education/nyp.jpg">`,
          desc: "Director's list is awarded to top 15% students in the cohort for each academic semester",

        },


        {
          title: "Director's List (2015 Semester 1)",
          desc: "Director's list is awarded to top 15% students in the cohort for each academic semester",
          head: `<img style="width:100%; height:60px;" src="assets/img/education/nyp.jpg">`,
          type: 'Nanyang Polytechnic',

        },


      ]
    };
  },


  template: `
    <section class="page-section bg-white mb-0 pb-5">
                    <div class="container">
                       
                        <h2 class="page-section-heading text-center text-uppercase ">Academic Achievements</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom divider-dark">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-user-graduate"></i></div>
                        <div class="divider-custom-line"></div>
                        </div>


                        <div class="row" >
                        <div class="col col-md-4 col-xl-3 col-sm-6 col-12" style="height:fit-content;" v-for="i,index of awards">
                        <div class="card my-3" style="height:260px">
                    
                        <div class="p-3 border-bottom"  v-html="awards[index].head"></div>
   
                                 
                        <div class="card-body mt-3 pt-0">
                          <h6 class="card-title" v-html="awards[index].title"></h6>
                          <p> {{awards[index].desc}}</p>
      
                        </div>
                      </div>

</div>
                      </div>

                           </div>
                                  </section>
`,
});

education.mount("#app_education")