'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import mountain from '@public/bg1.jpeg'
import avatar from '@public/avatar5.svg'
import BgEclipseIcon from "@/components/icons/BgEclipseIcon";
import BgEclipseIcon2 from "@/components/icons/BgEclipseIcon2";
import ConnectButton from "@/components/ConnectButton";
import WelcomeModal from "@/components/WelcomeModal";
import { AnimatePresence } from "framer-motion";
import useWindowDimensions from "@/hooks/useWindowDimensions";


export default function Home() {
    const [isViewModal, setIsViewModal] = useState(false)
    const [IsViewLogo, setIsViewLogo] = useState(false)
    const { width, height } = useWindowDimensions()


    return (
        <>
            <div className="bg-image-fixed w-full h-full overflow-hidden position-relative" style={{ backgroundImage: `url(${mountain.src})` }}>
                <div
                    className="d-flex flex-column w-100 h-100 align-items-center justify-content-center bg-overlay position-relative"
                    style={{
                        zIndex: 10,
                    }}
                >
                    <BgEclipseIcon
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: '-30px',
                            height: '100vh',
                        }}
                    />
                    <BgEclipseIcon2
                        style={{
                            position: 'absolute',
                            top: '70%',
                            right: 0,
                            left: 0,
                            width: '100%'
                        }}
                    />
                    {IsViewLogo && (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Image
                                alt="Mountains"
                                // Importing an image will
                                // automatically set the width and height
                                src={avatar}
                                sizes="100vw"
                                className="image-shadow"
                                priority={true}
                                // Make the image display full width
                                style={{
                                    width: '22.5rem',
                                    height: 'auto',
                                }}
                            />
                        </div>
                    )}

                    {/* <div style={{ position: 'relative', width: 600, height: 600 }}>
                        <Image
                            alt="Avatar"
                            src={avatar}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </div> */}
                    {IsViewLogo && <ConnectButton />}


                </div>


                {!IsViewLogo && (
                    <div className="position-absolute mobile-screen" style={{ top: 0, left: 0, zIndex: 9, width: '100%', height: '100%' }}>
                        <video
                            width={width} height={'100%'} muted loop autoPlay preload="none" style={{ objectFit: 'contain' }}
                            onEnded={() => setIsViewModal(true)}
                        >
                            <source src="/video.mp4" type="video/mp4" />

                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    <WelcomeModal
                        showModal={isViewModal}
                        closeModal={() => {
                            setIsViewModal(false)
                            setIsViewLogo(true)
                        }}
                        openModal={() => {
                            setIsViewModal(true)
                            setTimeout(() => setIsViewLogo(true), 500)

                        }}
                    />
                </AnimatePresence>


                {/* {isViewModal && (
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ zIndex: 12 }}>
                        <div className="col-9">
                            <div className="border border-2 border-primary p-md-5 p-3 rounded-5" style={{ background: '#00000099', backdropFilter: 'blur(8px)' }} >
                                <div className="text-center px-md-3 py-md-5">
                                    <a className="fw-400-gothic-without-ls text-white s-20 lh-18 text-decoration-none">
                                        <span className="text-primary s-21">Disclaimer:</span>
                                        &nbsp;
                                        Welcome to the DankDealerz Collection; we are a cannabis driven NFT project that offers cannabis merch rewards to holders who “Mint 2 Earn”. We are NOT solely a reward project and do not promise every holder who mints will receive a reward. There is a minting criteria that a holder MUST meet in order to receive a reward. Tokens earned by staking gives holders an added perk to POTENTIALLY receive more rewards. We DO NOT promise every holder who mints will earn a reward; only to those that meet the specified requirements. Each NFT minted will be accounted for when rewards are redeemed. Rewards will be on a first come first serve basis and made available until the collection is minted out. Raffles, auctions, and any form of giveaways will be made available for each holder to participate in; please understand that we strive to keep this project fair, reasonable and fun for our community. Welcome and thank you for considering the DankDealerz project.
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}

            </div>



        </>
    );
}
