import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { NavStyles, NavItems } from '../styles/NavStyles';
import Cart from './Cart';
import { useStateContext } from '../lib/context';

const Nav = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

    return (
        <NavStyles>
            <Link href={'/'}>Rubber Ducky</Link>
            <NavItems>
                <div onClick={() => setShowCart(true)}>
                    {totalQuantities > 0 && <span>{totalQuantities}</span>}
                    <FiShoppingBag />
                    <h3>Cart</h3>
                </div>
            </NavItems>
            {showCart && <Cart />}
        </NavStyles>
    );
};

export default Nav;
