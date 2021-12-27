let education = Vue.createApp({
  data() {
    return {

    }
  }
})


// Education
education.component("online-accreditation", {
  data: function () {
    return {
      certification: [{
          title: "Applied Data Science Capstone",
          desc: "Hands on project involving data collection, data wrangling, exploratory data analysis, data visualization, model development, model evaluation,",
          tags: ['Coursera', 'Data Science'],
          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/CDNQDVPJWBCF",
        },
        {
          title: "Blockchain Specialization",
          desc: "Understanding of foundational concepts enabling blockchain protocol. Designed, developed, and tested smart contracts & decentralized applications on private Ethereum blockchain.",
          tags: ['Coursera', 'Blockchain'],
          type: 'Specialization',
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WB7S2Y5EUBZX",
        },
        {
          title: "Cutting-Edge CSS",
          desc: "Visualizing how CSS codes relates to actual browser input. Covers responsive web design and good use of cascading style sheets.",
          tags: ['LinkedIn', 'Web Development'],
          type: 'Course',
          link: "https://www.linkedin.com/learning/certificates/dccc163de9e52ca5943b103ec847b0ec0b31103179ca2c9b9af553b0554beead?u=21102035&trk=flagship-lil_details_certification&trk=lil_details_certification",
        },
        {
          title: "Data Analysis with Python",

          tags: ['Coursera', 'Data Science'],
          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/YC65BA2EHN2P",
        },
        {
          title: "Data Visualization with Python",
          tags: ['Coursera', 'Data Science'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/U5C6ALUU9WND",
        },
        {
          title: "Data Science Fundamentals with Python and SQL",
          tags: ['Coursera', 'Data Science'],

          type: 'Specialization',
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/RPQBHBE786SE",
        },

        {
          title: "IBM Data Science Professional Certificate",
          tags: ['Coursera', 'IBM', 'Data Science'],

          type: 'Professional',
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3HMJV9SWQCH3",
        },

        {
          title: "Introduction to Data Science Specialization",
          tags: ['Coursera', 'Data Science'],

          type: 'Specialization',
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/E97B8GFZQJYg",
        },

        {
          title: "Introduction to Deep Learning & Neuron Networks with Keras",
          tags: ['Coursera', 'Deep Learning'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/A3R3V27A6X2Y",
        },

        {
          title: "Machine Learning with Python",
          tags: ['Coursera', 'Machine Learning'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/KMPV8HELFF6P",
        },

        {
          title: "Python Project for Data Science",
          tags: ['Coursera', 'Data Science'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/6TXFL8U2XE3E",
        },

        {
          title: "Python for Data Science, AI & Development",

          tags: ['Coursera', 'Data Science'],
          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/RZ2QCQG8YC2U",
        },

        {
          title: "Statistics for Data Science with Python",
          tags: ['Coursera', 'Data Science'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/4QWMAQ7PN3MC",
        },

        {
          title: "Python Project for Data Science",
          tags: ['Coursera', 'Data Science'],

          type: 'Course',
          link: "https://www.coursera.org/account/accomplishments/certificate/6TXFL8U2XE3E",
        },

        {
          title: "Process Automation Specialist",
          tags: ['Salesforce', 'Process Automation'],

          type: 'Badge',
          link: "https://trailblazer.me/id/tanyeesen",
        },

        {
          title: "The Complete Dividend Investing Course",
          tags: ['Udemy', 'Finance'],

          type: 'Course',
          link: "https://www.udemy.com/certificate/UC-5125252f-efc6-4aba-9657-bfc9b3528941/",
        },

        {
          title: "The Complete Foundation Stock Trading Course",
          tags: ['Udemy', 'Finance'],

          type: 'Course',
          link: "https://www.udemy.com/certificate/UC-e23497ef-7b56-4fbe-b66b-b67371700202/",
        },

        {
          title: "Value Investing Bootcamp : How to invest Wisely",
          tags: ['Udemy', 'Finance'],

          type: 'Course',
          link: "https://www.udemy.com/certificate/UC-4bbbec6b-4eed-4fa7-ae7e-b8a862889f63/",
        },

      ]

    };
  },
  template: `
    <section class="page-section bg-white mb-0 pb-5">
                    <div class="container">
                        <!-- Whatever Section Heading-->
                        <h2 class="page-section-heading text-center text-uppercase ">Online Accreditations</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom divider-dark">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-certificate"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row" >
                        <div class="col col-md-3 col-12" style="height:fit-content;" v-for="i,index of certification">
                        <div class="card my-3" style="height:300px">
                                            <div class="card-body ">
                                           
                          <h5 class="card-title">{{certification[index].title}}</h5>
                       
                          
                          <p class="card-text">{{certification[index].desc}}   
                          
                           </p>

                           <p style="position:absolute; bottom:0px;">
                           <span v-for="t,i in certification[index].tags">
                           <span v-if="certification[index].tags.length>2"> 
                           
                           <span class="badge" v-if="i==0" 
                           style='background-color:blue'>{{t}}
                           </span>

                           <span class="badge" v-else-if="i==1" 
                           style='background-color:blue'>{{t}}
                           </span>

                           <span class="badge" v-else 
                           style='background-color:green'>{{t}}
                           </span>


                           </span>
                           <span v-else>   <span class="badge" v-bind:style="i==0? 'background-color:blue;' : 'background-color:green;'">
                           {{t}} 
                           </span></span>

                            &nbsp;
                            </span>
                            </p>
                        </div>
                      </div>

</div>
                      </div>

                           </div>
                                  </section>
`,
});

education.mount("#app_education")