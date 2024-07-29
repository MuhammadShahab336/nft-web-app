import Header from "@/components/Header";
import { HeaderTopBar } from "@/components/HeaderTopBar";
import stars from "@public/stars.jpeg"
import nftImage from "@public/nft-image.png"
import Image from "next/image";
import spaceShip from "@public/spaceship.png"
import eclipseImage from "@public/eclipse-gallery.svg"
import eclipseImage2 from "@public/eclipse-gallery2.svg"
import CollapseGallery from "@/components/CollapseGallery";


export default function Gallery() {
    return (
        <>
            <div className="bg-image-fixed w-100" style={{ backgroundImage: `url(${stars.src})` }}>
                <div className="bg-overlay min-h-full w-100">
                    <div className="w-100 h-100 black-gradient" style={{ '--eclipse-image': `url(${eclipseImage.src})`, '--eclipse-image2': `url(${eclipseImage2.src})`, }}>

                        <div className="position-relative" style={{ zIndex: 1 }}>

                            <HeaderTopBar />
                            <Header title="Gallery" />


                            <div className="container py-5">
                                <CollapseGallery title="Dank Dealerz">
                                    <div className="row g-5 row-cols-lg-3 row-cols-md-2">
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
                                </CollapseGallery>



                            </div>


                            <div className="container py-5">
                                <CollapseGallery title="Mutant Pass">
                                    <div className="row g-5 row-cols-lg-3 row-cols-md-2">
                                        <div className="col">
                                            <div className="bg-grey pt-5 pb-2 px-4 border-grey rounded-20" style={{ '--gredientColor': 'rgba(255, 0, 0, 0.67)' }}>
                                                <div className="mx-auto rounded-20 mt-3" style={{ position: 'relative', height: 285 }}>
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
                                </CollapseGallery>

                            </div>


                            <div className="container py-5">
                                <CollapseGallery title="Mutantz">
                                    <div className="row g-5 row-cols-lg-3 row-cols-md-2">
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
                                </CollapseGallery>
                            </div>
                        </div>


                    </div>
                </div>
            </div >

        </>
    )
}