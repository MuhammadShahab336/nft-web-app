import Header from "@/components/Header";
import { HeaderTopBar } from "@/components/HeaderTopBar";
import Image from "next/image";
import stars from "@public/star2.svg"
import cardBg from "@public/card-bg3.png"
import nftImage from "@public/nft-image.png"
import nftImage2 from "@public/nft-image2.png"
import nftImage3 from "@public/nft-image4.png"
import buttonBg from "@public/bg-button5.svg";
import eclipseImage from '@public/eclipse-mint.svg'
import Link from "next/link";
import ArrowBlackIcon from "@/components/icons/ArrowBlackIcon";
import MintList from "@/components/MintList";


export default function Mint() {
    return (
        <>
            <div className="bg-image-fixed w-100" style={{ backgroundImage: `url(${stars.src})`, backgroundPosition: 'top roght', }}>
                <div className="bg-overlay-mint min-h-full w-100" style={{ '--eclipse-image': `url(${eclipseImage.src})`, }}>

                    <div className="position-relative" style={{ zIndex: 1 }}>
                        <HeaderTopBar />
                        <Header title="Mint" />

                        <div className="container mt-5">
                            <div className="row g-5 justify-content-md-between justify-content-center row-cols-lg-3 row-cols-md-2 row-cols-1">
                                <div className="col-md col-11">
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
                                        <MintList
                                            title="Mint"
                                        />
                                        <Link
                                            href={'/'}
                                            className="btn bg-transparent border-0 position-relative s-13 fw-400 text-white text-uppercase py-3 px-4 my-3 on-hover-zoom btn-svg1"
                                            style={{ '--bg-image': `url(${buttonBg.src})` }}
                                        >
                                            <span className="d-block p-3 text-nowrap">
                                                burn to claim
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                                <div className="col-md col-11">
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
                                    <div className="mx-4 my-5 text-center">
                                        <MintList
                                            title="Mint"
                                        />
                                    </div>

                                </div>
                                <div className="col-md col-11">
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
                                    <div className="mx-4 my-5 text-center">
                                        <MintList
                                            title="Mint"
                                        />
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="container mt-5">
                            <div className="row g-4 justify-content-center">
                                <div className="col-md col-11">
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
                            <div className="row g-5 justify-content-md-between justify-content-center align-items-center row-cols-xxl-3 row-cols-xl-2 row-cols-lg-2 row-cols-md-1">
                                <div className="col-md col-11">
                                    <div className="gradient-card1 p-4 position-relative">
                                        <div className="row flex-column align-items-center">
                                            <div className="col-auto">
                                                <h4 className="text-white fw-600-without-ls mb-0">
                                                    Minted Total
                                                </h4>
                                            </div>
                                            <div className="col-auto">
                                                <h1 className="text-primary fw-400-nofont s-48 mb-0">
                                                    45/8888
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md col-11">
                                    <div className="gradient-card1 p-4 position-relative">
                                        <div className="row flex-column align-items-center">
                                            <div className="col-auto">
                                                <h4 className="text-white fw-600 mb-0">
                                                    Mutant Pass
                                                </h4>
                                            </div>
                                            <div className="col-auto">
                                                <h1 className="text-primary fw-400-nofont s-48 mb-0 ">
                                                    102/420
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md col-11">
                                    <div className="gradient-card1 p-4 position-relative">
                                        <div className="row flex-column align-items-center">
                                            <div className="col-auto">
                                                <h4 className="text-white fw-600 mb-0">
                                                    Mutants
                                                </h4>
                                            </div>
                                            <div className="col-auto">
                                                <h1 className="text-primary fw-400-nofont s-48 mb-0 ">
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
            </div>
        </>
    )
}