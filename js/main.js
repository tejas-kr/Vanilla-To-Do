document.querySelector("#todo_form").addEventListener("submit", (e) => {
    e.preventDefault();
});

const mark_as_done = (id, id_but) => {
    const list = document.querySelector('#' + id);
    const but = document.querySelector('#' + id_but);

    const li_list = document.querySelector('#' + id + '_li');

    if (but.textContent === 'Done') {
        list.style.textDecoration = 'line-through';
        but.textContent = 'Undo';
        li_list.classList.add('completed');    
    } else {
        list.style.textDecoration = 'none';
        but.textContent = 'Done';
        li_list.classList.remove('completed');
    }
    
}

const add_todo = () => {
    const todo_text = document.querySelector('#todoInput').value;

    if (todo_text === '' || !todo_text) {
        $('.toast').toast('show');
        return;
    }

    const date = new Date().getTime();

    $('#all_todo').append(`
        <li class="list-group-item" id="todo_${date}_li">
            <div class="row">
                <div class="col-sm-6" id="todo_${date}">${todo_text}</div>
                <div class="col-sm-6" style="text-align: right;"><a href="#" id="todo_${date}_but" rel="noopener noreferrer" onclick="mark_as_done('todo_${date}', 'todo_${date}_but')">Done</a></div>
            </div>
        </li>
    `);

    document.querySelector('#todoInput').value = "";
}

// dropdown functions ---

const show_all = () => {
    const listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach((listItem) => {
        listItem.style.visibility = 'visible';
    });
}

const show_completed = () => {

    tinysort('.list-group-item', {attr: 'class', order:'desc'});

    const listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach((listItem) => {
        listItem.style.visibility = 'hidden';
    });
    const listCompleteItems = document.querySelectorAll('.completed');
    listCompleteItems.forEach((listCompleteItem) => {
        listCompleteItem.style.visibility = 'visible';
    });
}

const show_incomplete = () => {

    tinysort('.list-group-item', {attr: 'class'});

    const listCompleteItems = document.querySelectorAll('.completed');
    listCompleteItems.forEach((listCompleteItem) => {
        listCompleteItem.style.visibility = 'hidden';
    });
}

const delete_completed = () => {

    tinysort('.list-group-item', {attr: 'class'});

    const listCompleteItems = document.querySelectorAll('.completed');
    listCompleteItems.forEach((listCompleteItem) => {
        listCompleteItem.remove();
    });

}

const delete_all = () => {
    const listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach((listItem) => {
        listItem.remove();
    });
} 