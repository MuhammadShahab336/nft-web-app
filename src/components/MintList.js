'use client'
import React, { useState } from 'react'
import ArrowBlackIcon from './icons/ArrowBlackIcon'

const MintList = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="border border-bottom-0 border-success rounded-3" style={{ transition: 'all 0.5s ease' }}>
                <div className="bg-success px-3 py-2 text-center fw-400-without-ls s-21 rounded-3 position-relative">
                    {props?.title}
                    <div
                        className="position-absolute"
                        role="button"
                        style={{
                            top: 5,
                            right: 14
                        }}
                    >
                        <ArrowBlackIcon
                            onClick={() => setIsOpen(pre => !pre)}
                            style={{
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                width: 18,
                                height: 18,
                                transition: 'all 0.5s ease'
                            }}
                        />
                    </div>
                </div>
                <div className={`row g-0 flex-column ${isOpen ? 'list-open' : 'list-close'} `}>
                    <div className="border border-start-0 border-end-0 border-success border-top-0 px-3 py-2 text-center text-white fw-400-without-ls s-16 ">
                        <span className="fw-400-gothic-without-ls">$</span>AS Token
                    </div>
                    <div className="border border-start-0 border-end-0 border-success border-top-0 px-3 py-2 text-center text-white fw-400-without-ls s-16 rounded-3 rounded-top-0">
                        20 Matic
                    </div>
                </div>
            </div>
        </>
    )
}

export default MintList