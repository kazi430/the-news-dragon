import React from 'react';
import Header from '../pages/Home/Shared/Header/Header';
import Footer from '../pages/Home/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from '../pages/Home/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';


const NewsLayout = () => {
    return (
        <div>
                 <Header></Header>
            <Container>
     
                <Row>
                    <h2>News Details is coming</h2>
                    
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>

             </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;