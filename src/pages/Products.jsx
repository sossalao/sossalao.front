import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';

export const Products = () => {
    const { setToken } = useContext(StoreContext);
    return (
        <div>
            Products
            <br />
            <button type="button" onClick={() => setToken(null)}>
                Sair
      </button>
        </div>
    );
};
export default Products;