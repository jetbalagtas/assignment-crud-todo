$(document).ready(function() {
  list.init();
});

var list = {
  deleteTodo: function (idx) {

  todolistData.splice(idx,1);
  $('.todos').html('');
  list.loadTodos(todolistData);
  },
    init: function () {
      list.initStyling();
      list.initEvents();
    },
    initStyling: function () {
      list.loadTodos(todolistData);
      list.loadTemplate($('.todos'), {}, $('#todosTmpl').html());
    },
    initEvents: function () {
      $('form').on('submit', function (event) {
        event.preventDefault();
        var newTodo = {
          content: $('input').val()
        };
        todolistData.push(newTodo);
        var todoId = todolistData.indexOf(newTodo);
        newTodo.id = todoId;
        list.loadTemplate($('.todos'), newTodo, $('#todosTmpl').html());
        $('section input').val('');
      });
    },
    loadTemplate: function ($el, data, tmpl) {
      var template = _.template(tmpl);
      var html = template(data);
      $el.append(html);
    },
    loadTodos: function (arr) {
      _.each(arr, function (currEl, idx, arr) {
        currEl.id = idx;
        list.loadTemplate($('.todos'), currEl, $('#todosTmpl').html());
      });
      $('span').bind('dblclick', function(){
              $(this).attr('contentEditable',true);
          });
      $('span').bind('blur', function(){
               $(this).attr('contentEditable',false);
           });
    //   from farhatmihalko
    //   http://stackoverflow.com/questions/25399566/jquery-key-press-event-on-textarea
    //   $('span', "todos").on("keydown", function(e){
    //     if(e.which == 13){
    //      // your code
    //      return false;
    //    }
    //  });
    },












};
