import {useQuery} from '@apollo/client';
import React from 'react';
import { RouteComponentProps } from '@reach/router';
import {Header} from '../components';
import {BookTrips, CartItem} from '../containers';
import {LoadDataContainer} from '../containers/LoadDataContainer';
import {GET_CART_ITEMS} from '../gql/cart';
import {GetCartItems} from './__generated__/GetCartItems';

interface CartProps extends RouteComponentProps {

}

const Cart: React.FC<CartProps> = () => {
  const { data, loading, error } = useQuery<GetCartItems>(
      GET_CART_ITEMS
  );

  return (
      <LoadDataContainer loading={loading} error={error} checkData={false}>
        <>
          <Header>My Cart</Header>
          {data?.cartItems.length === 0 ? (
              <p data-testid="empty-message">No items in your cart</p>
          ) : (
              <>
                {data?.cartItems.map((launchId: any) => (
                    <CartItem key={launchId} launchId={launchId} />
                ))}
                <BookTrips cartItems={data?.cartItems || []} />
              </>
          )}
        </>
      </LoadDataContainer>
  )
}

export default Cart;
