import React, { memo } from 'react'
import Image from 'next/image';
import CloseIcon from "@/components/icons/CloseIcon";
import avatar from "@public/avatar2.png";
import MenuIcon from "@/components/icons/MenuIcon";



const Header = (props) => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <MenuIcon />
                    </div>
                    <div className="col-auto">
                        <h1 className="text-white fw-700 text-uppercase mb-0">{props.title}</h1>
                    </div>
                    <div className="col-auto position-relative">
                        <div className="row g-4 align-items-center justify-content-between">
                            <div className="col-auto">
                                <div style={{ position: 'relative', width: 80, height: 80 }}>
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
                                        position: 'absolute',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Header)