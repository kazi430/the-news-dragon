import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FaGithub, FaGoogle,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../Qzone/Qzone';
import bg from '../../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant="primary"> <FaGoogle />Login With Google</Button>
            <Button variant="secondary"><FaGithub/>Login With GitHub</Button>
            <div>
                <h4 className='mt-4'>Find on us</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/>facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/>twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/>instagram</ListGroup.Item>
                   
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;