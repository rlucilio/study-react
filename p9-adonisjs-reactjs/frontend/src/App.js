import { Component } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
});

class App extends Component {
  state = {
    newPostContent: '',
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await api.get('/posts');
    this.setState({ posts });
  }

  handlePostSave = async (e) => {
    e.preventDefault();

    const { data: post } = await api.post('/posts', {
      content: this.state.newPostContent,
    });

    this.setState({ posts: [...this.state.posts, post], newPostContent: '' });
  };

  handleDelete = async (id) => {
    await api.delete(`/posts/${id}`);

    this.setState({
      posts: this.state.posts.filter((post) => post.id !== id),
    });
  };

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.handlePostSave}>
          <textarea
            onChange={(e) => this.setState({ newPostContent: e.target.value })}
            value={this.state.newPostContent}
          />
          <button type='submit'>Postar</button>
        </form>

        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id} onClick={() => this.handleDelete(post.id)}>
              {post.content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
