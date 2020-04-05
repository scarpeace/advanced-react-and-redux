import React, {Component} from 'react'
import requireAuth from './requireAuth'

class Feature extends Component{
  render(){
    return(
      <div>
        This is the Feature page
      </div>
    );
  };
};

export default requireAuth(Feature);