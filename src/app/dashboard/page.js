import MenuIcon from "@/components/icons/MenuIcon";
import Image from "next/image";
import avatar from "@public/avatar2.png";
import logo from "@public/logo.svg";
import Coins from "@public/coins.png";
import Watch from "@public/watch.png";
import CloseIcon from "@/components/icons/CloseIcon";
import {routes} from "@/utils/routes";
import buttonBg from "@public/button-bg2.svg";
import Link from "next/link";
import React from "react";


export default function Dashboard() {
    return (
        <>
            <div className="w-100 min-h-full bg-dark">
                <div className="bg-header-bar">
                    <div className="container py-2">
                        <div className="row justify-content-between align-items-center">
                            <div className="col">
                                <div className="row gx-2 align-items-center">
                                    <div className="col-auto">
                                        <h1 className="text-white fw-700 mb-0">
                                            ALIENZ STUDIO
                                        </h1>
                                    </div>
                                    <div className="col-auto">
                                        <div style={{position: 'relative', width: 100, height: 100}}>
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
                                </div>
                            </div>
                            <div className="col-auto">
                                <Link
                                    href={routes.dashboard}
                                    className="btn bg-transparent border-0 bg-image position-relative s-16 fw-400 text-white text-uppercase py-2 px-4"
                                    style={{backgroundImage: `url(${buttonBg.src})`}}
                                >
                                    <span className="my-1 px-1">
                                        ONBXY2N
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <MenuIcon/>
                        </div>
                        <div className="col-auto">
                            <h1 className="text-white fw-700 text-uppercase mb-0">Dashboard</h1>
                        </div>
                        <div className="col-auto position-relative">
                            <div className="row g-4 align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div style={{position: 'relative', width: 80, height: 80}}>
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

                <div className="container mt-5">
                    <h2 className="fw-500 text-center text-white mb-5">
                        NFT amount held in wallet
                    </h2>
                    <div className="row gx-0 gy-3 justify-content-between align-items-center row-cols-md-3">
                        <div className="col-md-3">
                            <div className="border border-success bg-grey p-4 pb-5 rounded-20 position-relative">
                                <h1 className="text-primary text-center fw-900 mb-4">
                                    Dank Dealerz
                                </h1>

                                <div
                                    className="position-absolute start-0 end-0 d-flex justify-content-center"
                                    style={{
                                        top: '60%'
                                    }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-success fw-400 h1 rounded-circle"
                                        style={{
                                            width: 120,
                                            height: 120,
                                        }}
                                    >
                                        12
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="border border-success bg-grey p-4 pb-5 rounded-20 position-relative">
                                <h1 className="text-secondary text-center fw-900 mb-4">
                                    Mutant Pass
                                </h1>

                                <div
                                    className="position-absolute start-0 end-0 d-flex justify-content-center"
                                    style={{
                                        top: '60%'
                                    }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-success fw-400 h1 rounded-circle"
                                        style={{
                                            width: 120,
                                            height: 120,
                                        }}
                                    >
                                        12
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="border border-success bg-grey p-4 pb-5 rounded-20 position-relative">
                                <h1 className="text-warning text-center fw-900 mb-4">
                                    Mutantz
                                </h1>

                                <div
                                    className="position-absolute start-0 end-0 d-flex justify-content-center"
                                    style={{
                                        top: '60%'
                                    }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-success fw-400 h1 rounded-circle"
                                        style={{
                                            width: 120,
                                            height: 120,
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
                    <div className="row g-5 justify-content-between align-items-center row-col-3">
                        <div className="col-md pe-md-5 align-self-stretch">
                            <div className="border border-success rounded-20 p-4 position-relative h-100">
                                <div className="row gx-5 align-items-center h-100">
                                    <div className="col-4">
                                        <h4 className="text-white fw-600 mb-0">
                                            AS Reward
                                            Token
                                        </h4>
                                    </div>
                                    <div className="col-auto">
                                        <h1 className="text-primary fw-900-gothic s-62 mb-0">
                                            175,000
                                        </h1>
                                    </div>
                                </div>
                                <div
                                    className="position-absolute"
                                    style={{
                                        bottom: -30,
                                        right: -100,
                                    }}
                                >
                                    <div style={{position: 'relative', width: 200, height: 200}}>
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
                        <div className="col-md ps-md-5">
                            <div className="border border-success rounded-20 p-4 position-relative">
                                <div className="row flex-column">
                                    <div className="col">
                                        <h4 className="text-white fw-600 mb-0 lh-1">
                                            Timer
                                        </h4>
                                    </div>
                                    <div className="col">
                                        <h1 className="text-primary fw-900-gothic s-62 mb-0 lh-1">
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
                                        bottom: -25,
                                        right: -60,
                                    }}
                                >
                                    <div style={{position: 'relative', width: 220, height: 200}}>
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
                    <div className="row g-4 row-col-3">
                        <div className="col">
                            <div className="gradient-card1 p-4">
                                <div className="row g-0 justify-content-between align-items-center">
                                    <div className="col-auto">
                                        <h4 className="text-white fw-500 mb-0">
                                            Quarterly Airdrop
                                        </h4>
                                    </div>
                                    <div className="col-auto">
                                        <h3 className="text-white fw-400-gothic mb-0">
                                            $420
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="gradient-card1 p-4">
                                <div className="row g-0 justify-content-between align-items-center">
                                    <div className="col-auto">
                                        <h4 className="text-white fw-500 mb-0">
                                            Mutant Pass
                                        </h4>
                                    </div>
                                    <div className="col-auto">
                                        <h3 className="text-white fw-400-gothic mb-0">
                                            $2
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="gradient-card1 p-4">
                                <div className="row g-0 justify-content-between align-items-center">
                                    <div className="col-auto">
                                        <h4 className="text-white fw-500 mb-0">
                                            Reward
                                        </h4>
                                    </div>
                                    <div className="col-auto">
                                        <h3 className="text-white fw-400-gothic mb-0">
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
                        <div className="col-md-10 text-center">
                            <a className="fw-400-gothic text-white s-20 text-decoration-none">
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