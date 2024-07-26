import Image from "next/image";
import mountain from '@public/bg1.jpeg'
import avatar from '@public/avatar1.png'
import BgEclipseIcon from "@/components/icons/BgEclipseIcon";
import BgEclipseIcon2 from "@/components/icons/BgEclipseIcon2";
import ConnectButton from "@/components/ConnectButton";

export default function Home() {
    return (
        <>
            <div className="bg-image-fixed w-full h-full overflow-hidden position-relative" style={{ backgroundImage: `url(${mountain.src})` }}>
                <div
                    className="d-flex flex-column w-100 h-100 align-items-center justify-content-center bg-overlay position-relative"
                    style={{
                        zIndex: 10
                    }}
                >
                    <BgEclipseIcon
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: '-30px',
                            height: '100vh',
                        }}
                    />
                    <BgEclipseIcon2
                        style={{
                            position: 'absolute',
                            top: '80%',
                            right: 0,
                            width: '100%'
                        }}
                    />
                    <div style={{ position: 'relative', width: 650, height: 650 }}>
                        <Image
                            alt="Avatar"
                            src={avatar}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </div>

                    <ConnectButton />

                </div>
                <div className="position-absolute" style={{ top: 0, left: 0, zIndex: 9 }}>
                    <video width="100%" height="100%" muted loop autoPlay preload="none">
                        <source src="https://s3-figma-videos-production-sig.figma.com/video/1335486561388213126/TEAM/b3c6/1823/-43a5-4b28-a1c0-f5680d442f19?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKzQ5Gn5HGCWpjNq-6wjosJ7xStRs5r4qHJkiq2ZaFjMZct9h-A59d99ipe1ZbS5~SEfiv2bEnF6eEuLyda8~KEdEab~zWZpVxixF646jMFhGr1KKyv5O4tBMIHpyQ95xayyr-wpVMDYwVbjeGc9MKXCFClGm4LjDi-r7CeG4Cuy16xNA1cd8L7kaO3~~Vot-ZD91Z1kvGkAEMstY392gKDbIyki5IUGh2k09k7zUtG88bESdnlPD81KFZE6cR7fNhf3Qf24x5lCtClScIh6AHnVff~~-5c3q7W6AjdrtnK~z4ugP~SxnSD5OpfaVYjgZUWD5DJFnLg2TRVx1kKaBA__" type="video/mp4" />

                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    );
}
