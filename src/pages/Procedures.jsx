import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';

export const Procedures = () => {
    const { setToken } = useContext(StoreContext);
    return (
        <div>
            Procedures
            <br />
            <button type="button" onClick={() => setToken(null)}>
                Sair
      </button>
        </div>
    );
};
export default Procedures;
