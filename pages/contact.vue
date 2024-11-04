<template>

    <GeneralContainerUnderNavBar pagename="Contact Us"/>



     <!-- Contact Start -->
     <div class="container-fluid contact bg-light py-5">
        <div class="py-5">
            <div class="mx-auto text-center mb-5" style="max-width: 900px;">
                <h5 class="section-title px-3">Contact Us</h5>
                <h1 class="mb-0">Contact For Any Query</h1>
            </div>
            <div class="row g-5 align-items-center">
                <div class="col-lg-5">
                    <div class="bg-white rounded p-4">
                        <div class="text-center mb-4">
                            <i class="fa fa-map-marker-alt fa-3x text-primary"></i>
                            <h4 class="text-primary"><Address></Address></h4>
                            <p class="mb-0">
                                KNUST Business Incubator, KNUST Commercial Area<br>
                                
                                
                            </p>
                           
                        </div>
                        <div class="text-center mb-4">
                            <i class="fa fa-phone-alt fa-3x text-primary mb-3"></i>
                            <h4 class="text-primary">Mobile</h4>
                            
                            <p class="mb-0">+(233) 593 390 236</p>
                        </div>
                       
                        <div class="text-center">
                            <i class="fa fa-envelope-open fa-3x text-primary mb-3"></i>
                            <h4 class="text-primary">Email</h4>
                            <p class="mb-0"><a href="mailto:info@guyanaglobalconsulting.com">info@metcalfeandpartners.com</a></p>
                            <!-- <p class="mb-0"><a href="mailto:Fatu.Gbedema@guyanaglobalconsulting.com">Fatu.Gbedema@guyanaglobalconsulting.com</a></p>
                            <p class="mb-0"><a href="mailto:Shabakie.Fernandes@guyanaglobalconsulting.com">Shabakie.Fernandes@guyanaglobalconsulting.com</a></p> -->
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <h3 class="mb-2">Send us a message</h3>
                    <p class="mb-4">The contact form is currently active.</p>
                    <form action="https://guyanaglobalconsulting.com/php/PHPMailer/send_email.ph" method="post">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    
                                    <input name="name" type="text" class="form-control border-0" id="name" placeholder="Your Name">
                                    
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input name="email" type="email" class="form-control border-0" id="email" placeholder="Your Email">
                                    
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input name="subject" type="text" class="form-control border-0" id="subject" placeholder="Subject">
                                    
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea name="message" class="form-control border-0" placeholder="Leave a message here" id="message" style="height: 160px"></textarea>
                                    
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=knust,%20opoku%20ware%20meseum+(Metcalfe%20and%20Partners)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>



                <!-- <div class="col-12">
                    <div class="rounded">
                        <iframe class="rounded w-100" 
                        style="height: 450px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <!-- Contact End -->
    
</template>