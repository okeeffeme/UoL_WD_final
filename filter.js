document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('form[id=testForm]>input[type=checkbox]');
    console.log(checkboxes.length)
    for (let i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes[i])
        checkboxes[i].addEventListener('change', (e) => {
            console.log('change', e.target.checked, e.target.name)
        })
    }
  });   