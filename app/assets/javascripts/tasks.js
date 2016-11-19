// we need this so ajax does not interfere with jquery.
$(document).on('turbolinks:load', function() {
  console.log('document is ready!', new Date()); // this logging is optional
  $('#task_name').focus();

// This is going to fix our save button on the Bootstrap button.
// The code below is simply selecting the element. Is listens for a 'click'
  $('.modal-footer .btn-primary').click(function() {
    $('.edit_task').submit();
  });
});
