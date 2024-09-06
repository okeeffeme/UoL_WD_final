document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('form[id=testForm]>input[type=checkbox]');
    const posts = document.getElementsByClassName('post');
    let currentSelection = new Set();

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            currentSelection = e.target.checked ? 
            currentSelection.add(e.target.name) : 
            currentSelection.delete(e.target.name);
            console.log(typeof currentSelection, currentSelection)
            togglePost(currentSelection)
        })
    })

    function togglePost(currentSelection) {
        console.log(typeof currentSelection, currentSelection)
        currentSelection.forEach((current) => {
            //must use for loop, HTMLCollection does not have forEach
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].id.includes(current)) {
                    posts[i].style.backgroundColor = 'green';
                } else {
                    posts[i].style.backgroundColor = 'red';
                    // posts[i].style.display = '';
                }
            }
        })
    }
  });   