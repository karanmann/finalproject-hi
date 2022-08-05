import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { NavStyles, NavItems } from '../styles/NavStyles';
const Nav = () => {
    return (
        <NavStyles>
            <Link href={'/'}>Rubber Ducky</Link>
            <NavItems>
                <div>
                    <FiShoppingBag />
                    <h3>Cart</h3>
                </div>
            </NavItems>
        </NavStyles>
    );
};

export default Nav;
