import Header from "@/components/Header";
import { HeaderTopBar } from "@/components/HeaderTopBar";
import stars from "@public/stars.jpeg"
import mobile from "@public/mobile.svg"
import Image from "next/image";
import Video from "@public/video.gif";


export default function Air() {
    return (
        <>
            <div className="bg-image-fixed w-100" style={{ backgroundImage: `url(${stars.src})` }}>
                <div className="bg-overlay min-h-full w-100">
                    <HeaderTopBar />
                    <Header title="Air" />




                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-auto py-5 position-relative">
                                <div className="">
                                    <div className="mx-auto" style={{ position: 'relative', width: 800, height: 900 }}>
                                        <Image
                                            alt="Mobile"
                                            src={mobile}
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "contain",
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
                                    <div className="mx-auto" style={{ position: 'relative', width: 400, height: 400 }}>
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

        </>
    )
}