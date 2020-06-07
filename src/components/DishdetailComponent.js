import React, {useState} from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    ListGroup,
    CardText,
    BreadcrumbItem,
    Breadcrumb,
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
    Label
} from "reactstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LocalForm, Control, Errors} from 'react-redux-form';
import ModalFooter from "reactstrap/es/ModalFooter";
import {required, maxLength, minLength} from "./ContactComponent";

function RenderComments({comments}) {

    if (comments != null) {
        const commentsRendered = comments.map(
            (comment) => {
                return (
                    <li key={comments.id} className="list-unstyled">
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            }
        );
        return (
            <ListGroup>
                {commentsRendered}
            </ListGroup>
        );
    } else {
        return (
            <div>No Comments</div>
        );
    }

}

function handleSubmit(values) {
    console.log(JSON.stringify(values));
    alert(JSON.stringify(values));
}

function getRatings(n) {
    let a = [];
    for (let i = 1; i <= n; i++)
        a.push(i);
    const r = a.map((i) => {
        return (<option>{i}</option>);
    });
    return (r);
}

function CommentModal({state}) {

    return (
        <>
            <Modal isOpen={state.commentState} toggle={state.toggle}>

                <ModalHeader toggle={state.toggle}>
                    Submit Comment
                </ModalHeader>


                <div className="container">
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>

                        <ModalBody>
                            <Row className={'form-group'}>
                                <Label htmlFor='rating'>Rating</Label>
                                <Control.select model={'.rating'} className={'form-control'} name={'rating'}>
                                    {getRatings(10)}
                                </Control.select>
                            </Row>

                            <Row className={'form-group'}>
                                <Label htmlFor={'name'}>Your Name</Label>
                                <Control.text model={'.name'} className={'form-control'}
                                              placeholder={'Your Name'}
                                              validators={
                                                  {
                                                      required,
                                                      minLength: minLength(2),
                                                      maxLength: maxLength(15),
                                                  }
                                              }/>
                                <Errors model={'.name'} className={'text-danger'}
                                        show={'touched'}
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}/>
                            </Row>
                            <Row className={'form-group'}>
                                <Label htmlFor="message">Comment</Label>
                                <Control.textarea model=".message" id="message" name="message"
                                                  rows="6"
                                                  className="form-control"/>

                            </Row>
                        </ModalBody>

                        <ModalFooter>
                            <Row className={'form-group'}>
                                <Button type={'submit'} color={'primary'}>Submit</Button>
                            </Row>
                        </ModalFooter>

                    </LocalForm>
                </div>


            </Modal>
        </>
    );

}

function RenderDish({dish, comments, state}) {
    if (dish != null) {
        return (
            <Card>
                <CardBody>
                    <CardTitle><h4>Comments</h4></CardTitle>

                    <CardBody>
                        <RenderComments comments={comments}/>
                    </CardBody>

                    <Button outline onClick={state.toggle}>
                        <FontAwesomeIcon icon={['fas', 'edit']} className={'mr-2'}/>
                        Submit Comment
                    </Button>

                </CardBody>
            </Card>
        );
    } else {
        return (
            <>

            </>
        );
    }
}

function RenderDishDetail({dish}) {
    if (dish != null) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <></>
        );
    }
}

const Dishdetail = (props) => {

    const [isCommentModalOpen, toggleModal] = useState(false);

    const toggle = () => toggleModal(!isCommentModalOpen);

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h4>Menu</h4>
                </div>
            </div>
            <div className="row">

                <div className="col-12 col-md-5 m-1">
                    <RenderDishDetail dish={props.selectedDish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.selectedDish} comments={props.comments}
                                state={{commentState: isCommentModalOpen, toggle}}/>
                </div>

            </div>

            <CommentModal state={{commentState: isCommentModalOpen, toggle}}/>

        </div>
    );
}


export default Dishdetail;