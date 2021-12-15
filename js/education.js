let education = Vue.createApp({
    data() {
        return {
            a:true,
            }}
})


// Footer
education.component("online-accreditation", {
    data: function () {
        return {
          certification:  [
                {
                  title: "Applied Data Science Capstone",
                  cardImage: "assets/education/coursera.png",
                  type: 'Course',
                  link: "https://www.coursera.org/account/accomplishments/certificate/CDNQDVPJWBCF",
                },
                {
                    title: "Blockchain Specialization",
                    cardImage: "assets/education/coursera.png",
                    type: 'Specialization',
                    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WB7S2Y5EUBZX",
                  },
                  {
                    title: "Data Analysis with Python",
                    cardImage: "assets/education/coursera.png",
                    type: 'Course',
                    link: "https://www.coursera.org/account/accomplishments/certificate/YC65BA2EHN2P",
                  },
                  {
                    title: "Data Visualization with Python",
                    cardImage: "assets/education/coursera.png",
                    type: 'Course',
                    link: "https://www.coursera.org/account/accomplishments/certificate/U5C6ALUU9WND",
                  },
                  {
                    title: "Data Science Fundamentals with Python and SQL",
                    cardImage: "assets/education/coursera.png",
                    type:'Specialization',
                    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/RPQBHBE786SE",
                  },
            
                  {
                    title: "IBM Data Science Professional Certificate",
                    cardImage: "assets/education/ibm.png",
                    type: 'Professional',
                    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3HMJV9SWQCH3",
                  },

                  {
                    title: "Introduction to Data Science Specialization",
                    cardImage: "assets/education/coursera.png",
                    type: 'Specialization',
                    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/E97B8GFZQJYg",
                  },

                  {
                    title: "Introduction to Deep Learning & Neuron Networks with Keras",
                    cardImage: "assets/education/coursera.png",
                    type: 'Course',
                    link: "https://www.coursera.org/account/accomplishments/certificate/A3R3V27A6X2Y",
                  },

                  {
                    title: "Machine Learning with Python",
                    cardImage: "assets/education/coursera.png",
                    type: 'Course',
                    link: "https://www.coursera.org/account/accomplishments/certificate/KMPV8HELFF6P",
                  },

                  {
                    title: "Python Project for Data Science",
                    cardImage: "assets/education/coursera.png",
                    type: 'Course',
                    link: "https://www.coursera.org/account/accomplishments/certificate/6TXFL8U2XE3E",
                  },

                  {
                    title: "Python for Data Science, AI & Development",
                    cardImage: "assets/education/coursera.png",
                    type: 'Course',
                    link: "https://www.coursera.org/account/accomplishments/certificate/RZ2QCQG8YC2U",
                  },

                  {
                    title: "Statistics for Data Science with Python",
                    cardImage: "assets/education/coursera.png",
                    type: 'Course',
                    link: "https://www.coursera.org/account/accomplishments/certificate/4QWMAQ7PN3MC",
                  },

                  {
                    title: "Python Project for Data Science",
                    cardImage: "assets/education/coursera.png",
                    type: 'Course',
                    link: "https://www.coursera.org/account/accomplishments/certificate/6TXFL8U2XE3E",
                  },

                  {
                    title: "Process Automation Specialist",
                    cardImage: "assets/education/.png",
                    type: 'Badge',
                    link: "https://trailblazer.me/id/tanyeesen",
                  },

                  {
                    title: "The Complete Dividend Investing Course",
                    cardImage: "assets/education/udemy.png",
                    type: 'Course',
                    link: "https://www.udemy.com/certificate/UC-5125252f-efc6-4aba-9657-bfc9b3528941/",
                  },

                  {
                    title: "The Complete Foundation Stock Trading Course",
                    cardImage: "assets/education/udemy.png",
                    type: 'Course',
                    link: "https://www.udemy.com/certificate/UC-e23497ef-7b56-4fbe-b66b-b67371700202/",
                  },

                  {
                    title: "Value Investing Bootcamp : How to invest Wisely",
                    cardImage: "assets/education/udemy.png",
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
                        <div class="row row-cols-4">

                        <div class="card" v-for="i of certification">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>


                      </div>

                           </div>
                                  </section>
`,
});

education.mount("#app_education")


      
    
     
       
