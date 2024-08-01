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
                <div className="min-h-full w-100 bg-overlay">
                    <HeaderTopBar />

                    <div className="bg-overlay-air h-100 w-100" style={{ '--eclipse-image': `url(${eclipseImage.src})` }}>
                        <div className="position-relative bg-overlay">
                            <Header title="Air" />

                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto py-5">
                                        <div className="position-relative">
                                            <div className="d-flex flex-column">
                                                <Image
                                                    alt="Mountains"
                                                    // Importing an image will
                                                    // automatically set the width and height
                                                    src={mobile}
                                                    sizes="100vw"
                                                    // Make the image display full width
                                                    style={{
                                                        width: 'auto',
                                                        height: '56.25rem',
                                                        margin: 'auto,'
                                                    }}
                                                    priority={true}
                                                />
                                            </div>

                                            <div
                                                className="position-absolute w-100 top-50 start-0"
                                                style={{
                                                    transform: 'translate(0,-50%)'
                                                }}
                                            >
                                                <div className="d-flex flex-column align-items-center justify-content-center">
                                                    <Image
                                                        alt="Mountains"
                                                        // Importing an image will
                                                        // automatically set the width and height
                                                        src={Video}
                                                        sizes="100vw"
                                                        // Make the image display full width
                                                        style={{
                                                            width: '90%',
                                                            height: 'auto',
                                                            margin: 'auto,'
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

                </div>
            </div >

        </>
    )
}