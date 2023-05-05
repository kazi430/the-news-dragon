import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>terms & conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Reiciendis quaerat ad aspernatur accusamus laborum,
                 voluptas natus itaque consequuntur iste dolorum.</p>

                 <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;