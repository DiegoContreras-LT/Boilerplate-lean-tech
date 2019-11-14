import {useEffect, useState} from "react";
import {breakPoint} from "../env";

export const useDevice = () => {
    const [device, setDevice] = useState(null);

    const updateDimensions = () => {
        let _device = 'desktop';
        if (window.innerWidth <= breakPoint.DESKTOP)
            _device = 'table';

        if (window.innerWidth <= breakPoint.TABLET)
            _device = 'phone';

        setDevice(_device);
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions)
    }, []);

    return device;
};
