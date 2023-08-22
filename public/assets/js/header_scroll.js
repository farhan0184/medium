console.log('helo wold')
function scrollHeader(){
    window.addEventListener('scroll',function(){
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.screenY > 0)
    })
}

scrollHeader()