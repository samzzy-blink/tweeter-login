const btnOpen = document.querySelectorAll('.click');
const container = document.querySelector('.container');






btnOpen.forEach(function(btn){
    btn.addEventListener('click',(e)=>{
        // console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
       if (styles.contains('apples')) {
        container.style.display ='flex';
       } else if(styles.contains('email')){
        container.style.display ='flex';
       }else if(styles.contains('sign-in')){
        container.style.display ='flex';
       }else{
        container.style.display ='none';
       }
    
    }); 
    
})


 
   


