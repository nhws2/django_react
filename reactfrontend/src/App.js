import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Api from './Api'
import Post from './components/Post'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  state = {
    title: "",
    content: "",
    posts: [],
  }

  _handlingChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  _handlingSubmit = async (event) => {
    event.preventDefault()
    await Api.createPost({ title: this.state.title, content: this.state.content })
  }

  componentDidMount() {
    this._getPosts()
  }

  async _getPosts() {
    const results = await Api.getAllPosts()
    this.setState({
      posts: results.data,
    })
  }

  _handlingDelete = async (id) => {
    await Api.deletePost(id)
  }

  render() {
    const paper = {
      margin: "2rem",
      padding: "2rem",
    }
    return (
      <Container maxwidth="sm">
        <Paper style={paper}>
          <Typography variant="h5" component="h3">
            멋쟁이 사자처럼 대나무숲
      </Typography>
          <Typography component="p">
            <Form
              handlingChange={this._handlingChange}
              handlingSubmit={this._handlingSubmit}
              title={this.state.title}
              content={this.state.content}
            />
          </Typography>
        </Paper>

        {
          this.state.posts.map((post) =>
            < div >
              <Post key={post.id} id={post.id} title={post.title} content={post.content} handlingDelete={this._handlingDelete} />
            </div>
          )
        }

      </Container>
    );
  }
}

export default App;
