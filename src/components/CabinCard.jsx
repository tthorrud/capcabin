import React from 'react';
import { Button,Carousel,CarouselItem, Collapse, Well, Panel  } from 'react-bootstrap';
import ButtonLink from '../components/ButtonLink';


class CabinCard extends React.Component{
    
    constructor(){
        super();

    }

    render(){
        return(
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <img src="/images/hemsedal.jpg" />
                 <div className="mdl-card__actions mdl-card--border">
                     <p>{this.props.cabin.name}</p>
                        
                <ButtonLink link={"/cabins/"+this.props.cabin.id} text={"Read more"} />
                </div>
            </div>
);
    }
}
export default CabinCard;