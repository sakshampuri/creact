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
import {addComment, fetchComments, fetchDishes, fetchPromos} from "../redux/ActionCreators";
import {actions} from "react-redux-form";

const mapStateToProps = (state) => (
   {
      dishes : state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
  }
);

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes(dispatch))},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
    fetchComments: () => {dispatch(fetchComments(dispatch))},
    fetchPromos: () => {dispatch(fetchPromos(dispatch))},
});

class Main extends Component {

  constructor(props) {
    super(props);
    this.HomePage = this.HomePage.bind(this);
  }

  componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
  }

    HomePage() {
        return(
            <Home
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading = {this.props.dishes.isLoading}
                dishesErrMess = {this.props.dishes.errMsg}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                promosLoading = {this.props.promotions.isLoading}
                promosErrMess = {this.props.promotions.errMsg}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }

  render() {

      const DishWithId = ({match}) => {
          return(
              <DishDetail selectedDish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                          isLoading = {this.props.dishes.isLoading}
                          errMess = {this.props.dishes.errMsg}
                          commentsErrMess = {this.props.comments.errMsg}
                          addComment ={this.props.addComment}/>
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
                <Route path='/contactus' component={
                    () => <Contact resetFeedbackForm = {this.props.resetFeedbackForm}/>
                }/>
                <Redirect to="/home"/>
            </Switch>

            <div className="mt-3 ">
                <Footer />
            </div>

      </div>

    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));