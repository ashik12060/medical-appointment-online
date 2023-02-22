import React from 'react';
import {Card, Col, Row } from 'react-bootstrap';
import './CardItem.css';
import tooth1 from '../../../media/images/1 (1).jpg';
import tooth2 from '../../../media/images/teeth2.jpg';
import tooth3 from '../../../media/images/teeth3.jpg';
import tooth4 from '../../../media/images/teeth4.jpg';
import tooth5 from '../../../media/images/teeth5.jpg';
import tooth6 from '../../../media/images/teeth6.jpg';


const CardItem = () => {
    return (
        <>
            <Row xs={1} md={2} lg={3} className="g-4 mx-4">
                <Col>
                    <Card className="card-shadow">
                        <Card.Img variant="top" src={tooth1} />
                        <Card.Body className="text-center">
                            <Card.Title>
                                <h1>Cosmetic Dentristy</h1>
                            </Card.Title>
                            <Card.Text>
                                teeth whitening, veneers, fillings, and implants
                            </Card.Text>


                            <h2>$25</h2>

                        </Card.Body>
                        <div className="button-alignment">
                            <div>
                                <button className="left">Add to Card</button>
                            </div>
                            <div>
                            <button className="right">Learn More</button>

                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-shadow">
                        <Card.Img variant="top" src={tooth2} />
                        <Card.Body className="text-center">
                            <Card.Title><h1>Orthodontics</h1></Card.Title>
                            <Card.Text>
                                teeth whitening, veneers, fillings, and implants
                            </Card.Text>
                            <h2>$30</h2>

                        </Card.Body>
                        <div className="button-alignment">
                            <div>
                                <button className="left">Add to Card</button>
                            </div>
                            <div>
                            <button className="right">Learn More</button>

                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-shadow">
                        <Card.Img variant="top" src={tooth3} />
                        <Card.Body className="text-center">
                            <Card.Title><h1>Oral Hygiene
                            </h1></Card.Title>
                            <Card.Text>
                                teeth whitening, veneers, fillings, and implants
                            </Card.Text>
                            <h2>$50</h2>
                        </Card.Body>
                        <div className="button-alignment">
                            <div>
                                <button className="left">Add to Card</button>
                            </div>
                            <div>
                            <button className="right">Learn More</button>

                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-shadow">
                        <Card.Img variant="top" src={tooth4} />
                        <Card.Body className="text-center">
                            <Card.Title><h1>Dental Treatment</h1></Card.Title>
                            <Card.Text>
                            teeth whitening, veneers, fillings, and implants
                            </Card.Text>
                            <h2>$15</h2>
                        </Card.Body>
                        <div className="button-alignment">
                            <div>
                                <button className="left">Add to Card</button>
                            </div>
                            <div>
                            <button className="right">Learn More</button>

                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-shadow">
                        <Card.Img variant="top" src={tooth5} />
                        <Card.Body className="text-center">
                            <Card.Title><h1>Dental Surgery</h1></Card.Title>
                            <Card.Text>
                            teeth whitening, veneers, fillings, and implants
                            </Card.Text>
                            <h2>$35</h2>
                        </Card.Body>
                        <div className="button-alignment">
                            <div>
                                <button className="left">Add to Card</button>
                            </div>
                            <div>
                            <button className="right">Learn More</button>

                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-shadow">
                        <Card.Img variant="top" src={tooth6} />
                        <Card.Body className="text-center">
                            <Card.Title><h1>Dental Implants</h1></Card.Title>
                            <Card.Text>
                            teeth whitening, veneers, fillings, and implants
                            </Card.Text>
                            <h2>$40</h2>
                        </Card.Body>
                        <div className="button-alignment">
                            <div>
                                <button className="left">Add to Card</button>
                            </div>
                            <div>
                            <button className="right">Learn More</button>

                            </div>
                        </div>
                    </Card>
                </Col>

            </Row>
        </>
    );
};

export default CardItem;