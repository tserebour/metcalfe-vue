<template>

    <HomeContainerUnderNavBar/>

    

    <WhoWeAreSection 
      heading="WHO WE ARE" 
      subheading="Welcome to Metcalfe + Partners Ltd, a multi-disciplinary company at the intersection of innovation and construction." 
      content="We are a forward-thinking architecture and construction consultancy firm dedicated to providing bespoke solutions for diverse client needs. Our expertise lies in seamlessly integrating innovative design, strategic business advisory, and high-quality construction practices to create exceptional spaces."
    />


    <WhatWeOfferSection/>

    


    <ServicesSection :services = "services"/>

    <OurProjectsSection show_tab="1" heading="Our Projects" :projects="projects"/>

    <OurTeamSection :team_members="team_members"/>


    <OurProjectsSection show_tab="0" heading="Our Subsediaries" :projects="subsediaries"/>


    

    <!-- <WhoWeAreSection/> -->


    <LetsTalkSection/>
    <TestimonialSection/>

    
</template>




<script setup>

const subsediaries = [
  {filename : "/img/gallery/IMG-20240312-WA0247.jpg", description: 'AgriTech'}

  
]




const team_members = [
                            { filename: '/img/team/pius.jpg', name: 'Pius Kofi Debrah', position: "CEO" },
                            { filename: '/img/team/augustine.jpg', name: 'Augustine Boachie Mensah', position: "COO(Consultant)"},
                            { filename: '/img/team/henry.jpg', name: 'Henry Kofi Danso', position: "COO(Consultant)"},
                            { filename: '/img/team/anna.jpg', name: 'Annabel Dompey', position: "Quantity Suveyor"},

                        ];

                        

const services = [
  {
    name: "Architecture",
    image: "/img/service/architecture.jpg",
  },
  {
    name: "Building Construction",
    image: "/img/service/Building construction.jpg",
  },
  {
    name: "Civil",
    image: "/img/service/civil.jpg",
  },
  
];


const projects = [
        { filename: '/img/gallery/Bedroom interior.jpg', description: 'Bedroom interior' },
        { filename: '/img/gallery/Dining interior.jpg', description: 'Dining interior' },
        { filename: '/img/gallery/Fludor Interior.jpg', description: 'Fludor Interior' },
        { filename: '/img/gallery/HESA Study Area KNUST.jpg', description: 'HESA Study Area KNUST' },
        { filename: '/img/gallery/Kitchen interior.jpg', description: 'Kitchen interior' },
        { filename: '/img/gallery/Living room interior.jpg', description: 'Living room interior' },
        { filename: '/img/gallery/Mission House.jpg', description: 'Mission House' },
        { filename: '/img/gallery/PEEVIS Hotel at Ekyem 2.jpg', description: 'PEEVIS Hotel at Ekyem 2' },
        { filename: '/img/gallery/PEEVIS Hotel at Ekyem.jpg', description: 'PEEVIS Hotel at Ekyem' },
        { filename: '/img/gallery/PEEVIS Hotel at New Koforidua.jpg', description: 'PEEVIS Hotel at New Koforidua' },
        { filename: '/img/gallery/Six Bedroom Full house with swimming pool.jpg', description: 'Six Bedroom Full house with swimming pool' },
        { filename: '/img/gallery/Three bedroom residential.jpg', description: 'Three bedroom residential' },
        { filename: '/img/gallery/Two bedroom apartment.jpg', description: 'Two bedroom apartment' },
        { filename: '/img/gallery/Two Bedroom House.jpg', description: 'Two Bedroom House' },
        { filename: '/img/gallery/Washrrom interior.jpg', description: 'Washrrom interior' }
    ];


</script>