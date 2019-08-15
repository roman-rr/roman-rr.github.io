import React from 'react';
import './App.scss';

class Tech extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      technologies: [
        { name: 'React', logo: '/logo/react.png', 
          url: 'facebook/react/'},
        { name: 'Angular', logo: '/logo/angular.svg', 
          url: 'angular/angular/' },
        { name: 'Ionic Framework', logo: '/logo/ionic.png', 
          url: 'ionic-team/ionic/' },
        { name: 'Django Framework', logo: '/logo/django.png', 
          url: 'django/django/' }
      ]
    };
  }
  
  componentDidMount() {
    // https://api.github.com/repos/angular/angular/tags
    // this.setState({
    //   technologies
    // });

    this.state.technologies.forEach((item: any) => {
      fetch('https://api.github.com/repos/' + item.url + 'tags')
      .then(data => data.json())
      .then(res => {
        console.log(res);
        item.release = res[0].name;
        this.setState({technologies: this.state.technologies});
      });
    });
    // this.setState({technologies: this.state.technologies});
  }

  render () {
    const technologies = this.state.technologies;
    return (
      <div className="Tech" id="Tech">
          <div className="technologies">
              {
                technologies.map((item: any) =>
                  <div className="item" key={item.name}>
                    <div className="image" style={{backgroundImage: 'url(' + item.logo + ')'}}></div>
                    <div className="label">
                      <div className="title">{item.name}</div>
                      <div className="status">
                        <div className="dot"></div>
                        Release: {item.release ? item.release :
                          <svg className="spinner" viewBox="0 0 50 50">
                            <circle className="path" cx="25" cy="25" r="20" 
                                    fill="none" stroke-width="5"></circle>
                          </svg>
                        }
                        {/* <span className="date">(1 day ago)</span> */}
                      </div>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" 
                        href={'https://github.com/' + item.url} className="linked">
                      <img src="/link.svg" alt="icon" />
                    </a>
                  </div>
                )
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
      </div>
    );
  }
}

export default App;
