import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from "reactstrap";

  
    function RenderMenuItem({dish, onClick}) {
      return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
      );
    }

    // function RenderDish(props) {
    //   return(
    //           <Card>
    //               <CardImg top src={props.dish.image} alt={props.dish.name} />
    //               <CardBody>
    //                 <CardTitle>{props.dish.name}</CardTitle>
    //                 <CardText>{props.dish.description}</CardText>
    //               </CardBody>
    //           </Card>
    //   );
    // }


    const Menu = (props) => {

          const menu = props.dishes.map(
            (dish) => {
              return (
                <div  key={dish.id} className="col-12 col-md-5 m-1">
                  <RenderMenuItem dish = {dish} onClick = {props.onClick} />
                </div>
              );
            }
        );

        return (
            <div className="container">
                <div className="row">
                      {menu}
                      <div className="col-12 col-md-5 m-1">
                        {/* <RenderDish dish = {props.selectedDish} /> */}
                      </div>
                </div>
            </div>
        );
    }




export default Menu;