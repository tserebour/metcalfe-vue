<template>
    <GeneralContainerUnderNavBar pagename="Services"/>
    <ServicesSection :services="services"/>

    <OurProjectsSection show_tab="1" heading="Our Projects" :projects="projects"/>

    <!-- <ServicesSection :services=""/> -->
</template>


<script setup>
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
  {
    name: "Estate Management",
    image: "/img/service/estate management.jpg",
  },
  {
    name: "Mechanical & Electricals",
    image: "/img/service/mechanical.jpg",
  },
  {
    name: "Project Management",
    image: "/img/service/project management.jpg",
  },
  {
    name: "Quantity Survey",
    image: "/img/service/quantity survey.jpg",
  },
  {
    name: "Urban Planning",
    image: "/img/service/urban planning.jpeg",
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