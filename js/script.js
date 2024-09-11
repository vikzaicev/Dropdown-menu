const dropdowns = document.querySelectorAll('.contener')

dropdowns.forEach(dropdown => {
    const list = dropdown.querySelector('.list')
    const btn = dropdown.querySelector('.btn')

    btn.addEventListener('click', () => {
        list.classList.toggle('list-show')
        btn.classList.toggle('activ')
    })
})