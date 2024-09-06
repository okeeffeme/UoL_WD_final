document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('form[id=testForm]>input[type=checkbox]');
    const clear = document.querySelector('form[id=testForm]>button[type=button][id=clearAll]');
    const posts = document.getElementsByClassName('post');
    let currentSelection = new Set();

    clear.addEventListener('click', () => {
        currentSelection.clear();
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        })
        togglePost(currentSelection);
    })

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            //cannot use ternary op., Set.delete() returns bool
            if(e.target.checked) {
                currentSelection.add(e.target.name); 
            } else {
                currentSelection.delete(e.target.name);
            }
            togglePost(currentSelection);
        })
    })

    function togglePost(currentSelection) {
        if (currentSelection.size == 0) { // if no filter selected, display all
            for (let i = 0; i < posts.length; i++) {
                posts[i].style.display = '';
            }
        } else {
            //must use for loop, HTMLCollection does not have forEach
            for (let i = 0; i < posts.length; i++) { // hide all
                posts[i].style.display = 'none';
            }
            currentSelection.forEach((current) => { // display matching
                for (let i = 0; i < posts.length; i++) {
                    if (posts[i].id.includes(current)) {
                        posts[i].style.display = '';
                    }
                }
            })
        }
    }
  });   