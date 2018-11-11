import React from 'react';
import{
Navbar,
NavbarBrand,
Badge
} from 'reactstrap'
import { connect } from 'react-redux';

const NavBar = ({totalCounters}) => {
    return ( 
        <div style={{direction:'rtl'}}>
            <Navbar color='dark' dark expand='md'>
                <NavbarBrand href='/'>سبد خرید</NavbarBrand>
                <Badge color='info' pill className='m-2'>
                    {totalCounters}
                </Badge>
            </Navbar>
        </div>
    );
}
 
export default connect(state=>{
    return{
        totalCounters :state.filter(c=>c.value >0).length
    }
})(NavBar); 