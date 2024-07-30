'use client'
import React, { useState, memo } from 'react'
import Image from 'next/image';
import CloseIcon from "@/components/icons/CloseIcon";
import avatar from "@public/avatar2.png";
import MenuIcon from "@/components/icons/MenuIcon";
import { Offcanvas } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from '@/utils/routes';



const Header = (props) => {
    const pathname = usePathname()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    console.log('pathname', pathname)
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-11">
                        <div className="row g-0 justify-content-between align-items-center py-4 position-relative">
                            <div className="col-auto">
                                <MenuIcon
                                    style={{
                                        width: '3.75rem'
                                    }}
                                    onClick={handleShow}
                                    type="button"
                                />
                            </div>
                            <div className="col-auto">
                                <h1 className="text-white fw-700 text-uppercase mb-0">{props.title}</h1>
                            </div>
                            <div className="col-auto">
                                <div className="invisible">
                                    <MenuIcon
                                        style={{
                                            with: 60
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="position-absolute w-auto end-0">
                                <div className="row gx-3 align-items-center justify-content-between">
                                    <div className="col-auto">
                                        <div style={{ position: 'relative', width: '5rem', height: '5rem' }}>
                                            <Image
                                                alt="Avatar"
                                                src={avatar}
                                                fill
                                                sizes="100vw"
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <CloseIcon
                                            style={{
                                                width: 30,
                                                height: 30,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <Offcanvas show={show} onHide={handleClose} className="bg-dark" style={{ width: '100%' }}>
                <Offcanvas.Header className='justify-content-end'>
                    <button
                        type="button"
                        class="btn-close m-3"
                        style={{
                            filter: 'invert(1)',
                            scale: '1.5',
                        }}
                        onClick={handleClose}
                    />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                            <ul class="nav flex-column custom-link">
                                <li class="nav-item">
                                    <Link
                                        href={routes.dashboard}
                                        class={`nav-link fw-400 text-capatalize ${pathname == routes.dashboard ? 'active' : ''}`}
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        href={routes.mint}
                                        class={`nav-link fw-400 text-capitalize ${pathname == routes.mint ? 'active' : ''}`}
                                    >
                                        Mint
                                    </Link>
                                    <Link
                                        href={routes.rewards}
                                        class={`nav-link fw-400 text-capatalize ${pathname == routes.rewards ? 'active' : ''}`}
                                    >
                                        Rewards
                                    </Link>
                                    <Link
                                        href={routes.stack}
                                        class={`nav-link fw-400 text-capatalize ${pathname == routes.stack ? 'active' : ''}`}
                                    >
                                        Stacke
                                    </Link>
                                    <Link
                                        href={routes.gallery}
                                        class={`nav-link fw-400 text-capatalize ${pathname == routes.gallery ? 'active' : ''}`}
                                    >
                                        Gallery
                                    </Link>
                                    <Link
                                        href={routes.air}
                                        class={`nav-link fw-400 text-capatalize ${pathname == routes.air ? 'active' : ''}`}
                                    >
                                        Air
                                    </Link>
                                    <Link
                                        href={routes.stack}
                                        class={`nav-link fw-400 text-capatalize ${pathname == routes.stack ? 'active' : ''}`}
                                    >
                                        Stack
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas >
        </>
    )
}

export default memo(Header)