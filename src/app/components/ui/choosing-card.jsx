import Link from "next/link";
import React from "react";

export default function ChoosingCard({ src, href, onClick }) {
    const handleKeyDown = (e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
        }
    };

    const card = (
        <div
            className="group relative h-[400px] w-[400px] overflow-hidden shadow-2xl bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${src})` }}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={handleKeyDown}
        >
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-40 hover:cursor-pointer" />
        </div>
    );

    return href ? <Link href={href}>{card}</Link> : card;
}
