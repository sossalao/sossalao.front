import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import "./SideBar.css"

const SideBar = () => {
    const { setToken } = useContext(StoreContext);
    return (
        <div className="SideBar">
            <button type="button" onClick={() => setToken(null)}>
                Sair
            </button>
        </div>
    );
};

export default SideBar;
