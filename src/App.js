import React, { Component } from 'react';
import Sticky from 'react-stickynode';

import Footer from './components/Footer';
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
            { label: 'THINGS TO DO', href: 'thingstodo' },
            { label: 'RSVP', href: 'rsvp' }]}>
  </Menu>
</Sticky>

<TitleBar id="titlebar">
</TitleBar>

<TopicContainer id="brideandgroom" name="brideandgroom" title="The Bride and Groom">
<hr />
  <div className="container">
  
    <div className="row">
      <div className="one-half column">
        <h2>Paloma</h2>
          <img className="thumbnail" src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.0-9/20265067_10213976414188324_4759706031751257930_n.jpg?_nc_cat=101&_nc_ht=scontent.fhou1-1.fna&oh=3688c24ec8b71cb0b1127981978cb7bb&oe=5C9BD4FB" alt="Paloma" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta augue ligula, ac lobortis lacus ultricies vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla non ligula vitae sapien gravida dignissim ac a ipsum. Duis sapien leo, posuere a posuere in, semper eget libero. Sed imperdiet vehicula consequat. Pellentesque sed massa venenatis, hendrerit nibh id, scelerisque massa.</p>

      </div>

      <div className="one-half column">
        <h2>Thanh</h2>
          <a href="img/thanh.jpg"><img className="thumbnail" src="http://www.mediafire.com/convkey/a3dc/aze6eapf0o4k73azg.jpg" alt="Thanh" /></a>
        <p>Aenean id scelerisque augue, a pharetra nibh. Ut finibus lorem quis orci pretium, eget commodo lacus pharetra. Donec id augue molestie, condimentum lectus sed, aliquam lorem. Integer faucibus bibendum augue vel semper. Sed mollis pulvinar magna, in cursus est luctus quis. Aliquam ac condimentum metus. Morbi ac orci egestas, viverra nunc pellentesque, imperdiet neque. </p>
      </div>
    </div>
  </div>

  <hr />

  <h1>OUR STORY</h1>
 
    <img className="large-image" src="http://www.mediafire.com/convkey/d8f9/pmla0y520j56w3lzg.jpg" alt="Thanh proposing to Paloma" />


  <p>Aenean id scelerisque augue, a pharetra nibh. Ut finibus lorem quis orci pretium, eget commodo lacus pharetra. Donec id augue molestie, condimentum lectus sed, aliquam lorem. Integer faucibus bibendum augue vel semper. Sed mollis pulvinar magna, in cursus est luctus quis. Aliquam ac condimentum metus. Morbi ac orci egestas, viverra nunc pellentesque, imperdiet neque. 
  </p>
</TopicContainer>

<TopicContainer id="wedding" title="The Wedding">
<hr />
<div className="container">

        <div className="one-half column">
          <h2>CEREMONY</h2>
          <p>4pm @ The Golf Club at Cinco Ranch</p>
          <p>
            <img className="location-image" src="https://cdn.wedding-spot.com/images/venues/3398/The-Golf-Club-at-Cinco-Ranch-Wedding-KAty-TX-+1_main.1430849008.jpg" alt="Ceremony Venue" />
          </p>


   
        </div>
        <div className="one-half column">
          <h2>RECEPTION</h2>
          <p>6pm @ The Golf Club at Cinco Ranch</p>
          <p>
           <img className="location-image" src="https://cdn.wedding-spot.com/images/venues/3398/The-Golf-Club-at-Cinco-Ranch-Wedding-Katy-TX-2_main.1485550872.jpg" alt="Reception Venue" />
          </p>

        </div>
      </div>

      <br></br>

<p>
      <a href="https://goo.gl/maps/r71boFjFNE32">Google Maps</a>
    </p>
      
      <p>Located near Katy just west of Houston, the Golf Club at Cinco Ranch offers a picturesque setting for your country club wedding. Imagine exchanging vows with your beloved right on our clubhouse patio with perfectly manicured grounds and a sparkling lake as your backdrop! Guests can enjoy cocktails and hors d’oeuvres on the lawn as you and your beloved take advantage of the stunning scenery to take unforgettable wedding photos. !</p>


      <hr />

      <h2>ON THE WEDDING DAY</h2>
 
      <p>The ceremony will start at 4pm
      </p>
      <p>After the ceremony we will raise a glass of champagne and someone will lead you to the reception where drinks and appetizers will be served.
      </p>
      <p>
        Wedding attire is autumn formal
      </p>

      <hr />

      <h2>DAY BEFORE THE WEDDING (October 23rd)</h2>
      <p>Welcome cocktails will be held at <a href="https://perryssteakhouse.com/locations/tx/houston/katy/">Perry's Steakhouse and Grillfrom 6:30pm - 9pm.</a>
      </p>
      <p>Restaurant address is <a href="https://goo.gl/maps/RtXfmj77eUm">23501 Cinco Ranch Blvd q100, Katy, TX 77494</a> </p>
      <p>Cocktail night attire is dressy-casual.</p>

      <hr />

      <h2>DAY AFTER THE WEDDING (October 25th)</h2>
      <p>Farewell brunch will be held at 11:00 at
         <a href="https://www.blackwalnutcafe.com/locations/houston-locations/cinco-ranch-katy/">Black Walnut Cafe</a>. 
         </p>
         
         <p>Restaurant address is <a href="https://goo.gl/maps/SzdJZWPYZCx">23233 Cinco Ranch Blvd, Katy, TX 77494</a>.
      </p>
      <p>
        Brunch attire is autumn casual
      </p>
</TopicContainer>

<TopicContainer id="logistics" title="Logistics">
<hr />
  <h2>TRAVEL INFORMATION</h2>
  <p>list 2 Airport in houston and directions to area</p>
  <hr />
  <h2>ACCOMMODATIONS</h2>
      <p>For guests wishing to stay in a hotel x chain of hotels offers a 20%
         discount using this code
      </p>
      <hr />

</TopicContainer>

<TopicContainer id="thingstodo" title="Things to do">
<hr />
  <p>Things to do in Houston</p>
</TopicContainer>

<TopicContainer id="rsvp" title="RSVP">
<hr />
<a href="https://docs.google.com/forms/d/e/1FAIpQLSff43fwWBaDcO37AwXFjM-PAICRNHrI34TyZL9k-4BYhYlDbg/viewform" target="_blank" rel="noopener noreferrer"><h2>Click here to RSVP</h2></a>

</TopicContainer>
<Footer></Footer>
      </div>
    );
  }
}

export default App;
