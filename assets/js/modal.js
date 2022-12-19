window.addEventListener ('DOMContentLoaded', () => {
    const overlay = document.querySelector('#overlay')
    const prefBtn = document.querySelector('#pref-btn')
    const closeBtn = document.querySelector('#close-modal')

    prefBtn.addEventListener('click', () => {
        overlay.classList.remove('hidden')
        overlay.classList.add('flex')
    })

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('flex')
        overlay.classList.add('hidden')
    })
})