//------------------Dropdown------------------------//
const dropdowns = document.querySelectorAll('.contener')

dropdowns.forEach(dropdown => {
    const list = dropdown.querySelector('.list')
    const btn = dropdown.querySelector('.btn')

    btn.addEventListener('click', () => {
        list.classList.toggle('list-show')
        btn.classList.toggle('activ')
    })
})
//------------------Dropdown------------------------//

//------------------circle------------------------//
const circleSection = document.querySelector('.circles')
const circles = document.querySelectorAll('.circle')
const progressCirclec = document.querySelectorAll('.progress')
const progressText = document.querySelectorAll('.circles h1')

let bol = false;

window.addEventListener('scroll', function () {
    console.log(bol);

    if (pageYOffset > circleSection.offsetTop - 200 && bol === false) {
        console.log(pageYOffset);

        for (let i = 0; i < circles.length; i++) {
            let radius = progressCirclec[i].r.baseVal.value;
            let circumference = radius * 2 * Math.PI;

            progressCirclec[i].style.strokeDasharray = circumference;

            function setProgress(percent) {
                progressCirclec[i].style.strokeDashoffset =
                    circumference - (percent / 100) * circumference;

            }
            const progress = circles[i].dataset.prog;
            progressText[i].innerHTML = progress + "%";
            setProgress(progress);
            bol = true;
        }
    }
})

//------------------circle------------------------//
