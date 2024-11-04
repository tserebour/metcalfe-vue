<template>
    <div class="team-area section-padding30">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <!-- Section Tittle -->
                        <div class="section-tittle section-tittle5 mb-50">
                            <div class="front-text">
                                <h2 class="">Our team</h2>
                            </div>
                            <span class="back-text">experts</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <!-- single Tem -->
                    
                    
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-" v-for="team_member in team_members" :key="team_member">
                        <div class="single-team mb-30">
                            <div class="team-img">
                                <img :src="team_member.filename" style= "max-height: 300px" alt="">
                            </div>
                            <div class="team-caption">
                                <span>{{ team_member.position }}</span>
                                <h3>{{ team_member.name }}</h3>
                            </div>
                        </div>
                    </div>
                             
                </div>
            </div>
        </div>
</template>

<script setup>


const {team_members} = defineProps(["team_members"])

</script>