import Header from "@/components/Header"
import { HeaderTopBar } from "@/components/HeaderTopBar"
import stars from "@public/stars.jpeg"
import buttonBg from "@public/bg-button4.svg";
import Link from "next/link";


export default function Rewards() {
    return (
        <>
            <div className="bg-image-fixed w-100" style={{ backgroundImage: `url(${stars.src})` }}>
                <div className="bg-overlay min-h-full w-100">
                    <HeaderTopBar />
                    <Header title="Rewards" />

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

                </div>
            </div>
        </>
    );
}