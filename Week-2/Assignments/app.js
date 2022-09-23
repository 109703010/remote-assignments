const welcome = document.querySelector('header');
const expand = document.querySelector('footer');

welcome.addEventListener('click', () => {
    document.querySelector('header p').textContent = "Have a Good Time!";
})

expand.addEventListener('click', () => {
    document.getElementById('more').style.display = "flex";
    // console.log('tap');
})

