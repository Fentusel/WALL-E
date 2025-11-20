"use client";
import React from "react";
import Link from "next/link";

export default function LoginBtn() {
    return (
        <Link href="/routes/login"
              className="text-white font-semibold bg-[#1E2929] px-[25px] py-[11px] self-center rounded-md text-lg hover:cursor-pointer hover:bg-[#273837] ">Log In
        </Link>
    );
}