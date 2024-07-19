import React from 'react';
import buttonBg from "@public/button-bg1.svg";
import Link from "next/link";
import {routes} from "@/utils/routes";

const ConnectButton = () => {
    return (
        <>
            <Link
                href={routes.dashboard}
                className="btn bg-transparent border-0 bg-image position-relative s-36 fw-400 text-white text-uppercase py-3 px-5 on-hover-zoom"
                style={{backgroundImage: `url(${buttonBg.src})`, top: '-100px'}}
            >
                    <span className="mb-2 d-block">
                        connect
                    </span>
            </Link>
        </>
    );
};

export default ConnectButton;