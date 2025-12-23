function AddTodo() {
  return (
    <div class="container">
      <div class="row rrow">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here " />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-1">
          <button type="button" class="btn btn-outline-info bbutton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
