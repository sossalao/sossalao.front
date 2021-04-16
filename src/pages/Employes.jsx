import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';

export const Employes = () => {
    const { setToken } = useContext(StoreContext);
    return (
        <div>
            Funcionários
            <br />
            <button type="button" onClick={() => setToken(null)}>
                Sair
      </button>
        </div>
    );
};
export default Employes;
