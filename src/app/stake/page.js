'use client'
import Header from "@/components/Header";
import { HeaderTopBar } from "@/components/HeaderTopBar";
import Image from "next/image";
import stars from "@public/star2.svg"
import Coins from "@public/note.svg";
import nftCoins from "@public/nft-coin.svg";
import nftCoins2 from "@public/nft-coin2.svg";
import dollars from "@public/dollars.svg";
import avatar from "@public/avatar.svg";
import bgShadow from "@public/shadow3.svg";
import eclipseImage from "@public/ellipse-stack.svg";
import useWindowDimensions from "@/hooks/useWindowDimensions";


export default function Stack() {
    const { width } = useWindowDimensions()
    console.log('width', width)
    return (
        <>
            <div className="bg-image-fixed w-100" style={{ backgroundImage: `url(${stars.src})`, backgroundPosition: 'bottom' }}>
                <div className="bg-overlay-staked min-h-full w-100" style={{ '--bg-image': `url(${bgShadow.src})`, '--eclipse-image': `url(${eclipseImage.src})`, }}>


                    <div className="position-relative" style={{ zIndex: 2 }}>
                        <HeaderTopBar />
                        <Header title="Stack" />

                        <div className="container mt-5 pt-5">
                            <div className="row g-5 justify-content-between align-items-center row-cols-lg-2 row-cols-1">
                                <div className="col ps-lg-5 align-self-stretch">
                                    <div className="border border-success rounded-20 bg-grey-dark p-4 position-relative h-100 card-blur">
                                        <div
                                            className="position-absolute"
                                            style={{
                                                bottom: width > 600 ? '45%' : '78%',
                                                left: width > 600 ? '-35px' : '-16px',
                                            }}
                                        >
                                            <div style={{ position: 'relative', width: width > 600 ? 160 : 100, height: width > 600 ? 160 : 100 }}>
                                                <Image
                                                    alt="avatar"
                                                    src={avatar}
                                                    fill
                                                    sizes="100vw"
                                                    style={{
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row gx-0 align-items-end h-100">
                                            <div className="col-12">
                                                <h1 className="text-white text-lg-end text-md-center fw-600-without-ls s-38 me-lg-4">
                                                    Claimable Rewards
                                                </h1>
                                            </div>
                                            <div className="col-6">
                                                <h1 className="text-white fw-600-without-ls mb-0 s-38">
                                                    AS Token
                                                </h1>
                                            </div>
                                            <div className="col">
                                                <h1 className="text-primary text-start fw-400-nofont s-48 lh-1 mb-0">
                                                    5,000
                                                </h1>
                                            </div>
                                        </div>
                                        <div
                                            className="position-absolute"
                                            style={{
                                                bottom: width > 600 ? -35 : -32,
                                                right: width > 600 ? -70 : -53,
                                            }}
                                        >
                                            <div style={{ position: 'relative', width: width > 600 ? 170 : 150, height: width > 600 ? 200 : 150 }}>
                                                <Image
                                                    alt="dollars"
                                                    src={dollars}
                                                    fill
                                                    sizes="100vw"
                                                    style={{
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col pe-lg-5 align-self-stretch">
                                    <div className="border border-success rounded-20 bg-grey-dark p-4 position-relative h-100 card-blur">
                                        <div className="row gx-0 align-items-end h-100">
                                            <div className="col-12">
                                                <h1 className="text-white text-center fw-600-without-ls s-38">
                                                    Current Balance
                                                </h1>
                                            </div>
                                            <div className="col-6">
                                                <h1 className="text-white fw-600-without-ls mb-0 s-38">
                                                    AS Token
                                                </h1>
                                            </div>
                                            <div className="col">
                                                <h1 className="text-primary text-start fw-400-nofont s-48 lh-1 mb-0">
                                                    78,000
                                                </h1>
                                            </div>
                                        </div>
                                        <div
                                            className="position-absolute"
                                            style={{
                                                bottom: width > 600 ? -35 : -32,
                                                right: width > 600 ? -70 : -53,
                                            }}
                                        >
                                            <div style={{ position: 'relative', width: width > 600 ? 170 : 150, height: width > 600 ? 200 : 150 }}>
                                                <Image
                                                    alt="dollars"
                                                    src={dollars}
                                                    fill
                                                    sizes="100vw"
                                                    style={{
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container mt-5 pt-5">
                            <div className="row g-5 justify-content-between align-items-center row-cols-lg-2 row-cols-1">
                                <div className="col px-md-5 align-self-stretch">
                                    <div className="border border-primary rounded-20 bg-grey-dark p-4 position-relative h-100 card-blur">
                                        <div className="row gx-2 align-items-center h-100">
                                            <div className="col-4">
                                                <h2 className="text-white fw-900 mb-0">
                                                    Dank
                                                    Dealerz
                                                </h2>
                                            </div>
                                            <div className="col-auto align-self-stretch d-flex">
                                                <div class="vr bg-white " style={{ opacity: 0.8 }} />
                                            </div>
                                            <div className="col text-center">
                                                <h2 className="text-success fw-400-gothic-without-ls mb-0 lh-1">
                                                    10 $AS Token
                                                </h2>
                                                <p className="text-white fw-400-gothic-without-ls mb-0">
                                                    per NFT staked
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="position-absolute"
                                            style={{
                                                bottom: width > 600 ? -40 : -22,
                                                right: width > 600 ? -80 : -22,
                                            }}
                                        >
                                            <div style={{ position: 'relative', width: width > 600 ? 150 : 100, height: width > 600 ? 150 : 100 }}>
                                                <Image
                                                    alt="Coins"
                                                    src={nftCoins2}
                                                    fill
                                                    sizes="100vw"
                                                    style={{
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col px-md-5 align-self-stretch">
                                    <div className="border border-primary rounded-20 bg-grey-dark p-4 position-relative h-100 card-blur">
                                        <div className="row gx-2 align-items-center h-100">
                                            <div className="col-4">
                                                <h2 className="text-white fw-900 mb-0">
                                                    1.1 Dank
                                                    Dealerz
                                                </h2>
                                            </div>
                                            <div className="col-auto align-self-stretch d-flex">
                                                <div class="vr bg-white " style={{ opacity: 0.8 }} />
                                            </div>
                                            <div className="col text-center">
                                                <h2 className="text-success fw-400-gothic-without-ls mb-0 lh-1">
                                                    10 $AS Token
                                                </h2>
                                                <p className="text-white fw-400-gothic-without-ls mb-0">
                                                    per NFT staked
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="position-absolute"
                                            style={{
                                                bottom: width > 600 ? -40 : -22,
                                                right: width > 600 ? -80 : -22,
                                            }}
                                        >
                                            <div style={{ position: 'relative', width: width > 600 ? 150 : 100, height: width > 600 ? 150 : 100 }}>
                                                <Image
                                                    alt="Coins"
                                                    src={nftCoins2}
                                                    fill
                                                    sizes="100vw"
                                                    style={{
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="container mt-5 pt-5 pb-5">
                            <div className="row g-5 justify-content-between align-items-center row-cols-lg-3">
                                <div className="col pe-md-5 align-self-stretch">
                                    <div className="border border-success rounded-20 bg-grey-dark p-4 position-relative h-100 card-blur">
                                        <div className="row gx-5 align-items-center h-100">
                                            <div className="col-6">
                                                <h3 className="text-white fw-600-without-ls mb-0">
                                                    Staked
                                                    Amount
                                                </h3>
                                            </div>
                                            <div className="col-auto">
                                                <h1 className="text-primary fw-400-nofont s-52 lh-1 mt-3 mb-0">
                                                    35
                                                </h1>
                                            </div>
                                        </div>
                                        <div
                                            className="position-absolute"
                                            style={{
                                                bottom: width > 600 ? -30 : -44,
                                                right: width > 600 ? -100 : -64,
                                            }}
                                        >
                                            <div style={{ position: 'relative', width: width > 600 ? 170 : 140, height: width > 600 ? 200 : 140 }}>
                                                <Image
                                                    alt="Coins"
                                                    src={Coins}
                                                    fill
                                                    sizes="100vw"
                                                    style={{
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col pe-md-5 align-self-stretch">
                                    <div className="border border-success rounded-20 bg-grey-dark p-4 position-relative h-100 card-blur">
                                        <div className="row gx-5 align-items-center h-100">
                                            <div className="col-6">
                                                <h3 className="text-white fw-600-without-ls mb-0">
                                                    Un Staked
                                                    Amount
                                                </h3>
                                            </div>
                                            <div className="col-auto">
                                                <h1 className="text-primary fw-400-nofont s-52 lh-1 mt-3 mb-0">
                                                    15
                                                </h1>
                                            </div>
                                        </div>
                                        <div
                                            className="position-absolute"
                                            style={{
                                                bottom: width > 600 ? -30 : -44,
                                                right: width > 600 ? -100 : -64,
                                            }}
                                        >
                                            <div style={{ position: 'relative', width: width > 600 ? 170 : 140, height: width > 600 ? 170 : 140 }}>
                                                <Image
                                                    alt="Coins"
                                                    src={Coins}
                                                    fill
                                                    sizes="100vw"
                                                    style={{
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col align-self-stretch">
                                    <div className="border border-success rounded-20 bg-grey-dark p-4 position-relative h-100 d-flex flex-column justify-content-end card-blur">
                                        <div className="row gx-5 align-items-center h-100">
                                            <div className="col-6">
                                                <h3 className="text-white fw-600-without-ls mb-0">
                                                    Awarded <br />
                                                    <span className="fw-400-gothic-without-ls">$</span>AS Tokens
                                                </h3>
                                            </div>
                                            <div className="col-auto">
                                                <h1 className="text-primary fw-900-gothic-without-ls s-62 mb-0">
                                                    00
                                                </h1>
                                            </div>
                                        </div>
                                        <div
                                            className="position-absolute"
                                            style={{
                                                bottom: width > 600 ? -30 : -40,
                                                right: width > 600 ? -100 : -41,
                                            }}
                                        >
                                            <div style={{ position: 'relative', width: width > 600 ? 170 : 140, height: width > 600 ? 170 : 140 }}>
                                                <Image
                                                    alt="Nft Coins"
                                                    src={nftCoins}
                                                    fill
                                                    sizes="100vw"
                                                    style={{
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="container mt-5 pt-5">
                            <div className="row g-3 justify-content-between align-items-center row-cols-lg-4">
                                <div className="col-md align-self-stretch mt-5">
                                    <div className="border border-primary bg-grey-dark p-4 pt-5 rounded-20 position-relative h-100 d-flex flex-column justify-content-end card-blur">
                                        <h4 className="text-white text-center fw-900 s-21 mb-2">
                                            Staked
                                            DankDealerz
                                        </h4>
                                        <h6 className="text-white text-center fw-800 mb-0">
                                            ($AS Token)
                                        </h6>

                                        <div
                                            className="position-absolute start-0 end-0 d-flex justify-content-center"
                                            style={{
                                                bottom: '68%'
                                            }}
                                        >
                                            <div
                                                className="d-flex align-items-center p-2 justify-content-center text-center bg-success fw-400-gothic h4 rounded-circle lh-1 custom-shadow-success2"
                                                style={{
                                                    width: 90,
                                                    height: 90,
                                                }}
                                            >
                                                Tier
                                                1
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md align-self-stretch mt-5">
                                    <div className="border border-primary bg-grey-dark p-4 pt-5 rounded-20 position-relative h-100 d-flex flex-column justify-content-end card-blur ">
                                        <h4 className="text-white text-center fw-900 s-21 mb-2">
                                            Staked
                                            DankDealerz 1:1
                                        </h4>
                                        <h6 className="text-white text-center fw-800 mb-0">
                                            ($AS Token)
                                        </h6>

                                        <div
                                            className="position-absolute start-0 end-0 d-flex justify-content-center"
                                            style={{
                                                bottom: '68%'
                                            }}
                                        >
                                            <div
                                                className="d-flex align-items-center p-2 justify-content-center text-center bg-success fw-400-gothic h4 rounded-circle lh-1 custom-shadow-success2"
                                                style={{
                                                    width: 90,
                                                    height: 90,
                                                }}
                                            >
                                                Tier
                                                2
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md align-self-stretch mt-5">
                                    <div className="border border-primary bg-grey-dark p-4 pt-5 rounded-20 position-relative h-100 d-flex flex-column justify-content-end card-blur">
                                        <h4 className="text-white text-center fw-900 s-21 mb-2">
                                            Mutant Staking
                                        </h4>
                                        <h6 className="text-white text-center fw-800 mb-0">
                                            Coming Soon!
                                        </h6>

                                        <div
                                            className="position-absolute start-0 end-0 d-flex justify-content-center"
                                            style={{
                                                bottom: '68%'
                                            }}
                                        >
                                            <div
                                                className="d-flex align-items-center p-2 justify-content-center text-center bg-success fw-400-gothic h4 rounded-circle lh-1 custom-shadow-success2"
                                                style={{
                                                    width: 90,
                                                    height: 90,
                                                }}
                                            >
                                                Tier
                                                3
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md align-self-stretch mt-5">
                                    <div className="border border-primary bg-grey-dark p-4 pt-5 rounded-20 position-relative h-100 d-flex flex-column justify-content-end card-blur">
                                        <h4 className="text-white text-center fw-900 s-21 mb-2">
                                            Trait Staking
                                        </h4>
                                        <h6 className="text-white text-center fw-800 mb-0">
                                            Coming Soon!
                                        </h6>

                                        <div
                                            className="position-absolute start-0 end-0 d-flex justify-content-center"
                                            style={{
                                                bottom: '68%'
                                            }}
                                        >
                                            <div
                                                className="d-flex align-items-center p-2 justify-content-center text-center bg-success fw-400-gothic h4 rounded-circle lh-1 custom-shadow-success2"
                                                style={{
                                                    width: 90,
                                                    height: 90,
                                                }}
                                            >
                                                Tier
                                                4
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>




                        <div className="container mt-5 pt-5 pb-5">
                            <div className="row g-4 row-col-3">
                                <div className="col">
                                    <div className="gradient-card2 p-4 text-center">
                                        <h3 className="text-primary fw-400-gothic">
                                            Disclaimer:
                                        </h3>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            $AS Token is a reward token offered to DankDealerz holders as a perk; there will be no monetary value added to the $AS Token. Its utility for earning purposes is to allow a holder more chances to earn potential rewards by accumulating and redeeming for merch value. We are do not promise every token holder will earn a reward; hence, POTENTIAL. The amount a holder may earn from staking can be subject to change.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}