'use client'
import Header from "@/components/Header";
import { HeaderTopBar } from "@/components/HeaderTopBar";
import space from "@public/space1.svg"
import mobile from "@public/mobile.svg"
import Image from "next/image";
import Video from "@public/video.gif";
import eclipseImage from '@public/eclipse-air.svg'
import useWindowDimensions from "@/hooks/useWindowDimensions";


export default function Air() {
    const { width } = useWindowDimensions()
    return (
        <>
            <div className="bg-image w-100" style={{ backgroundImage: `url(${space.src})`, backgroundPosition: 'bottom left' }}>
                <div className="min-h-full w-100" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
                    <HeaderTopBar />

                    <div className="bg-overlay-air h-100 w-100" style={{ '--eclipse-image': `url(${eclipseImage.src})` }}>
                        <div className="position-relative" style={{ zIndex: 1, background: 'rgba(0, 0, 0, 0.2)' }}>
                            <Header title="Air" />

                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto py-5 position-relative">
                                        <div className="">
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <Image
                                                    alt="Mountains"
                                                    // Importing an image will
                                                    // automatically set the width and height
                                                    src={mobile}
                                                    sizes="100vw"
                                                    // Make the image display full width
                                                    style={{
                                                        width: 'auto',
                                                        height: width > 600 ? '900px' : '800px',
                                                        margin: 'auto,'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div
                                            className="position-absolute top-50 start-50"
                                            style={{
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        >
                                            <div className="mx-auto" style={{ position: 'relative', width: width > 600 ? 400 : 360, height: width > 600 ? 400 : 360 }}>
                                                <Image
                                                    alt="comming soon video"
                                                    src={Video}
                                                    fill
                                                    sizes="100vw"
                                                    style={{
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div >

        </>
    )
}