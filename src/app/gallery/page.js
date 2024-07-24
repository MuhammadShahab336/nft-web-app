import Header from "@/components/Header";
import { HeaderTopBar } from "@/components/HeaderTopBar";
import stars from "@public/stars.jpeg"
import nftImage from "@public/nft-image.png"
import Image from "next/image";
import spaceShip from "@public/spaceship.png"


export default function Gallery() {
    return (
        <>
            <div className="bg-image-fixed w-100" style={{ backgroundImage: `url(${stars.src})` }}>
                <div className="bg-overlay min-h-full w-100">
                    <HeaderTopBar />
                    <Header title="Gallery" />


                    <div className="container py-5">
                        <h1 className="fw-500 text-start s-56 text-white mb-5">
                            Dank Dealerz
                        </h1>

                        <div className="row g-5 row-cols-3">
                            <div className="col">
                                <div className="gradient-box position-relative bg-dark pt-5" style={{ '--gredientColor': 'rgba(255, 0, 0, 0.67)' }}>
                                    <div className="mx-auto" style={{ position: 'relative', width: 260, height: 350 }}>
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
                            <div className="col">
                                <div className="gradient-box position-relative bg-dark pt-5" style={{ '--gredientColor': 'rgba(173, 0, 255, 0.67)' }}>
                                    <div className="mx-auto" style={{ position: 'relative', width: 260, height: 350 }}>
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
                            <div className="col">
                                <div className="gradient-box position-relative bg-dark pt-5" style={{ '--gredientColor': 'rgba(173, 255, 0, 0.67)' }}>
                                    <div className="mx-auto" style={{ position: 'relative', width: 260, height: 350 }}>
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
                        </div>

                    </div>


                    <div className="container py-5">
                        <h1 className="fw-500 text-start s-56 text-white mb-5">
                            Mutant Pass
                        </h1>

                        <div className="row g-5 row-cols-3">
                            <div className="col">
                                <div className="bg-grey pt-5 pb-2 px-4 border-grey rounded-20" style={{ '--gredientColor': 'rgba(255, 0, 0, 0.67)' }}>
                                    <div className="mx-auto rounded-20 mt-3
                                    " style={{ position: 'relative', height: 285 }}>
                                        <Image
                                            alt="nft image"
                                            src={spaceShip}
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "fill",
                                            }}
                                        />
                                    </div>
                                    <div className="row g-0 align-items-center py-4 px-2">
                                        <div className="col">
                                            <p className="text-white s-13 lh-1 mb-0">
                                                Icy Monster <sup>#</sup>256
                                            </p>
                                            <p className="text-white mb-0">
                                                $65,254.25
                                            </p>
                                        </div>
                                        <div className="col-auto">
                                            <button className="btn btn-sm btn-light s-10 text-primary text-uppercase">
                                                View Nft
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="container py-5">
                        <h1 className="fw-500 text-start s-56 text-white mb-5">
                            Mutantz
                        </h1>

                        <div className="row g-5 row-cols-3">
                            <div className="col">
                                <div className="bg-pink pt-5 pb-2 px-4 border-grey rounded-20" style={{ '--gredientColor': 'rgba(255, 0, 0, 0.67)' }}>
                                    <div className="mx-auto rounded-20 mt-4" style={{ position: 'relative', height: 320 }}>
                                        <Image
                                            alt="nft image"
                                            src={spaceShip}
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "fill",
                                            }}
                                        />
                                    </div>
                                    <div className="row g-0 align-items-center py-4 px-2">
                                        <div className="col">
                                            <p className="text-white s-13 lh-1 mb-0">
                                                Icy Monster <sup>#</sup>256
                                            </p>
                                            <p className="text-white mb-0">
                                                $65,254.25
                                            </p>
                                        </div>
                                        <div className="col-auto">
                                            <button className="btn btn-sm btn-light s-10 text-primary text-uppercase">
                                                View Nft
                                            </button>
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