import Header from "@/components/Header"
import { HeaderTopBar } from "@/components/HeaderTopBar"
import space from "@public/space2.svg"
import buttonBg from "@public/bg-button4.svg";
import Link from "next/link";
import DiscordIcon from "@/components/icons/DiscordIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import BoatIcon from "@/components/icons/BoatIcon";
import LineIcon from "@/components/icons/LineIcon";


export default function Rewards() {
    return (
        <>
            <div className="bg-image w-100" style={{ backgroundImage: `url(${space.src})`, backgroundPosition: 'top right' }}>
                <div className="min-h-full w-100" style={{ background: 'rgba(0,0,0,0.2)' }}>
                    <div className="overlay-rewards">
                        <div className="position-relative" style={{ zIndex: 1 }}>
                            <HeaderTopBar />
                            <Header title="Rewards" reward={true} />

                            <div className="container py-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 text-center">
                                        <h1 className="text-white fw-700-without-ls mb-0">
                                            Bonus Tier
                                        </h1>
                                        <p className="text-white fw-400 s-20">
                                            5 DankDealerz NFTs
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            This tier rewards a holder 1 item of their choosing from Special K glassware:
                                        </p>
                                        <p className="text-primary fw-400-gothic s-20 mb-0">
                                            - Pipe  - Pint glass  - Bowl  - Plate
                                        </p>
                                        <Link
                                            href={'/'}
                                            className="btn bg-transparent border-0 bg-image position-relative s-20 fw-400-without-ls text-white text-capatalize py-3 px-5 mt-4"
                                            style={{ backgroundImage: `url(${buttonBg.src})`, backgroundPosition: 'center' }}
                                        >
                                            <span className="py-2 px-4">
                                                Claim Reward
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="container py-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 text-center">
                                        <h1 className="text-white fw-700-without-ls mb-0">
                                            Tier 1
                                        </h1>
                                        <p className="text-white fw-400 s-20">
                                            10 DankDealerz NFTs
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            This tier rewards a holder:
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            1. “Gripped & Glammed” 5-8 inches Tall or “Wrapped Wonders” 8-13 inches Tall Special K Bong
                                        </p>

                                        <Link
                                            href={'/'}
                                            className="btn bg-transparent border-0 bg-image position-relative s-20 fw-400-without-ls text-white text-capatalize py-3 px-5 mt-4"
                                            style={{ backgroundImage: `url(${buttonBg.src})`, backgroundPosition: 'center' }}
                                        >
                                            <span className="py-2 px-4">
                                                Claim Reward
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="container py-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 text-center">
                                        <h1 className="text-white fw-700-without-ls mb-0">
                                            Tier 2
                                        </h1>
                                        <p className="text-white fw-400 s-20">
                                            15 DankDealerz NFTs
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            This tier rewards a holder:
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            1. “Breathtaking Bubbles” 10-13 inches Tall Special K Bong
                                        </p>
                                        <p className="text-primary fw-400-gothic s-20 mb-0">
                                            - DankDealerz rolling tray   - Mutant Mint
                                        </p>
                                        <Link
                                            href={'/'}
                                            className="btn bg-transparent border-0 bg-image position-relative s-20 fw-400-without-ls text-white text-capatalize py-3 px-5 mt-4"
                                            style={{ backgroundImage: `url(${buttonBg.src})`, backgroundPosition: 'center' }}
                                        >
                                            <span className="py-2 px-4">
                                                Claim Reward
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="container py-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 text-center">
                                        <h1 className="text-white fw-700-without-ls mb-0">
                                            Tier 3
                                        </h1>
                                        <p className="text-white fw-400 s-20">
                                            20 DankDealerz NFTs
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            This tier grants a holder:
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            1. “Big Hitters” 16-20 inches Tall or “the Garden of High” Grown to perfection Special K Bong
                                        </p>
                                        <p className="text-primary fw-400-gothic s-20 mb-0">
                                            -  DankDealerz Mint
                                        </p>
                                        <Link
                                            href={'/'}
                                            className="btn bg-transparent border-0 bg-image position-relative s-20 fw-400-without-ls text-white text-capatalize py-3 px-5 mt-4"
                                            style={{ backgroundImage: `url(${buttonBg.src})`, backgroundPosition: 'center' }}
                                        >
                                            <span className="py-2 px-4">
                                                Claim Reward
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="container py-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 text-center">
                                        <h1 className="text-white fw-700-without-ls mb-0">
                                            Tier <span className="fw-900-gothic">4</span>
                                        </h1>
                                        <p className="text-white fw-400 s-20">
                                            20 DankDealerz NFTs
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            This tier grants a holder:
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            1. Exclusive Special K “ Elite” bong. The best of the best.
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            2. Custom “Create A DankDealerz” NFT
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            3. HGC package
                                        </p>
                                        <Link
                                            href={'/'}
                                            className="btn bg-transparent border-0 bg-image position-relative s-20 fw-400-without-ls text-white text-capatalize py-3 px-5 mt-4"
                                            style={{ backgroundImage: `url(${buttonBg.src})`, backgroundPosition: 'center' }}
                                        >
                                            <span className="py-2 px-4">
                                                Claim Reward
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="container py-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 text-center">
                                        <h1 className="text-white fw-700-without-ls mb-0">
                                            Tier 5
                                        </h1>
                                        <p className="text-white fw-400 s-20">
                                            1:1 DankDealerz NFT Mint Bounty
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            1. A Home Grown Creations package
                                        </p>
                                        <p className="text-primary fw-300-gothic s-20 mb-0">
                                            Reward Bounty: $20
                                        </p>
                                        <Link
                                            href={'/'}
                                            className="btn bg-transparent border-0 bg-image position-relative s-20 fw-400-without-ls text-white text-capatalize py-3 px-5 mt-4"
                                            style={{ backgroundImage: `url(${buttonBg.src})`, backgroundPosition: 'center' }}
                                        >
                                            <span className="py-2 px-4">
                                                Claim Reward
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="container py-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 text-center">
                                        <h1 className="text-white fw-700-without-ls mb-0">
                                            Tier 6
                                        </h1>
                                        <p className="text-white fw-400 s-20">
                                            Mutant Pass
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            This tier grants a holder:
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            1. 1 mutant mint per pass
                                        </p>
                                        <p className="text-white fw-300-gothic s-20 mb-0">
                                            2. % of Polygon USDT airdrop every *quarter
                                        </p>
                                        <p className="text-primary fw-300-gothic s-20 mb-0 mt-4">
                                            *Quarterly airdrop is calculated based off the number of passes circulating. There will be a total of $420 USDT airdropped to pass holders every quarter for the next 3 years.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="container my-5 pb-4">
                                <div className="row g-0 justify-content-center">
                                    <div className="col-md-10 text-center">
                                        <p className="fw-400-gothic-without-ls text-primary h3 text-decoration-none">
                                            Disclaimer:
                                        </p>
                                        <a className="fw-300-gothic-without-ls text-white s-20 text-decoration-none">
                                            Rewards are calculated based off the amount of NFT’s minted. Each Reward will be given on a first come first serve basis until the collection has minted out.
                                            <span className="text-primary">
                                                Bong rewards pictured may not be the exact bong you receive however the bong rewarded will be equivalent in style, design, and value.
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <section className="position-relative">
                                <div className="position-absolute" style={{ top: -10, left: 0 }}>
                                    <LineIcon style={{ width: '100%' }} />
                                </div>
                                <div className="container">
                                    <div className="row g-0 gy-3 py-3 align-items-center justify-content-between">
                                        <div className="col">
                                            <p className="text-white text-capatalize s-19 fw-300-gothic-without-ls m-0">
                                                AlienzStudio. All Rights Reserved 2023
                                            </p>
                                        </div>
                                        <div className="col-auto">
                                            <div className="row gx-3">
                                                <div className="col-auto">
                                                    <a href="/" className="btn btn-primary rounded-3">
                                                        <DiscordIcon style={{ width: 20, height: 20 }} />
                                                    </a>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="/" className="btn btn-primary rounded-3">
                                                        <TwitterIcon style={{ width: 20, height: 20 }} />
                                                    </a>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="/" className="btn btn-primary rounded-3">
                                                        <BoatIcon style={{ width: 20, height: 20 }} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}