const favChapter = document.querySelector('input');
const button = document.querySelector('button');
const output = document.querySelector('ul');

button.addEventListener('click', () => {
    let listItem = favChapter.value;
    favChapter.value = "";

    let li = document.createElement('li');
    let text = document.createElement('span');
    let deletebutton = document.createElement('button');

    li.appendChild(text);
    text = listItem;
    li.textContent = (listItem);
    deletebutton.textContent = '❌';

    
    
    li.appendChild(deletebutton);

    output.appendChild(li);

deletebutton.addEventListener('click', function() {
    output.removeChild(li);   
})

    chapter.focus();
})