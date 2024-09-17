import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { routes } from '@/utils/routes';

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariants = {
    hidden: {
        y: "0",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: { delay: 0.5 },
    },
    exit: {
        y: "100vh",
        opacity: 0,
        transition: { delay: 0.5 },
    },
};

const WelcomeModal = ({ showModal, closeModal }) => {
    const [IsSkip, setIsSkip] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            closeModal()
            setTimeout(() => {
                setIsSkip(true)
            }, 6000)
        }, 4000)
    }, [])

    return (
        <>

            {IsSkip && (
                <Link href={routes.dashboard} className='position-absolute btn btn-dark rounded-pill border fw-400-gothic-without-ls' style={{ zIndex: 15, top: 25, right: 25, position: 'absolute' }}>
                    Skip, Continue to DApp
                </Link>
            )}

            {showModal && (
                <motion.div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ zIndex: 12 }}
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => closeModal()}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <motion.div
                        className="col-9 border border-2 border-primary p-md-5 p-3 rounded-5"
                        style={{ background: '#00000099', backdropFilter: 'blur(8px)' }}
                        variants={modalVariants}
                        initial="visible"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal when clicking inside the modal
                    >
                        <div className="text-center px-md-3 py-md-5">
                            <p
                                id="modal-description"
                                className="fw-400-gothic-without-ls text-white s-20 lh-18 text-decoration-none m-0"
                            >
                                <span id="modal-title" className="text-primary s-21">
                                    Disclaimer:
                                </span>
                                &nbsp; Welcome to the DankDealerz Collection; we are a cannabis-driven NFT project that offers cannabis merch rewards to holders who “Mint 2 Earn”. We are NOT solely a reward project and do not promise every holder who mints will receive a reward. There is a minting criteria that a holder MUST meet in order to receive a reward. Tokens earned by staking give holders an added perk to POTENTIALLY receive more rewards. We DO NOT promise every holder who mints will earn a reward; only those that meet the specified requirements. Each NFT minted will be accounted for when rewards are redeemed. Rewards will be on a first-come, first-served basis and made available until the collection is minted out. Raffles, auctions, and any form of giveaways will be made available for each holder to participate in; please understand that we strive to keep this project fair, reasonable, and fun for our community. Welcome and thank you for considering the DankDealerz project.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}

export default WelcomeModal