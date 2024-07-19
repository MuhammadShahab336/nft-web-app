import React from 'react';

const BgEclipseIcon2 = (props) => {
    return (
        <>
            <svg
                width={1920}
                height={468}
                viewBox="0 0 1920 468"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <g filter="url(#filter0_f_6_1544)">
                    <ellipse cx={960} cy={234} rx={960} ry={34} fill="#BB13FE"/>
                </g>
                <defs>
                    <filter
                        id="filter0_f_6_1544"
                        x={-200}
                        y={0}
                        width={2320}
                        height={468}
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
                        <feGaussianBlur
                            stdDeviation={100}
                            result="effect1_foregroundBlur_6_1544"
                        />
                    </filter>
                </defs>
            </svg>

        </>
    );
};

export default BgEclipseIcon2;