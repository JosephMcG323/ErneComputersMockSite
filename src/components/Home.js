import React, {useState} from 'react';

import case1 from '../images/case1.png';
import case2 from '../images/case2.png';
import case3 from '../images/case3.png';
import case4 from '../images/case4.png';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

    //className = "addToCart NZXT H510 Case"
const Home = (props) => {
    console.log(props);
return(

    <div className="container">

        <div className = "image">
            <img src ={case1} alt = "Asus 10T300" />
            <h3>Asus 10T300
            </h3>
            <h3>£50,00
            </h3>
            <a onClick ={() => props.addBasket('case1')} href= "#">Add to Cart</a>
        </div>
        
        <div className = "image">
        <img src ={case2} alt = "NZXT H510 Case" />
            <h3>NZXT H510 Case
            </h3>
            <h3>£150,00
            </h3>
            <a  onClick ={() => props.addBasket('case2')}  href= "#">Add to Cart</a>
        </div>


        <div className = "image">
        <img src ={case3} alt = "case3" />
            <h3>Corsair SPEC-DELTA
            </h3>
            <h3>£90,00
            </h3>
            <a onClick ={() => props.addBasket('case3')}  href= "#">Add to Cart</a>
        </div>

        <div className = "image">
        <img src ={case4} alt = "SPEC-ALPHA-200" />
            <h3>Corsair SPEC-ALPHA-200
            </h3>
            <h3>£110,00
            </h3>
            <a onClick ={() => props.addBasket('case4')}   href= "#">Add to Cart</a>
        </div>




    </div>



);


}

export default connect(null, {addBasket} )(Home);