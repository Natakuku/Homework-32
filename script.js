document.addEventListener('DOMContentLoaded', function () {
    const mainList = document.getElementById('main-list');
    const listItems = mainList.getElementsByTagName('li');

    function hideAllSublists() {
        const subLists = document.querySelectorAll('.sub-list');
        subLists.forEach(function (subList) {
            subList.classList.remove('visible');
        });
    }
    mainList.addEventListener('click', function () {
        hideAllSublists();
    });
    
    Array.from(listItems).forEach(function (listItem) {
        listItem.addEventListener('click', function (event) {
            event.stopPropagation();

            const existingSublist = listItem.nextElementSibling;
            if (existingSublist && existingSublist.classList.contains('sub-list')) {
                existingSublist.classList.toggle('visible');
            } else {
                hideAllSublists();
                const newList = document.createElement('ul');
                newList.classList.add('sub-list');
                for (let i = 1; i <= 3; i++) {
                    const newItem = document.createElement('li');
                    newItem.textContent = `${listItem.textContent}.${i}`;
                    newList.appendChild(newItem);
                }
                listItem.parentNode.insertBefore(newList, listItem.nextSibling);
                newList.classList.add('visible');
            }
        });
    });
});