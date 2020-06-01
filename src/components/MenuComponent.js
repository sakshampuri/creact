import React , {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from "reactstrap";
import Dishdetail from './DishdetailComponent';

class Menu extends Component {

  
    renderDish(dish) {
      if(dish != null){
        return(<Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        );
      }else {
        return(
          <div></div>
        );
      }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
              <div  key={dish.id} className="col-12 col-md-5 m-1">
                <Card
                  onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                      {menu}
                      <div className="col-12 col-md-5 m-1">
                         {this.renderDish(this.props.selectedDish)}
                       </div>
                </div>
            </div>
        );
    }

}

export default Menu;