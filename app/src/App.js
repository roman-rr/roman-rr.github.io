import React, { Component } from 'react';

import './App.css';

class Summary extends Component {
  
  constructor(props) {
    super(props);
    this.summary = this.props.summary;
    //handle Clicks
    this.removeTechnology = this.removeTechnology.bind(this);
  }

  removeTechnology(item) {
    for (var i=0;i<this.summary.length;i++) {
      if(item===this.summary[i]) this.summary.splice(i,1)
    }
    this.props.onSummaryChange(this.summary);
  }

  render () {
    return (
      <div className="Summary">
          <div className="Categories">
            <h2>Summary</h2>
          </div>
          <div className="Technologies">
           {
                this.summary.map((technology) =>
               
                (<div onClick={() => this.removeTechnology(technology)} className="Technology" key={technology.title}>
                  <div className="tech-image">
                    <img src={technology.img} alt=""/>
                  </div>
                  <div className="title">
                    {technology.title}
                  </div>
                </div>))
                
            }
            </div>
      </div>
    );
  }
}

class Tech extends Component {
  constructor(props) {
    super(props);
    this.state = {categories: [], technologies: [], currentCategory: 0};
    this.summary = this.props.summary;
    //handle Clicks
    this.chooseCategory = this.chooseCategory.bind(this);
    this.pickTechnology = this.pickTechnology.bind(this);
  }

  componentDidMount() {
    var This = this
    fetch('technologies.json').then(function(response) {
      return response.json();
    }).then(function(json){
       This.setState({'categories':json.categories,'technologies':json.technologies});
    }).catch(function(error) {
      console.log('parsing failed', error)
    })
  }

  chooseCategory(id) {
    this.setState({'currentCategory':id})
  }
  pickTechnology(item) {
    this.summary.push(item)
    this.props.onSummaryChange(this.summary);
  }

  render () {
    const categories = this.state.categories;
    const technologies = this.state.technologies;
    return (
      <div className="Tech">
          <div className="Categories">
            {
              categories.map((category) =>
              <div onClick={() => this.chooseCategory(category.id)} className="category" key={category.id}>{category.title}</div>)
            }
          </div>
          <div className="Technologies">
              {
                technologies.map((technology) =>
                (technology.category === this.state.currentCategory) ? (
                <div onClick={() => this.pickTechnology(technology)} className="Technology" key={technology.title}>
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


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      summary:[]
    };
    //example bind event to elment
    this.onSummaryChange = this.onSummaryChange.bind(this);
  }

  onSummaryChange(summary){
    this.setState({
      summary: summary
    });
  }

  render() {
    return (
      <div className="App">
        <div id="About">
          <h1>Roman Antonov</h1>
          <h2>Modern Software developing</h2>
          <h3>
            <a href="https://upwork.com/fl/romanantonov" target="_blank">
              Upwork Top Rated
            </a>
          </h3>
          <h3>
            <a href="https://www.upwork.com/signup/create-account/client_contact_freelancer?ciphertext=~016b923b0158ef81ae&BYOC" target="_blank">
              Hire me
            </a>
          </h3>
          <h4>romwtb@gmail.com</h4>
        </div>
        <div id="Trigger">
          <i> “What is you most actual technical issue ? I'm ready to solve that.‟</i>
        </div>
        <div id="Solutions">
          Ready solutions cases
          <br />
          <ul>
            <li>Pharmacy mobile application (iOS, Android)</li>
            <li>Real estate development (Web, iOS, Android)</li>
            <li>Beauty salons mobile application (Web, iOS, Android)</li>
            <li>Tinder-style card swipe application (iOS, Android)</li>
          </ul>
        </div>
        <div id="Popular">
          Most popular services
          <br />
          <ul>
            <li>Code assessment and review</li>
            <li>Build cloud server architecture</li>
            <li>Real estate property management system, sync with airbnb</li>
            <li>Parsing data: Alibaba products, Real Estate properties </li>
            <li>People activity emulations</li>
            <li>Push notifications for Web/Mobile applications</li>
            <li>Hybrid application for Web/iOS/Android</li>
          </ul>
        </div>
        <div id="Payments">
          Payment accesabilities: For long-term colloboration i able to recieve payments and tacking my working time with modern software such as upwork.com and hubstaff.com
          Fixed price deals can be covered by paypal transfers or swift transfer services.
        </div>

        <Tech summary={this.state.summary} onSummaryChange={this.onSummaryChange} />
        {/* <Summary summary={this.state.summary} onSummaryChange={this.onSummaryChange} /> */}
        <div id="Contacts">
          Feel free to ask questions.
          <br />
          I will happy to consult you!
          <br />
          E-mail : romwtb@gmail.com
          <br />
          Skype: romwtb@gmail.com
          <br />
          Upwork: <a href="https://upwork.com/fl/romanantonov" target="_blank">https://upwork.com/fl/romanantonov</a>
        </div>
      </div>
    );
  }
}

export default App;
