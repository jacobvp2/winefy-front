import React from 'react'
import { Link, useParams } from "react-router-dom";
import Navigation from '../Components/Navigation'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { wineMap } from '../Util/WineMap'


const Landing = () => {
  let { id } = useParams();

    return (
        <div>
            <Navigation />
            <div className="heading2-choice">Let's see what you got!</div>
            <div className='container pt-5'>
           <CardDeck className="justify-content-md-center">
             
              <Card>
                <Card.Body>
                  <Card.Title>{wineMap[id]['red']['name']}</Card.Title>
                  <Card.Text>
                    {wineMap[id]['red']['desc']}
                    <br />
                    <br />
                    {wineMap[id]['red']['why']}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Red Wine</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>{wineMap[id]['white']['name']}</Card.Title>
                  <Card.Text>
                    {wineMap[id]['white']['desc']}
                    <br />
                    <br />
                    {wineMap[id]['white']['why']}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">White Wine</small>
                </Card.Footer>
              </Card>
            </CardDeck>
            
            </div>
            <div className="heading2-choice">Quick Terminology</div>
            <div className="result-text pb-5 container">
            <Row>
            <Col>Acidity: Refers to the liveliness and crispness of the wine; the fresh, tart, and sour attributes of the wine. High acidity makes a wine taste too sharp and sour, and low acidity makes a wine flat with less defined flavors. Higher acidity also makes for a more crisp color, and lower acidity makes for a darker or muddier colored wine.</Col>
            <Col>Body: Describes how heavy or light a wine feels in your mouth; a tactile sensation describing a wines weight and fullness. A wine can be light, medium, or full bodied. Full bodied wines contain the highest alcohol content, and they are fuller in the mouth. Medium bodied wines are a perfect transition for people who want to try light wines with more fullness. Light bodied wines are delicate and lean, and they typically contain the lowest amount of alcohol content.</Col>
            <Col>Dry: Refers to a more bitter wine; opposite of sweet. Dry wines contain no residual sugar or sweetness.</Col>
            <Col>Tannins: The naturally occurring compounds in wine that leave a bitter, dry, and puckering feeling in the mouth; texture is used to describe the quality of tannins. High tannin wines are described as bitter and astringent. Tannins come from four primary sources: the grape skins, grape seeds, grape stems, and the wood barrels used during aging. Red wines typically have stronger tannins than white.</Col>

            </Row>
            
            </div>
         
        </div>
    )
}

export default Landing
