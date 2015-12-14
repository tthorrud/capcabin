import React from 'react';
import { Button,Carousel,CarouselItem, Collapse, Well, Panel  } from 'react-bootstrap';
import CabinStore from '../stores/CabinStore';


class CabinProfile extends React.Component{
    render(){
        var style = {
            width: "600px"
        }
        var cabin = CabinStore.getCabin(parseInt(this.props.cabinId));
        
        return(
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
               <h1>{cabin.name}</h1>
               <div style={style}>
                <Carousel>
                    <CarouselItem key="1">
                        <img width={900} height={500} alt="900x500" src="/images/trysil.jpg" />
                    </CarouselItem>
                    <CarouselItem key="2">
                        <img width={900} height={500} alt="900x500" src="/images/hemsedal.jpg" />
                    </CarouselItem>
                    <CarouselItem key="3">
                        <img width={900} height={500} alt="900x500" src="/images/hafjell.jpg" />
                    </CarouselItem>
            </Carousel>
            </div>
            <div className="mdl-card__actions mdl-card--border">
                        {cabin.description}
                        </div>
        </div>
);
    }
}
export default CabinProfile;



