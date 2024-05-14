const sideBar = document.querySelector(".sidebar");
let menu = document.querySelector('.menu-button');
let close = document.querySelector(".close");

const showSideBar = () => {
    menu.addEventListener('click', () => {
       
        

        console.log('button clicked');

        sideBar.style.display = 'flex';
        
        
    })
}

showSideBar();


const hideSideBar = () => {
    close.addEventListener('click', () => {
        sideBar.style.display = 'none';
    })

}

hideSideBar();
