const mobileNavi =()=>{
    const headerbtn = document.querySelector('.header__bars');
    const mobilenav = document.querySelector('.mobile-nav');
    const mobilelinks=document.querySelectorAll('.mobile-nav__link');
    // state to keep track of mobile navis it open or not
    let ismobilenavopen=false;
  
    headerbtn.addEventListener('click',()=>{
        ismobilenavopen=!ismobilenavopen;
        if(!ismobilenavopen){
            mobilenav.style.display="flex";
             document.body.style.overflowY='hidden';
            
        }else{
            mobilenav.style.display='none';
             document.body.style.overflowY='auto';
            
        }
    });
mobilelinks.forEach(link=> {
    link.addEventListener('click',()=> {
        ismobilenavopen=false;
       mobilenav.style.display='none';
        document.body.style.overflowY='auto';
    })
})
   
}

export default mobileNavi;