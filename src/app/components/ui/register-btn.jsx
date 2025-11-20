"use client";
import Link from "next/link";
import React from "react";

export default function RegisterBtn() {
    return (
        <Link
            href="/routes/register"
            className="text-white font-semibold bg-[#1E2929] px-[25px] py-[11px] self-center rounded-md text-lg hover:cursor-pointer hover:bg-[#273837]">Register
        </Link >
    );
}