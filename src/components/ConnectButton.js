import React from 'react';
import buttonBg from "@public/button-bg1.svg";
import Link from "next/link";
import { routes } from "@/utils/routes";

const ConnectButton = () => {
    return (
        <>
            <Link
                href={routes.dashboard}
                className="btn bg-transparent border-0 s-36 fw-400 text-white text-uppercase pb-3 px-5 on-hover-zoom d-inline-flex align-items-start btn-svg1"
                style={{
                    '--bg-image': `url(${buttonBg.src})`,
                    // backgroundImage: `url(${buttonBg.src})`,
                    // backgroundPosition: 'center'
                }}
            >
                <span className="">
                    connect
                </span>
            </Link>
        </>
    );
};

export default ConnectButton;