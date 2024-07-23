import Header from "@/components/Header";
import { HeaderTopBar } from "@/components/HeaderTopBar";
import Image from "next/image";
import stars from "@public/stars.jpeg"
import Coins from "@public/note.svg";
import nftCoins from "@public/nft-coin.svg";
import nftCoins2 from "@public/nft-coin2.svg";


export default function Stack() {
    return (
        <>
            <div className="bg-image-fixed w-100" style={{ backgroundImage: `url(${stars.src})` }}>
                <div className="bg-overlay min-h-full w-100">
                    <HeaderTopBar />
                    <Header title="Stack" />

                    <div className="container mt-5 pt-5">
                        <div className="row g-5 justify-content-between align-items-center row-col-3">
                            <div className="col-md px-md-5 align-self-stretch">
                                <div className="border border-primary rounded-20 bg-grey-dark p-4 position-relative h-100">
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
                                            <h2 className="text-success fw-400-gothic mb-0 lh-1">
                                                10 $AS Token
                                            </h2>
                                            <p className="text-white fw-400-gothic mb-0">
                                                per NFT staked
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="position-absolute"
                                        style={{
                                            bottom: -40,
                                            right: -80,
                                        }}
                                    >
                                        <div style={{ position: 'relative', width: 150, height: 200 }}>
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

                            <div className="col-md px-md-5 align-self-stretch">
                                <div className="border border-primary rounded-20 bg-grey-dark p-4 position-relative h-100">
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
                                            <h2 className="text-success fw-400-gothic mb-0 lh-1">
                                                10 $AS Token
                                            </h2>
                                            <p className="text-white fw-400-gothic mb-0">
                                                per NFT staked
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="position-absolute"
                                        style={{
                                            bottom: -40,
                                            right: -80,
                                        }}
                                    >
                                        <div style={{ position: 'relative', width: 150, height: 200 }}>
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

                    <div className="container mt-5 pt-5">
                        <div className="row g-5 justify-content-between align-items-center row-col-3">
                            <div className="col-md pe-md-5 align-self-stretch">
                                <div className="border border-success rounded-20 bg-grey-dark p-4 position-relative h-100">
                                    <div className="row gx-5 align-items-center h-100">
                                        <div className="col-6">
                                            <h4 className="text-white fw-600 mb-0">
                                                Staked
                                                Amount
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <h1 className="text-primary fw-900-gothic s-62 mb-0">
                                                35
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
                                        <div style={{ position: 'relative', width: 170, height: 200 }}>
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

                            <div className="col-md pe-md-5 align-self-stretch">
                                <div className="border border-success rounded-20 bg-grey-dark p-4 position-relative h-100">
                                    <div className="row gx-5 align-items-center h-100">
                                        <div className="col-6">
                                            <h3 className="text-white fw-600 mb-0">
                                                Un Staked
                                                Amount
                                            </h3>
                                        </div>
                                        <div className="col-auto">
                                            <h1 className="text-primary fw-900-gothic s-62 mb-0">
                                                15
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
                                        <div style={{ position: 'relative', width: 170, height: 200 }}>
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

                            <div className="col-md align-self-stretch">
                                <div className="border border-success rounded-20 bg-grey-dark p-4 position-relative h-100">
                                    <div className="row gx-5 align-items-center h-100">
                                        <div className="col-6">
                                            <h4 className="text-white fw-600 mb-0">
                                                Awarded
                                                $AS Tokens
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <h1 className="text-primary fw-900-gothic s-62 mb-0">
                                                00
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
                                        <div style={{ position: 'relative', width: 170, height: 200 }}>
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


                    <div className="container mt-5 pt-5 pb-5">
                        <div className="row g-4 row-col-3">
                            <div className="col">
                                <div className="gradient-card1 p-4 text-center">
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
        </>
    )
}