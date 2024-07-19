import React from 'react';

const BgEclipseIcon = (props) => {
    return (
        <>
            <svg
                width={757}
                height={1495}
                viewBox="0 0 757 1495"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <g filter="url(#filter0_f_2_13)">
                    <circle cx={1353} cy={142} r={503} fill="#BB13FE"/>
                </g>
                <defs>
                    <filter
                        id="filter0_f_2_13"
                        x={0}
                        y={-1211}
                        width={2706}
                        height={2706}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity={0} result="BackgroundImageFix"/>
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur stdDeviation={425} result="effect1_foregroundBlur_2_13"/>
                    </filter>
                </defs>
            </svg>
        </>
    );
};

export default BgEclipseIcon;