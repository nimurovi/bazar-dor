import React from 'react';
import { ClipLoader } from "react-spinners";
const loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <ClipLoader />
        </div>
    );
};

export default loading;