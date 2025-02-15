$(document).ready(function () {
  $("#form").on("submit", function (e) {
    e.preventDefault();

    const tarefa = $("#tarefa").val();
    const novaTarefa = $(`<li> ${tarefa}</li>`);

    $(novaTarefa).appendTo("#lista-tarefas");

    $("#tarefa").val("");
  });

  $("#lista-tarefas").on("click", "li", function () {
    if ($(this).hasClass("risca-tarefa")) {
      $(this).removeClass("risca-tarefa");
    } else {
      $(this).addClass("risca-tarefa");
    }
  });
});
