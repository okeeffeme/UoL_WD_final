document.addEventListener("DOMContentLoaded", () => {
    //get params from script tag
    //script ID MUST be 'filter-script' for custom props to work
    const formID = document.getElementById("filter-script").getAttribute("data-form") || 'filter-form';
    const filterable = document.getElementById("filter-script").getAttribute("data-filterable") || 'post-preview';
    //exclusive or inclusive filtering
    const isExcludeMode = document.getElementById("filter-script").getAttribute("data-exclude") ? true : false;

    const checkboxes = document.querySelectorAll(`form[id=${formID}]>input[type=checkbox]`);
    const clear = document.querySelector(`form[id=${formID}]>button[type=button][id=clearAll]`);
    const posts = document.getElementsByClassName(filterable);
    let currentSelection = new Set();

    // clear all selected filters
    clear.addEventListener('click', () => {
        currentSelection.clear();
        checkboxes.forEach((checkbox) => { //reset all checkboxes
            checkbox.checked = false;
        })
        togglePost(currentSelection);
    })

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            //cannot use ternary op., Set.delete() returns bool
            if (e.target.checked) {
                currentSelection.add(e.target.name);
            } else {
                currentSelection.delete(e.target.name);
            }
            togglePost(currentSelection);
        })
    })

    function togglePost(currentSelection) {
        if (currentSelection.size == 0) { // if no filter selected, display all
            //must use for loop, HTMLCollection does not have forEach
            for (let i = 0; i < posts.length; i++) {
                posts[i].style.display = '';
            }
        } else {
            for (let i = 0; i < posts.length; i++) { // hide all
                posts[i].style.display = 'none';
            }

            if (!!isExcludeMode) { // exclusive filtering
                for (let i = 0; i < posts.length; i++) { // display matching excluding
                    let count = 0;
                    currentSelection.forEach((current) => {
                        if (posts[i].dataset.tags.includes(current)) {
                            count += 1;
                        }
                    })
                    if (count == currentSelection.size) {
                        posts[i].style.display = '';
                    }
                }
            } else { // inclusive filtering
                currentSelection.forEach((current) => { // display matching including
                    for (let i = 0; i < posts.length; i++) {
                        if (posts[i].dataset.tags.includes(current)) {
                            posts[i].style.display = '';
                        }
                    }
                })
            }
        }
    }
});