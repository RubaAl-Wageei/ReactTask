
import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


class Cards extends React.Component{
    render(){
        return(
            <div className="container" >
                <CardGroup style={{ width: '400px' , display:'flex' , flexDirection:'row' , justifyContent:'space-between' }} >
                    <Card>
                        <Card.Img variant="top" style={{ width: '300px' }} src={this.props.bookImage} />
                        <Card.Body>
                            <Card.Title>{this.props.bookTitle}</Card.Title>
                            <Card.Title>{'Written By'}{this.props.author}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}

export default Cards;