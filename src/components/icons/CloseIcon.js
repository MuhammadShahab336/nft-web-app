import React from 'react';

const CloseIcon = (props) => {
    return (
        <>
            <svg
                width={58}
                height={59}
                viewBox="0 0 58 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <rect y="0.5" width={58} height={58} rx={8} fill="#AD00FF"/>
                <g clipPath="url(#clip0_106_6)">
                    <path
                        d="M31.8226 27.7376L42.8342 14.7041H40.2276L30.6657 26.0215L23.0134 14.7041H14.2041L25.7593 31.8079L14.2041 45.4796H16.8106L26.9162 33.5381L34.9867 45.4796H43.7959L31.8087 27.7376H31.8226ZM28.2404 31.9639L27.0695 30.262L17.7585 16.7038H21.7728L29.2858 27.6383L30.4566 29.3402L40.2276 43.565H36.2133L28.2404 31.9639Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_106_6">
                        <rect
                            width="29.5918"
                            height="30.7755"
                            fill="white"
                            transform="translate(14.2041 14.7041)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </>
    );
};

export default CloseIcon;