import React, { Component } from "react";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      videos: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const videos = await this.videos();
      this.setState({ videos });
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  videos() {
    return API.get("videos", "/videos");
  }

  handleVideoClick = event => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute("href"));
  }

  renderVideosList(videos) {
    return [{}].concat(videos).map(
      (video, i) =>
        i !== 0
          ? <ListGroupItem
              key={video.videoId}
              href={`/videos/${video.videoId}`}
              onClick={this.handleVideoClick}
              header={video.content.trim().split("\n")[0]}
            >
              {"Created: " + new Date(video.createdAt).toLocaleString()}
            </ListGroupItem>
          : <ListGroupItem
              key="new"
              href="/videos/new"
              onClick={this.handleVideoClick}
            >
              <h4>
                <b>{"\uFF0B"}</b> Create a new video
              </h4>
            </ListGroupItem>
    );
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Meme Machine</h1>
        <p>Facilitating the sourcing of meme material</p>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
        </div>
      </div>
    );
  }

  renderVideos() {
    return (
      <div className="videos">
        <PageHeader>Your Videos</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderVideosList(this.state.videos)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderVideos() : this.renderLander()}
      </div>
    );
  }
}
