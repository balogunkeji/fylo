AOS.init()



const toggleSwitch = document.querySelector('.dropdown-content a');


toggleSwitch.addEventListener('click', dropDown, false);

function dropDown(e){
    if(e.target.click){
        document.documentElement.setAttribute('data-theme', 'light');
    } else{
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
function dropDown(e){
    if(e.target.click){
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
    } 
    else{
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', JSON.stringify('dark'));
    }
}
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', 'currentTheme');

    if (currentTheme === 'light'){

        toggleSwitch.click = true;
    }
}
