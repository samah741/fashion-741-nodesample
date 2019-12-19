
$(document).ready(function(){
    
 $('.navbar-toggler').click(function() {
 $('.navbar-toggler').toggleClass('change')   
   
 })   
    $(window).scroll(function(){
    
  let position=$(this).scrollTop();
        
        
        
   if(position>=718){
       
       $('.navbar').addClass('navbar_background');
        $('.navbar').addClass('fixed-top');
   }
        else{
        
         $('.navbar').removeClass('navbar_background');
         $('.navbar').removeClass('fixed-top');
        }
    })
   
    
    
    
 $("#header,.info").ripples({
  dropRadius:25,
  perturbance:null,
 
});   
    $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
      
      enabled:true
  }
});    
    
});

