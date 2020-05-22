import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getNumbers} from'../actions/getAction';
import {Link } from 'react-router-dom'

function Navbar(props){
  console.log(props);

  

  const styleObjWhite = {
    fontsize: 459,
      color: "#FFFFFF	",
   
}

const styleObjPurple = {
  color: "#000033",

}

useEffect(() => {
  getNumbers();

}, [])

  return(
<header>
       <div className=""></div>
       <nav>
         <h2> 
         <li>  <p style={styleObjWhite}>ERNE COMPUTERS</p>
     

         </li>
           <ul>
             
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li className="cart"><Link to="/cart">
             <ion-icon name="basket"></ion-icon>Cart<span>{props.basketProps.basketNumbers}</span>
                 </Link></li>

           </ul>
         </h2>
       </nav>
     </header>
  );
}

const mapStateToProps = state => ({

  basketProps: state.basketState

})
export default connect(mapStateToProps, {getNumbers} )(Navbar);