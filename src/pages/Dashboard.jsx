import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';

const Dashboard = () => {
    const { setToken } = useContext(StoreContext);
    return (
        <div>
            Dashboard
            <br />
            <button type="button" onClick={() => setToken(null)}>
                Sair
      </button>
        </div>
    );
};
export default Dashboard;
