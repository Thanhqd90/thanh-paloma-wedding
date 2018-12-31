import React, { Component } from 'react';
import Sticky from 'react-stickynode';

import Menu from './components/Menu.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';


class App extends Component {
  render() {
    return (
<div>
<Sticky enabled={true}>
  <Menu id="menu"
    items={[{ label: 'THE BRIDE & GROOM', href: 'brideandgroom' },
            { label: 'THE WEDDING', href: 'wedding' },
            { label: 'LOGISTICS', href: 'logistics' },
            { label: 'THINGS TO DO', href: 'thingstodo' }]}>
  </Menu>
</Sticky>

<TitleBar id="titlebar">
</TitleBar>

<TopicContainer id="brideandgroom" name="brideandgroom" title="The Bride and Groom">
  <div className="container">
    <div className="row">
      <div className="one-half column center">
        <h2>Paloma</h2>
          <img className="thumbnail" src="https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/44370914_10217627958474649_9016008602032275456_n.jpg?_nc_cat=103&_nc_ht=scontent.fhou1-2.fna&oh=3ba06ae4d537b2ee4835ac06af8739fa&oe=5CD785BA" alt="Paloma" />
          <p>Lorem Ipsum</p>

      </div>

      <div className="one-half column center">
        <h2>Thanh</h2>
          <a href="img/thanh.jpg"><img className="thumbnail" src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.0-9/38615032_10217056806756213_3684815578981203968_n.jpg?_nc_cat=110&_nc_ht=scontent.fhou1-1.fna&oh=c088f17357fd5a4208b793a8093a6b19&oe=5CD721F5" alt="Thanh" /></a>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  </div>

  <hr />

  <p>
    <img className="large-image" src="https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/44929541_10217687712928473_9199592168736423936_n.jpg?_nc_cat=105&_nc_ht=scontent.fhou1-2.fna&oh=8f2cb3327208960e525b0196cf46cf46&oe=5CCF7C22" alt="Thanh proposing to Paloma" />
  </p>

  <h2>OUR STORY</h2>
  <p>

  </p>
</TopicContainer>

<TopicContainer id="wedding" title="Wedding">
<h2>Title</h2>
</TopicContainer>

<TopicContainer id="logistics" title="Logistics">
  <p>Traveling information</p>
</TopicContainer>

<TopicContainer id="thingstodo" title="Things to do">
  <p>Things to do</p>
</TopicContainer>
      </div>
    );
  }
}

export default App;
