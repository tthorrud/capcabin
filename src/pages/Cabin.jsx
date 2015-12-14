import React from 'react';
import CabinStore from '../stores/CabinStore';
import AltContainer from 'alt-container';
import CabinProfile from '../components/CabinProfile';



class Cabin extends React.Component{
    
   

    render(){
       
                
        return(
            <div>
                    <CabinProfile cabinId={this.props.params.cabinId} />
                
            </div>
                   
            
            );
        }
}

export default Cabin;

