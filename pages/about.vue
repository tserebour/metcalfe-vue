<template>

    <GeneralContainerUnderNavBar pagename="About Us"/>

    <WhoWeAreSection 
      heading="WHO WE ARE" 
      subheading="Welcome to Metcalfe + Partners Ltd, a multi-disciplinary company at the intersection of innovation and construction." 
      content="We are a forward-thinking architecture and construction consultancy firm dedicated to providing bespoke solutions for diverse client needs. Our expertise lies in seamlessly integrating innovative design, strategic business advisory, and high-quality construction practices to create exceptional spaces."
    />


    <WhatWeOfferSection/>

    <div class="container">
        <div class="row g-4">
            <div class="col-lg-5 col-md-12 col-sm-12">
                <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                    <div class="service-content">
                        <h5 class="mb-4 service-headings">Mission</h5>
                        <p class="mb-0">
                            Our mission is to build excellence through quality, innovation, and sustainability. We are dedicated to exceeding our clients' expectations by delivering high-quality construction projects on time and within budget, while fostering a culture of safety, integrity, and continuous improvement.
                           
                        </p>
                    </div>
                    <div class="service-icon p-4">
                        <i class="fa fa-globe fa-4x service-icons"></i>
                    </div>
                </div>
            </div>
    
    
    
            
    
            
    
    
            <div class="col-lg-7 col-md-12 col-sm-12">
                <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                    <div class="service-icon p-4">
                        <i class="fa fa-envelope fa-4x service-icons"></i>
                    </div>
                    <div class="service-content">
                        <h5 class="mb-4 service-headings">Vision</h5>
                        <p class="mb-0">
                            To be the leading construction firm recognized for transforming visions into reality through innovative, sustainable, and high-quality building solutions. We aim to shape the future of construction by setting the benchmark for excellence, fostering lasting relationships with our clients and communities, and empowering our team to reach new heights of success and fulfilment.
                        </p>
                    </div>
                </div>
            </div>
    
            
            
            
        </div>
    </div>

    <!-- <TestimonialSection/> -->

    <OurTeamSection :team_members="team_members"/>
    
</template>

<script setup>

const team_members = [
                            { filename: '/img/team/pius.jpg', name: 'Pius Kofi Debrah', position: "CEO" },
                            { filename: '/img/team/augustine.jpg', name: 'Augustine Boachie Mensah', position: "COO(Consultant)"},
                            { filename: '/img/team/henry.jpg', name: 'Henry Kofi Danso', position: "COO(Consultant)"},
                            { filename: '/img/team/anna.jpg', name: 'Annabel Dompey', position: "Quantity Suveyor"},

                        ];

   

</script>