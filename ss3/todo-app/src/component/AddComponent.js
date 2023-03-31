import { Component } from "react";

class AddComponent extends Component {
  constructor() {
    super();
    this.state = {
      todoName: "",
      todoList: [],
    };
  }

  handleInputText(value) {
    this.setState({
      todoName: value,
    });
  }

  handleAddToList() {
    const newArr = [...this.state.todoList, this.state.todoName];

    this.setState({
      todoName: "",
      todoList: newArr,
    });
  }

  render() {
    let stt = 1;
    return (
      <>
        <div className="text-center">
          <h1 className="mb-5">Todo List</h1>

          <div>
            <input
              type="text"
              placeholder="Text"
              value={this.state.todoName}
              onChange={(event) => this.handleInputText(event.target.value)}
            />
            <button onClick={() => this.handleAddToList()}>Add</button>
          </div>
        </div>

        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
                {this.state.todoList.map((value, index) => (
                    <tr key={index}>
                        <td>{stt++}</td>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default AddComponent;
