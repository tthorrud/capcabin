import React from 'react';
import CabinStore from '../stores/CabinStore';
import AltContainer from 'alt-container';
import AllCabins from '../components/AllCabins';
import AuthenticationStore from '../stores/AuthenticationStore';


class Cabins extends React.Component{

    componentDidMount() {
        CabinStore.fetchCabins();
    }

    render(){
        return(
            <div>
                <h1>Cabins</h1>
                <AltContainer store={CabinStore}>
                    <AllCabins  />
                </AltContainer>
            </div>
            );
    }
}

export default Cabins;