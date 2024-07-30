import React from 'react'
import logo from "@public/logo.svg";
import buttonBg from "@public/button-bg2.svg";
import Link from "next/link";
import Image from 'next/image';
import { routes } from "@/utils/routes";

export const HeaderTopBar = () => {
    return (
        <>
            <div className="bg-header-bar">
                <div className="container py-2">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-auto col-12 text-center">
                            <h1 className="text-white fw-700-without-ls mb-0">
                                ALIENZ STUDIO
                            </h1>
                        </div>
                        <div className="col-auto me-md-auto">
                            <div style={{ position: 'relative', width: '6.25rem', height: '6.25rem' }}>
                                <Image
                                    alt="Logo"
                                    src={logo}
                                    fill
                                    sizes="100vw"
                                    style={{
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-auto">
                            <Link
                                href={routes.dashboard}
                                className="btn bg-transparent border-0 bg-image s-16 fw-400 text-white text-uppercase py-2 px-4 btn-svg1 on-hover-zoom"
                                style={{
                                    '--bg-image': `url(${buttonBg.src})`,
                                }}
                            >
                                <span className="my-1 px-1">
                                    ONBXY2N
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
