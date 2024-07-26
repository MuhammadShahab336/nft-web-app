import Header from "@/components/Header";
import { HeaderTopBar } from "@/components/HeaderTopBar";
import Image from "next/image";
import stars from "@public/stars.jpeg"
import cardBg from "@public/card-bg.svg"
import nftImage from "@public/nft-image.png"
import nftImage2 from "@public/nft-image2.png"
import nftImage3 from "@public/nft-image4.png"
import buttonBg from "@public/bg-button5.svg";
import Link from "next/link";


export default function Mint() {
    return (
        <>
            <div className="bg-image-fixed w-100" style={{ backgroundImage: `url(${stars.src})` }}>
                <div className="bg-overlay min-h-full w-100">
                    <HeaderTopBar />
                    <Header title="Mint" />

                    <div className="container mt-5">
                        <div className="row g-5 row-cols-lg-3">
                            <div className="col">
                                <h1 className="text-white text-center fw-900 mb-4">
                                    Dank Dealerz
                                </h1>
                                <div className="border border-success bg-image rounded-20 overflow-hidden" style={{ backgroundImage: `url(${cardBg.src})` }}>
                                    <div className="bg-overlay2 d-flex justify-content-center" style={{ height: 500 }}>
                                        <div className="align-self-end" style={{ position: 'relative', width: 300, height: 350 }}>
                                            <Image
                                                alt="nft image"
                                                src={nftImage}
                                                fill
                                                sizes="100vw"
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-4 my-5 text-center">
                                    <div className="border border-bottom-0 border-success rounded-3">
                                        <div className="bg-success px-3 py-2 text-center fw-400-without-ls s-21 rounded-3">
                                            Mint
                                        </div>
                                        <div className="row g-0 flex-column " >
                                            <div className="border border-start-0 border-end-0 border-success border-top-0 px-3 py-2 text-center text-white fw-400-without-ls s-16 ">
                                                <span className="fw-400-gothic-without-ls">$</span>AS Token
                                            </div>
                                            <div className="border border-start-0 border-end-0 border-success border-top-0 px-3 py-2 text-center text-white fw-400-without-ls s-16 rounded-3 rounded-top-0">
                                                20 Matic
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        href={'/'}
                                        className="btn bg-transparent border-0 bg-image position-relative s-13 fw-400 text-white text-uppercase py-3 px-4 my-3"
                                        style={{ backgroundImage: `url(${buttonBg.src})`, backgroundPosition: 'center' }}
                                    >
                                        <span className="py-2 px-0 d-block text-no-wrap">
                                            burn to claim
                                        </span>
                                    </Link>
                                </div>

                            </div>
                            <div className="col">
                                <h1 className="text-white text-center fw-900 mb-4">
                                    Mutant Pass
                                </h1>
                                <div className="border border-success bg-image rounded-20 overflow-hidden" style={{ backgroundImage: `url(${cardBg.src})` }}>
                                    <div className="bg-dark d-flex justify-content-center" style={{ height: 500 }}>
                                        <div className="align-self-center mt-4" style={{ position: 'relative', width: 300, height: 400 }}>
                                            <Image
                                                alt="ghost image nft"
                                                src={nftImage3}
                                                fill
                                                sizes="100vw"
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-4 my-5 border border-bottom-0 border-success rounded-3">
                                    <div className="bg-success px-3 py-2 text-center fw-400-without-ls s-21 rounded-3">
                                        Mint
                                    </div>
                                    <div className="row g-0 flex-column " >
                                        <div className="border border-start-0 border-end-0 border-success border-top-0 px-3 py-2 text-center text-white fw-400-without-ls s-16 rounded-3 rounded-top-0">
                                            <span className="fw-400-gothic-without-ls">$</span>AS Token
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <h1 className="text-white text-center fw-900 mb-4">
                                    Mutant Mint
                                </h1>
                                <div className="border border-success bg-image rounded-20 overflow-hidden" style={{ backgroundImage: `url(${cardBg.src})` }}>
                                    <div className="bg-overlay2 d-flex justify-content-center" style={{ height: 500 }}>
                                        <div className="align-self-end" style={{ position: 'relative', width: 300, height: 400 }}>
                                            <Image
                                                alt="mummy image nft"
                                                src={nftImage2}
                                                fill
                                                sizes="100vw"
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-4 my-5 border border-bottom-0 border-success rounded-3">
                                    <div className="bg-success px-3 py-2 text-center fw-400-without-ls s-21 rounded-3">
                                        Mint
                                    </div>
                                    <div className="row g-0 flex-column " >
                                        <div className="border border-start-0 border-end-0 border-success border-top-0 px-3 py-2 text-center text-white fw-400-without-ls s-16 ">
                                            <span className="fw-400-gothic-without-ls">$</span>AS 25000
                                        </div>
                                        <div className="border border-start-0 border-end-0 border-success border-top-0 px-3 py-2 text-center text-white fw-400-without-ls s-16 rounded-3 rounded-top-0">
                                            10 Matic
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="container mt-5">
                        <div className="row g-4 row-col-3">
                            <div className="col">
                                <div className="gradient-card1 p-4 text-center">
                                    <h3 className="text-primary fw-400-gothic-without-ls">
                                        Disclaimer:
                                    </h3>
                                    <p className="text-white fw-300-gothic-without-ls s-19 mb-0">
                                        DankDealerz 2:1 burn to claim ; Mutant pass 3:1 burn to claim meaning a holder must hold a minimum of 2 Danks to receive 1 mint ; a holder must hold a minimum of 3 (silver, gold and platinum) passes to receive 1 mint ; mints will be on a first come first serve after initial burn to claims have been completed in the applicable time period allowed to exchange before releasing to public.
                                        &nbsp;
                                        <span className="text-primary fw-400-gothic-without-ls">
                                            1 Mutant pass will grant that holder 1 mutant mint.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-5 pt-5 pb-5">
                        <div className="row g-5 justify-content-between align-items-center row-col-3">
                            <div className="col-md">
                                <div className="gradient-card1 p-4 position-relative">
                                    <div className="row flex-column align-items-center">
                                        <div className="col-auto">
                                            <h4 className="text-white fw-600-without-ls mb-0">
                                                Minted Total
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <h1 className="text-primary fw-900-gothic-without-ls s-56 mb-0 ">
                                                45/8888
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="gradient-card1 p-4 position-relative">
                                    <div className="row flex-column align-items-center">
                                        <div className="col-auto">
                                            <h4 className="text-white fw-600 mb-0">
                                                Mutant Pass
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <h1 className="text-primary fw-900-gothic s-56 mb-0 ">
                                                102/420
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="gradient-card1 p-4 position-relative">
                                    <div className="row flex-column align-items-center">
                                        <div className="col-auto">
                                            <h4 className="text-white fw-600 mb-0">
                                                Mutants
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <h1 className="text-primary fw-900-gothic s-56 mb-0 ">
                                                840/2222
                                            </h1>
                                        </div>
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