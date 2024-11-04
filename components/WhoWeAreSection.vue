<template>

<section class="support-company-area fix pt-10">
            <div class="support-wrapper align-items-end">
                <div class="left-content">
                    <!-- section tittle -->
                    <div class="section-tittle section-tittle2 mb-55">
                        <div class="front-text">
                            <h2 class="">{{heading}}</h2>
                        </div>
                        <span class="back-text">About us</span>
                    </div>
                    <div class="support-caption">
                        <p class="pera-top">{{ subheading }} </p>
                        <p>
                            {{ content }}
                        </p>
                        <a href="/about" class="btn red-btn2">read more</a>
                    </div>
                </div>
                <div class="right-content">
                    <!-- img -->
                    <div class="right-img">
                        <img src="/img/gallery/20220720_114721.jpg" alt="">
                    </div>
                    <div class="support-img-cap text-center">
                        <span>2020</span>
                        <p>Since</p>
                    </div>
                </div>
            </div>
            
        </section>

</template>


<script setup>

    //receive a prop
    const { heading, subheading, content } = defineProps(["heading", "subheading", "content"]);
</script>






