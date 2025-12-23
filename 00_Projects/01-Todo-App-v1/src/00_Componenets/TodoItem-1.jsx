function TodoItem_1() {
  let todoName = "get placement";
  let todoDate = "01/01/26";

  return (
    <div class="container">
      <div class="row rrow">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-outline-danger bbutton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem_1;
