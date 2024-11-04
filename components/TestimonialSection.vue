<template>

<div class="testimonial-area t-bg testimonial-padding">
            <div class="container ">
                <div class="row">
                    <div class="col-xl-12">
                        <!-- Section Tittle -->
                        <div class="section-tittle section-tittle6 mb-50">
                            <div class="front-text">
                                <h2 class="">Testimonial</h2>
                            </div>
                            <span class="back-text">Feedback</span>
                        </div>
                    </div>
                </div>
               <div class="row">
                    <div class="col-xl-10 col-lg-11 col-md-10 offset-xl-1">
                        <div class="h1-testimonial-active" >
                            <!-- Single Testimonial -->
                            <div class="single-testimonial" v-for="testimonial in testimonials" :key="testimonial.name">
                                 <!-- Testimonial Content -->
                                <div class="testimonial-caption ">
                                    <div class="testimonial-top-cap">
                                        <!-- SVG icon -->
                                        <svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="86px" height="63px">
                                        <path fill-rule="evenodd"  stroke-width="1px" stroke="rgb(255, 95, 19)" fill-opacity="0" fill="rgb(0, 0, 0)"
                                        d="M82.623,59.861 L48.661,59.861 L48.661,25.988 L59.982,3.406 L76.963,3.406 L65.642,25.988 L82.623,25.988 L82.623,59.861 ZM3.377,25.988 L14.698,3.406 L31.679,3.406 L20.358,25.988 L37.340,25.988 L37.340,59.861 L3.377,59.861 L3.377,25.988 Z"/>
                                        </svg>
                                        <p>
                                            {{ testimonial.quote }}
                                        </p>
                                    </div>
                                    <!-- founder -->
                                    <div class="testimonial-founder d-flex align-items-center">
                                       <div class="founder-text">
                                            <span>
                                                {{ testimonial.name }}
                                            </span>
                                            <p>
                                                {{ testimonial.title }}
                                            </p>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
               </div>
            </div>
        </div>

</template>


<script setup>

const testimonials = [
  {
    name: "Emma N.",
    title:"Diaspora Investor",
    quote: "Working with this firm has been an absolute game-changer. They provided regular updates, and the virtual walkthroughs made me feel like I was part of the process despite being thousands of miles away. The team’s dedication and transparency have built my trust in remote investments.",
  },
  {
    name: "Kwame A.",
    title: "Young Professional",
    quote: "Their personalized approach helped me find the perfect place close to my workplace, saving me both time and money. The team's attention to detail and commitment to my satisfaction was evident in every step of the project.",
  },
  {
    name: "Nana K.",
    title: "Entrepreneur",
    quote: "From the initial design to the final build, their team exceeded my expectations. They understood my vision and executed it flawlessly. The innovative solutions they proposed helped optimize my workspace, enhancing productivity and efficiency.",
  },
  {
    name: "Akua B.",
    title: "Real Estate Investor",
    quote: "Their expertise in property analysis and market trends provided me with invaluable insights. They guided me through the entire process, ensuring I made informed decisions. Their quality craftsmanship and project management are unmatched.",
  },
  {
    name: "Dr. Mensah",
    title: "Private Corporate Organization",

    quote: "We engaged their services for our new corporate headquarters, and the results were outstanding. They delivered on time and within budget, and their innovative designs perfectly reflect our company’s values and culture. We couldn’t be happier with the outcome.",
  },
  {
    name: "Sarah O",
    title: "Student Architect",
    quote: "As a student architect, managing client projects seemed daunting. Their mentorship and support provided me with real-world experience and a commission on the construction profit. It was an invaluable learning opportunity that significantly boosted my confidence and skills.",
  },
  {
    name: "Michael D",
    title: "Ghanaian Living Abroad",
    quote: "I was hesitant to start a building project from abroad, but this firm made it seamless. They took care of everything, from land acquisition to construction, and provided regular updates. I felt involved and informed throughout the process, and the final result was beyond my expectations.",
  },
];


</script>