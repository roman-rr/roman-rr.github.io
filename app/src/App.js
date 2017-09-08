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
        <Tech summary={this.state.summary} onSummaryChange={this.onSummaryChange} />
        <Summary summary={this.state.summary} onSummaryChange={this.onSummaryChange} />
      </div>
    );
  }
}

export default App;
