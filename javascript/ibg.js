//Функция для элемента с классом _ibg
export default function ibg() {
    const ibg = document.querySelectorAll('._ibg');
    ibg.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            item.style.backgroundImage = `url("${img.getAttribute('src')}")`
        }
    })
}