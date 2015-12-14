import React from 'react';
import AuthenticationStore from '../stores/AuthenticationStore';
import connectToStores from 'alt/utils/connectToStores'; 
import CabinStore from '../stores/CabinStore';
import { Button,Carousel,CarouselItem  } from 'react-bootstrap';
import { Router, Route, Link, IndexRoute } from 'react-router';
import ButtonLink from '../components/ButtonLink';


class Home extends React.Component {
    constructor(){
        super();
        CabinStore.fetchCabins();
    }
    static getStores() {
        return [AuthenticationStore, CabinStore];
    }
    static getPropsFromStores() {
        var authStoreState = AuthenticationStore.getState();
        var cabinStoreState = CabinStore.getState();
        return {
            isLoggedIn: authStoreState.isLoggedIn,
            cabins: cabinStoreState.cabins

        }
    }
    render() {

        var style = {
            width: "450px"
        }

        console.log(this.props);
        if(!this.props.isLoggedIn){
        return(
            <h1>Velkommen til CapCabin</h1>
            );

        }
        else{
            return( 
                <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                    <div style={style}>
            <Carousel>
                {this.props.cabins.map((cabin, i) => {
                return (

                          <CarouselItem key={cabin.id}>
                              <img width={600} height={300} alt="900x500" src="/images/gaustablikk.jpg" />
                                  <div className="carousel-caption">
                                    <h3>{cabin.name}</h3>
                                  </div>
                          </CarouselItem>
                              );
                              })}
            </Carousel>
                    </div>
            <div className="mdl-card__actions mdl-card--border">
                <ButtonLink link={"/cabins"} text={"See cabins"} />
                </div>
                </div>
            );
            }
    }
}
Home = connectToStores(Home) 
export default Home;