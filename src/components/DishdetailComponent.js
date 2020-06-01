import React from 'react';
import { Card, CardBody, CardTitle , ListGroup, ListGroupItem} from "reactstrap";



function RenderComments({comments}) {

    if(comments != null) {
        const commentsRendered = comments.map(
            (comment) => {
                return (
                    <ListGroupItem key = {comments.id} className="list-unstyled">
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </ListGroupItem>
                );
            }
        );
        return (
            <ListGroup>
                {commentsRendered}
            </ListGroup>
        );
    }else {
        return (
            <div>No Comments</div>
        );
    }

} 

function RenderDish({dish}) {
    if(dish != null) {
        return(
            <Card>
                <CardBody>
                    <CardTitle><h4>Comments</h4></CardTitle>
                    <CardBody>
                        <RenderComments comments = {dish.comments} />
                    </CardBody>
                </CardBody>
            </Card>
        );
    }else{
        return(
            <div></div>
        );
    }
}

const Dishdetail = (props) => {
    return (
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish = {props.selectedDish} />
        </div>
    );
}



export default Dishdetail;