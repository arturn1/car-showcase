'use client'

import Image from "next/image"
import { type } from "os"
import { MouseEventHandler } from "react"

interface CustomProps {
    type?: "button" | "submit";
    title: string
    containerStyles?: string
    handleClick: MouseEventHandler<HTMLButtonElement>
}

const CustomButton = ({ title, containerStyles, handleClick, type = 'button' }: CustomProps) => {
    return (
        <button
            disabled={false}
            type={type}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton