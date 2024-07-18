import Image from "next/image";
import mountain from '../../public/bg1.jpeg'
import avatar from '../../public/avatar1.png'
import buttonBg from '../../public/button-bg1.svg'

export default function Home() {
  return (
    <>
        <div className="bg-image-fixed w-full h-full" style={{backgroundImage: `url(${mountain.src})`}}>
            <div className="d-flex flex-column w-100 h-100 align-items-center justify-content-center">
                <div style={{position: 'relative',width: 600, height: 600 }}>
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

                <button
                    className="btn bg-transparent border-0 bg-image position-relative s-36 fw-400 text-white text-uppercase py-3 px-5"
                    style={{backgroundImage: `url(${buttonBg.src})`, top: '-100px'}}
                >
                    <span className="mb-2 d-block">
                        connect
                    </span>
                </button>
            </div>
        </div>
    </>
  );
}
