<template>

<div class="services-area1 section-padding30">
            <div class="container">
                <!-- section tittle -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-tittle mb-55">
                            <div class="front-text">
                                <h2 class="">Our Services</h2>
                            </div>
                            <span class="back-text">Services</span>
                        </div>
                    </div>
                </div>
                <div class="row" >
                    <div v-for="service in services" :key="service" class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single-service-cap mb-30">
                            <div class="service-img">
                                <img :src="service.image" alt="">
                            </div>
                            <div class="service-cap">
                                <h4><a href="/services">{{ service.name }}</a></h4>
                                <a href="/services" class="more-btn">Read More <i class="ti-plus"></i></a>
                            </div>
                            <div class="service-icon">
                                <img src="/img/icon/services_icon1.png" alt="">
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    
</template>



<script setup>

const { services } = defineProps(["services"])

console.log(services)




</script>