import Image from "next/image";
import mountain from '@public/bg1.jpeg'
import avatar from '@public/avatar1.png'
import BgEclipseIcon from "@/components/icons/BgEclipseIcon";
import BgEclipseIcon2 from "@/components/icons/BgEclipseIcon2";
import ConnectButton from "@/components/ConnectButton";

export default function Home() {
  return (
    <>
        <div className="bg-image-fixed w-full h-full overflow-hidden position-relative" style={{backgroundImage: `url(${mountain.src})`}}>
            <div className="d-flex flex-column w-100 h-100 align-items-center justify-content-center bg-overlay">
                <BgEclipseIcon
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: '-30px',
                        height: '100dvh',
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
                <div style={{position: 'relative',width: 650, height: 650 }}>
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
        </div>
    </>
  );
}
