$(document).ready(function() {
    // Load tasks from local storage
    if (localStorage.getItem('tasks')) {
        $('#task-list').html(localStorage.getItem('tasks'));
    }

    // Add task event
    $('#add-task').on('click', function() {
        const taskText = $('#new-task').val().trim();
        if (taskText !== '') {
            const newTask = $('<li>').text(taskText);
            newTask.on('click', function() {
                $(this).toggleClass('completed');
                saveTasks();
            });
            $('#task-list').append(newTask);
            $('#new-task').val(''); // Clear the input field
            saveTasks();
        }
    });

    // Clear completed tasks event
    $('#clear-completed').on('click', function() {
        $('.completed').remove();
        saveTasks();
    });

    // Function to save tasks to local storage
    function saveTasks() {
        localStorage.setItem('tasks', $('#task-list').html());
    }

    // Mark tasks as completed when clicked
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
        saveTasks();
    });
});
