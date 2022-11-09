import React from 'react';

const FeatureList = ({ feature }) => {
    const { name } = feature;
    return (
        <div>
            <li>{name}</li>
        </div>
    );
};

export default FeatureList;