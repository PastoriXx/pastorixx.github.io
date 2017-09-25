import React from 'react';
import createReactClass  from 'create-react-class';

var HeaderComponent = createReactClass({

  render() {
    return (
        <header className="text-center">
            <div className="container">                 
                <h1>{this.props.data.title}</h1>
            </div>            
        </header>
    );
  }
});

export default HeaderComponent;
