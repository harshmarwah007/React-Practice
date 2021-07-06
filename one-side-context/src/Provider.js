

import React,{useState} from 'react';
import ContextPackage from './Context';

const Provider = props =>
{
    const [mission, setmission] = useState({
        mname: "go to Russia",
        agent: "007",
        accept: "Not Accepted"
    });

    return (
        <ContextPackage.Provider
            value={{
                data: mission,
                isMissionAccepted: () =>
                {
                    setmission({...mission, accept: "Accepted"});
                }
        }} >
        
            {props.children}
            {/* it tells the component that there are your children */}
        </ContextPackage.Provider>


    )
}
export default Provider;