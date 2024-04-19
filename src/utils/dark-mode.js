const darkmode= ()=>{
    const themetooglebtn=document.querySelectorAll('#theme-toggle')

    const theme=localStorage.getItem('theme');

    theme && document.body.classList.add(theme);
    
    const handlelocalstorage=()=>{
        document.body.classList.toggle('light-mode');
            localStorage.setItem('theme','lightmode')
            if(document.body.classList.contains('light-mode')){
                localStorage.setItem('theme','lightmode')
            }
            else{
                localStorage.removeItem('theme');
            }

    }
    themetooglebtn.forEach(btn =>{
        btn.addEventListener('click',handlelocalstorage)
    })
}
export default darkmode;
