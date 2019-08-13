import React from 'react';
import './App.scss';

class Tech extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {categories: [], technologies: [], currentCategory: 0, active_item: []};
    //handle Clicks
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  
  componentDidMount() {
    var This = this
    fetch('technologies.json').then(function(response) {
      return response.json();
    }).then(function(json){
       let items = []
       for (var i = 0; i < json.categories.length; i ++) {
         items.push(false)
       }
       items[0] = true
       This.setState({'categories':json.categories,'technologies':json.technologies, active_item: items});
    }).catch(function(error) {
      console.log('parsing failed', error)
    })
  }

  chooseCategory(id: number) {
    let items = []
    for (var i = 0; i < this.state.active_item.length; i ++) {
      items.push(false)
    }
    items[id] = true
    this.setState({currentCategory:id, active_item:items})
  }

  render () {
    const categories = this.state.categories;
    const technologies = this.state.technologies;
    return (
      <div className="Tech">
          <div className="Categories">
            {
              categories.map((category: any) =>
              <div onClick={() => this.chooseCategory(category.id)} 
                   className="category" 
                   key={category.id}>
                <span className={this.state.active_item[category.id] ? 'active': undefined} >
                  {category.title}
                </span>
              </div>)
            }
          </div>
          <div className="Technologies">
              {
                technologies.map((technology: any) =>
                (technology.category === this.state.currentCategory) ? (
                <div className="Technology" key={technology.title}>
                  <div className="tech-image">
                    <img src={technology.img} alt=""/>
                  </div>
                  <div className="title">
                    {technology.title}
                  </div>
                </div>):null)
                
              }
          </div>
      </div>
    );
  }
}

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div id="About">
          <div className="avatar">
            <img alt="Roman Antonov" className="avatar" src="/avatar.jpeg"/>
          </div>
          <div className="text">  
            <h1>Roman Antonov</h1>
            <h2>Modern Software developing</h2>
            <h3>
              <a href="https://www.upwork.com/freelancers/~016b923b0158ef81ae" 
                rel="noopener noreferrer" 
                target="_blank">
                Upwork Top Rated
              </a>
            </h3>
            <h3>
              <a href="https://www.upwork.com/signup/create-account/client_contact_freelancer?ciphertext=~016b923b0158ef81ae&BYOC"
                target="_blank" 
                rel="noopener noreferrer">
                Hire me
              </a>
            </h3>
            <h4>romwtb@gmail.com</h4>
          </div>
        </div>
        
        <Tech />

        <div id="Popular">
          <span role="img" aria-label="triumph">🏆</span> Most popular services
          <br />
          <ul>
            <li>Free consulting</li>
            <li>Facebook messenger chat bot</li>
            <li>Build cloud server architecture</li>
            <li>Code assessment and review</li>
            <li>Real estate property management system, sync with airbnb</li>
            <li>Parsing data: Alibaba products, Real Estate properties </li>
            <li>People activity emulations</li>
            <li>Push notifications for Web/Mobile applications</li>
            <li>Hybrid application for Web/iOS/Android</li>
            <li>Sketch to latest Angular / Ionic</li>
            <li>Migrate to latest Angular / Ionic</li>
          </ul>
        </div>
        <div id="Solutions">
          <span role="img" aria-label="triumph">📁</span> Ready solutions cases
          <br />
          <ul>
            <li>Pharmacy mobile application (iOS, Android)</li>
            <li>Real estate development (Web, iOS, Android)</li>
            <li>Beauty salons mobile application (Web, iOS, Android)</li>
            <li>Tinder-style card swipe application (iOS, Android)</li>
          </ul>
        </div>

        <div id="Payments">
          Payment accesabilities: For long-term colloboration i able to recieve payments and tacking my working time with modern software such as upwork.com and hubstaff.com
          Fixed price deals can be covered by paypal transfers or swift transfer services.
        </div>

        <div id="Contacts">
          E-mail : romwtb@gmail.com
          <br />
          Skype: romwtb@gmail.com
          <br />
          Upwork: <a href="https://www.upwork.com/freelancers/~016b923b0158ef81ae" 
                     rel="noopener noreferrer"
                     target="_blank">
                     https://upwork.com/fl/romanantonov
                  </a>
        </div>
        
      </div>
    );
  }
}

export default App;
