import React from 'react'
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import CardColumns from 'react-bootstrap/CardColumns';
import Col from 'react-bootstrap/Col';
import Navigation from '../Components/Navigation'
import { wines } from '../Util/WineMap';

const Wines = () => {
    return (
        <div>
            <Navigation/>
            <div className="container">
            <div className="heading2-choice pb-5">White Wines</div>
            <CardColumns className='justify-content-md-center flex-wrap'>
                {Object.entries(wines).filter(([name, info]) => info['color'] == 'White Wine').map(([name, info]) => 
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{info['color']}</Card.Subtitle>
                        <Card.Text>{info['desc']}</Card.Text>
                    </Card.Body>
                </Card>)}
            </CardColumns>
            <div className="heading2-choice pb-5">Red Wines</div>
            <CardColumns className='justify-content-md-center flex-wrap'>
                {Object.entries(wines).filter(([name, info]) => info['color'] == 'Red Wine').map(([name, info]) => 
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{info['color']}</Card.Subtitle>
                        <Card.Text>{info['desc']}</Card.Text>
                    </Card.Body>
                </Card>)}
            </CardColumns>
            
            <div className="heading2-choice pb-5">Quick Terminology</div>
            <div className="result-text pb-5">
            <Row>
            <Col>Acidity: Refers to the liveliness and crispness of the wine; the fresh, tart, and sour attributes of the wine. High acidity makes a wine taste too sharp and sour, and low acidity makes a wine flat with less defined flavors. Higher acidity also makes for a more crisp color, and lower acidity makes for a darker or muddier colored wine.</Col>
            <Col>Body: Describes how heavy or light a wine feels in your mouth; a tactile sensation describing a wines weight and fullness. A wine can be light, medium, or full bodied. Full bodied wines contain the highest alcohol content, and they are fuller in the mouth. Medium bodied wines are a perfect transition for people who want to try light wines with more fullness. Light bodied wines are delicate and lean, and they typically contain the lowest amount of alcohol content.</Col>
            <Col>Dry: Refers to a more bitter wine; opposite of sweet. Dry wines contain no residual sugar or sweetness.</Col>
            <Col>Tannins: The naturally occurring compounds in wine that leave a bitter, dry, and puckering feeling in the mouth; texture is used to describe the quality of tannins. High tannin wines are described as bitter and astringent. Tannins come from four primary sources: the grape skins, grape seeds, grape stems, and the wood barrels used during aging. Red wines typically have stronger tannins than white.</Col>

            </Row>
            
            </div>
            </div>
        </div>
    )
}

export default Wines
