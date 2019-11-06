import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar.js'
import FeedItems from './components/FeedItems.js'
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadNews = this.loadNews.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      selectedImages: 'image1',
      selectedChannel: 'top',
      items: []
    };
  }

  changeImage(imageName) {
    this.setState({
      selectedImages: imageName
    });
  }

  componentWillMount() {
    this.loadNews('top');
  }

  loadNews(channel) {

    fetch(`http://digitalcook.co.uk:3000/api/news/channel/${channel}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            selectedChannel: channel
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items, selectedImages, selectedChannel } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='container'>
          <div>
            <Navbar selectedImages={selectedImages} loadNews={this.loadNews} changeImage={this.changeImage} selectedChannel={selectedChannel} />
          </div>
          <div>
            <FeedItems items={items} selectedImages={selectedImages}/>
          </div>
        </div>
      );
    }
  }
}
export default App;

