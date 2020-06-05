import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Contact from "./ContactComponent";
import {connect} from 'react-redux';


const mapStateToProps = state => {
  return {
      dishes : state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
  }
};

class Main extends Component {

  constructor(props) {
    super(props);
    this.HomePage = this.HomePage.bind(this);
  }

     HomePage() {
        return(
            <Home
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }

  render() {

      const DishWithId = ({match}) => {
          return(
              <DishDetail selectedDish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
          );
      };

    return (

      <div>

            <Header/>

            <Switch>
                <Route path='/home' component={this.HomePage}/>
                <Route path='/aboutus' render={() => <About leaders = {this.props.leaders} />} />
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route path='/contactus' component={Contact}/>
                <Redirect to="/home"/>
            </Switch>

            <div className="mt-3 ">
                <Footer />
            </div>

      </div>

    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));