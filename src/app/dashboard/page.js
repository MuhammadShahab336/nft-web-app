'use client'
import React from "react";
import Image from "next/image";
import Coins from "@public/coins.svg";
import Watch from "@public/watch.png";
import { HeaderTopBar } from "@/components/HeaderTopBar";
import Header from "@/components/Header";
import useWindowDimensions from "@/hooks/useWindowDimensions";



export default function Dashboard() {
    const { width } = useWindowDimensions()
    return (
        <>
            <div className="w-100 min-h-full bg-dark">
                <HeaderTopBar />
                <Header title="Dashboard" />


                <div className="container mt-5">
                    <h2 className="fw-500 text-center text-white s-36 mb-5">
                        NFT amount held in wallet
                    </h2>
                    <div className="row g-4 justify-content-lg-between justify-content-center align-items-center row-cols-lg-3 row-cols-md-2 row-cols-1">
                        <div className="col-lg-4 col-md-6 col-10 mb-5">
                            <div className="border border-success bg-grey p-4 pb-5 rounded-20 position-relative">
                                <h1 className="text-primary text-center fw-900 s-38 mb-4">
                                    Dank Dealerz
                                </h1>

                                <div
                                    className="position-absolute start-0 end-0 d-flex justify-content-center"
                                    style={{
                                        top: '60%'
                                    }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-success fw-400 h1 rounded-circle custom-shadow-success"
                                        style={{
                                            width: '6.563rem',
                                            height: '6.563rem',
                                        }}
                                    >
                                        12
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-10 mb-5">
                            <div className="border border-success bg-grey p-4 pb-5 rounded-20 position-relative">
                                <h1 className="text-secondary text-center fw-900 s-38 mb-4">
                                    Mutant Pass
                                </h1>

                                <div
                                    className="position-absolute start-0 end-0 d-flex justify-content-center"
                                    style={{
                                        top: '60%'
                                    }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-success fw-400 h1 rounded-circle custom-shadow-success"
                                        style={{
                                            width: '6.563rem',
                                            height: '6.563rem',
                                        }}
                                    >
                                        12
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-10 mb-5">
                            <div className="border border-success bg-grey p-4 pb-5 rounded-20 position-relative">
                                <h1 className="text-warning text-center fw-900 s-38 mb-4">
                                    Mutantz
                                </h1>

                                <div
                                    className="position-absolute start-0 end-0 d-flex justify-content-center"
                                    style={{
                                        top: '60%'
                                    }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-success fw-400 h1 rounded-circle custom-shadow-success"
                                        style={{
                                            width: '6.563rem',
                                            height: '6.563rem',
                                        }}
                                    >
                                        12
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 pt-5">
                    <div className="row g-5 justify-content-md-between justify-content-center align-items-center row-col-3">
                        <div className="col-lg col-md-12 col-11 pe-lg-5 align-self-stretch">
                            <div className="border border-success rounded-20 p-4 position-relative h-100" style={{ zIndex: 2 }}>
                                <div className="row gx-5 align-items-center h-100 py-3 py-lg-0">
                                    <div className="col">
                                        <h4 className="text-white fw-600 s-28 mb-0">
                                            AS Reward
                                            Token
                                        </h4>
                                    </div>
                                    <div className="col-7">
                                        <h1 className="text-primary fw-400-nofont s-48 lh-1 mt-2 mb-0">
                                            175,000
                                        </h1>
                                    </div>
                                </div>
                                <div
                                    className="position-absolute"
                                    style={{
                                        bottom: -20,
                                        left: '80%',
                                        zIndex: -1,
                                    }}
                                >
                                    <div style={{ position: 'relative', width: '12.5rem', height: '12.5rem' }}>
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
                        <div className="col-lg col-md-12 col-11 ps-lg-5 align-self-stretch">
                            <div className="border border-success rounded-20 p-4 position-relative h-100">
                                <div className="row g-0 flex-column py-1 py-lg-0">
                                    <div className="col">
                                        <h4 className="text-white fw-600 mb-0 s-28 lh-1">
                                            Timer
                                        </h4>
                                    </div>
                                    <div className="col">
                                        <h1 className="text-primary fw-400-nofont s-48 mb-0 mt-2 lh-1">
                                            00:00:00
                                        </h1>
                                    </div>
                                    <div className="col">
                                        <p className="text-white fw-300 mb-0 lh-1">
                                            Timer till next quarterly airdrop
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="position-absolute"
                                    style={{
                                        bottom: -30,
                                        left: '78%',
                                    }}
                                >
                                    <div style={{ position: 'relative', width: '13.75rem', height: '13.75rem' }}>
                                        <Image
                                            alt="Watch"
                                            src={Watch}
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

                <div className="container mt-5">
                    <div className="row g-4 justify-content-md-between justify-content-center row-cols-lg-3 row-cols-md-2">
                        <div className="col-lg col-md col-11">
                            <div className="gradient-card1 p-4">
                                <div className="row g-0 justify-content-between align-items-center py-2 py-lg-0">
                                    <div className="col-auto">
                                        <h4 className="text-white fw-500 mb-0">
                                            Quarterly Airdrop
                                        </h4>
                                    </div>
                                    <div className="col-auto">
                                        <h3 className="text-white fw-400-gothic-without-ls mb-0">
                                            $420
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md col-11">
                            <div className="gradient-card1 p-4">
                                <div className="row g-0 justify-content-between align-items-center py-2 py-lg-0">
                                    <div className="col-auto">
                                        <h4 className="text-white fw-500 mb-0">
                                            Mutant Pass
                                        </h4>
                                    </div>
                                    <div className="col-auto">
                                        <h3 className="text-white fw-400-gothic-without-ls mb-0">
                                            $2
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md col-11">
                            <div className="gradient-card1 p-4">
                                <div className="row g-0 justify-content-between align-items-center py-2 py-lg-0">
                                    <div className="col-auto">
                                        <h4 className="text-white fw-500 mb-0">
                                            Reward
                                        </h4>
                                    </div>
                                    <div className="col-auto">
                                        <h3 className="text-white fw-400-gothic-without-ls mb-0">
                                            $89/420
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-4 pb-4">
                    <div className="row g-0 justify-content-center">
                        <div className="col-md-10 col-11 text-center">
                            <a className="fw-400-gothic-without-ls text-white s-20 text-decoration-none">
                                <span className="text-primary">Disclaimer:</span> Quarterly USDT airdrop is based on a
                                percentage of royalties calculated at $420 every 3 months for the next 3 years. Subject
                                to
                                change.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}