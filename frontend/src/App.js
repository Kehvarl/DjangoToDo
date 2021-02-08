import React, {Component} from 'react';

const list = [
  {
    "id":1,
    "title":"Learn HTTP",
    "body":"Example To Do re: HTTP"
  },
  {
    "id":2,
    "title":"Second Item",
    "body":"Second ToDo Example"
  },
  {
    "id":3,
    "title":"Demo ToDo 3",
    "body":"Adding test items!"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list };
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
