'use client'
import React, { useState } from 'react'
import ArrowWhiteIcon from './icons/ArrowWhiteIcon'

const CollapseGallery = (props) => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <>
            <h1 className="fw-500 text-start s-56 text-white mb-5 position-relative">
                {props?.title}
                &nbsp;
                <ArrowWhiteIcon
                    onClick={() => setIsOpen(pre => !pre)}
                    type="button"
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        width: 20,
                        height: 20,
                        transition: 'all 0.5s ease'
                    }}
                />
            </h1>
            <div className={`${isOpen ? 'list-open' : 'list-close'}`}>
                {props?.children}
            </div>
        </>
    )
}

export default CollapseGallery