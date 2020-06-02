import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Switch, Route, Redirect} from 'react-router-dom';
import Contact from "./ContactComponent";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null,
        comments : COMMENTS,
        promotions : PROMOTIONS,
        leaders : LEADERS
    };
    this.HomePage = this.HomePage.bind(this);
  }
 
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

     HomePage() {
        return(
            <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }

  render() {
    return (
      <div>

            <Header/>

            <Switch>
                <Route path='/home' component={this.HomePage}/>
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />}/>
                <Route path='/contactus' component={Contact}/>
                <Redirect to="/menu"/>
            </Switch>

            {/*<div className="container">*/}
            {/*    <div className="row">*/}
            {/*        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} selectedDish={this.state.dishes.filter((dish) => (dish.id === this.state.selectedDish))[0]} />*/}
            {/*        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="mt-3 ">
                <Footer />
            </div>

      </div>
    );
  }
}

export default Main;