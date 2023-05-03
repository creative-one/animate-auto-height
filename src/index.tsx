import React, {FC, useRef, useState, useEffect} from 'react';

export interface AnimateAutoHeightProps {
    children: any;
    transitionDuration?: number;
    transitionDelay?: number;
    className?: string;
}

const AnimateAutoHeight: FC<AnimateAutoHeightProps> = ({
   children,
   transitionDuration = 250,
   transitionDelay = 0,
   className= "",
   ...others
}) => {
    const mount = useRef(false);
    const canSet = useRef(true);
    const [height, setHeight] = useState(50);
    const [overflow, setOverflow] = useState('');
    const innerRef = useRef();

    useEffect(() => {
        mount.current = true;
        const updateHeight = (e) => {
            const element = e[0];
            if (element.target && canSet.current) {
                canSet.current = false;
                setHeight(element.borderBoxSize[0].clientHeight);
                setOverflow('hidden');

                setTimeout(() => {
                    setOverflow('');
                    canSet.current = true;
                }, transitionDelay);
            }
        };

        // eslint-disable-next-line no-undef
        const ro = new ResizeObserver(updateHeight);

        if (innerRef.current) {
            ro.observe(innerRef.current, {box: 'border-box'});
        }

        return () => {
            if (innerRef.current) {
                ro.unobserve(innerRef.current);
            }
        };
    }, [innerRef]);

    return (
        <div
            {...others}
            className={`dhsv-animate-auto-height ${
                className ? className : ''
            }`}
            style={{
                width: '100%',
                overflow,
                height,
                transitionDuration: mount.current
                    ? transitionDuration + 'ms'
                    : 0,
                transitionDelay: transitionDelay + 'ms',
            }}
        >
            <div ref={innerRef}>{children}</div>
        </div>
    );
};

export default AnimateAutoHeight;
