import Image from 'next/image';
import { useRouter } from 'next/router';
import cancelImage from '../public/cancel.png';
import { Card } from '../styles/SuccessPage';

const Cancelled = () => {
    const route = useRouter();

    return (
        <Card>
            <Image
                src={cancelImage}
                alt="cancel"
                width="100"
                height="100"
                responsive="true"
            />
            <h1>Your Order has been Cancelled</h1>
            <button onClick={() => route.push('/')}>Continue Shopping</button>
        </Card>
    );
};

export default Cancelled;
