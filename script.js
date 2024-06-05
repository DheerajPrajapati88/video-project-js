const btn=document.querySelector('.btns');
const video=document.querySelector('video');
const preloader=document.querySelector('.pre-loader');
window.addEventListener('load',function(){
    preloader.classList.add("hide-preloader")
})

function videoPlayer(){
    btn.addEventListener("click",function(){
        if(!btn.classList.contains("slide")){
            btn.classList.add("slide");
            video.pause();
        }
        else{
            btn.classList.remove("slide")
            video.play();
            
        }
    })
    
}
videoPlayer();
