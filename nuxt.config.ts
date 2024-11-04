// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },


  app: {

    head: {

      script: [
        
        
  


        { src:"/js/vendor/modernizr-3.5.0.min.js", defer: ''},
		
		{ src:"/js/vendor/jquery-1.12.4.min.js", defer: ''},
        { src:"/js/popper.min.js", defer: ''},
        { src:"js/bootstrap.min.js", defer: ''},
	    
        { src:"/js/jquery.slicknav.min.js", defer: ''},

		
        { src:"/js/owl.carousel.min.js", defer: ''},
        { src:"/js/slick.min.js", defer: ''},
       
        { src:"/js/gijgo.min.js", defer: ''},
		
        { src:"/js/wow.min.js", defer: ''},
		{ src:"/js/animated.headline.js", defer: ''},
        { src:"/js/jquery.magnific-popup.js", defer: ''},

		
        { src:"/js/jquery.scrollUp.min.js", defer: ''},
        { src:"/js/jquery.nice-select.min.js", defer: ''},
		{ src:"/js/jquery.sticky.js", defer: ''},
               
       
        { src:"http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js", defer: ''},
        { src:"/js/jquery.counterup.min.js", defer: ''},

       
        { src:"/js/contact.js", defer: ''},
        { src:"/js/jquery.form.js", defer: ''},
        { src:"/js/jquery.validate.min.js", defer: ''},
        { src:"/js/mail-script.js"},
        { src:"/js/jquery.ajaxchimp.min.js", defer: ''},
        
		
        { src:"/js/plugins.js", defer: ''},
        { src:"/js/main.js", defer: ''},
      ],


     


      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' },
        {rel:"stylesheet", href:"/css/custom-bs.css"},,

        { rel:"stylesheet", href:"/css/bootstrap.min.css"},,
        { rel:"stylesheet", href:"/css/owl.carousel.min.css"},,
        { rel:"stylesheet", href:"/css/slicknav.css"},,
        { rel:"stylesheet", href:"/css/animate.min.css"},,
        { rel:"stylesheet", href:"/css/magnific-popup.css"},,
        { rel:"stylesheet", href:"/css/fontawesome-all.min.css"},,
        { rel:"stylesheet", href:"/css/themify-icons.css"},,
        { rel:"stylesheet", href:"/css/slick.css"},,
        { rel:"stylesheet", href:"/css/nice-select.css"},,

        {rel:"stylesheet", href:"/css/style.css"},,
      ]
    },

  },
},)
