import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';

export const Commission = () => {
    const { setToken } = useContext(StoreContext);
    return (
        <div>
            Commission
            <br />
            <button type="button" onClick={() => setToken(null)}>
                Sair
      </button>
        </div>
    );
};
export default Commission;
