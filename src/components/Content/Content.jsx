import './Content.css';

import React, {Component} from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container
} from 'reactstrap';

//import Comments from '../../data/comments';

export default class Content extends Component {

  async getComments() {
    /*
    fetch('http://localhost:3000/comments').then(res => {
      //console.log(res);
      res.json().then(res => {
        console.log(res.body);
        return res.body;
      })
    })*/
    let res = await fetch('http://localhost:3000/comments');
    let comments = (await res.json()).body;
    console.log(comments);
    return Array.from(comments);
  }

  async render() {

    let comments = await this.getComments();

    console.log(comments);

    const commentsSection = comments.map(item => <div class="comment">
      <div className="comment__text">
        {item.text}
      </div>
      <div className="comment__name">
        {item.userName}
      </div>
    </div>);
    return (
      <main>
        <Container>
          <div className="chat-wrapper">
            {commentsSection}
          </div >
          <Form>
            <div class="name-input-group">
              <FormGroup>
                <Label for="userName" hidden>Name</Label>
                <Input type="text" name="name" id="userName" placeholder="Enter your name"/>
              </FormGroup>
              <Button>Submit</Button>
            </div>
            <FormGroup>
              <Label for="commentInput" hidden>Comment</Label>
              <Input
                type="textarea"
                name="text"
                id="commentInput"
                placeholder="Your comment"/>
            </FormGroup>
          </Form>
        </Container>
      </main >
    );
  }
}