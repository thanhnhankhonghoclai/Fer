import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';
 

    function RenderDish({dish}) {

        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({comments}) {

        const cmts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                        -- {comment.author} , &nbsp; {new Intl.DateTimeFormat('en-US', { month: "long", day: "numeric", year: "numeric" }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })

        if (comments == null) {
            return <div></div>
        } else return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmts}
                </ul>
            </div>
        )
    }


    const DishDetail= (props) => {
        

        if (props.dish == null) {
            return <div></div>;
        }

        return (
            <div className='container'>
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name }</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name }</h3>
                    <hr />
                </div>                
            </div>
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
    }


export default DishDetail;