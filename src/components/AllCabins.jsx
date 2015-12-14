import React from 'react';
import CabinStore from '../stores/CabinStore';
import CabinCard from '../components/CabinCard';

class AllCabins extends React.Component{
    

    render() {

            if (this.props.errorMessage) {
                return (
                  <div>{this.props.errorMessage}</div>
                );
            }
            if (CabinStore.isLoading()) {
                return (
                  <div>
                    <h1>Loading</h1>
                  </div>
                );
            }

            return (
            <div>
                  {this.props.cabins.map((cabin, i) => {
                      return (
                          <CabinCard key={i} cabin={cabin} />
                     
                  );
                  })}
             </div>
            );
          }
        
  
          
      
}

export default AllCabins;