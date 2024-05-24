import React, { useSyncExternalStore } from 'react';

//useSyncExternalStore

const useWindowWidth = () => {
    const subscribe = (lis) => {
        window.addEventListener('resize', lis);
        return () => {
            window.removeEventListener('resize', lis);
        };
    };

    const getSnapshot = () => window.innerWidth;

    return useSyncExternalStore(subscribe, getSnapshot);
};

const UseSyncExternalStore = () => {
    const width = useWindowWidth();

    return (
        <h1>Size: {width}</h1>
    );
};

export default UseSyncExternalStore;
