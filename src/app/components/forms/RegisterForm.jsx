'use client';
import React from 'react';
// import Link from 'next/link';
import LoginBtn from '../ui/login-btn';

export default function LoginForm() {
    return (
        <form action="/register"
              method="POST"
              className=" flex flex-col gap-4 p-6 h-[600px] w-[500px] border border-transparent rounded-lg shadow-2xl ">
            <label htmlFor="username" className="text-white font-semibold self-center">Username</label>
            <input type="text"
                   id="username"
                   name="username"
                   required className="rounded-[8px] px-[5px] bg-gray-300 bg-opacity-0 border-[2px] border-[#aeaeb0] text-white"/>
            <br/>
            <label htmlFor="email" className="text-white font-semibold self-center">Email</label>
            <input type="email"
                   id="email"
                   name="email"
                   required className="rounded-[8px] px-[5px] bg-gray-300 bg-opacity-0 border-[2px] border-[#aeaeb0] text-white"/>
            <br/>
            <label htmlFor="password" className="text-white font-semibold self-center">Password</label>
            <input type="password"
                   id="password"
                   name="password"
                   required className="rounded-[8px] px-[5px] bg-gray-300 bg-opacity-0 border-[2px] border-[#aeaeb0] text-white"/>
            <br/>
            <label htmlFor="confirm-password" className="text-white font-semibold self-center">Confirm Password</label>
            <input type="password"
                   id="confirm-password"
                   name="confirm_password"
                   required className="rounded-[8px] px-[5px] bg-gray-300 bg-opacity-0 border-[2px] border-[#aeaeb0] text-white"/>
            <br/>
            <div className="flex justify-around items-center">
                <button type="submit"
                        className="text-white font-semibold bg-[#1E2929] px-[25px] py-[11px] self-center rounded-md text-lg hover:cursor-pointer hover:bg-[#273837] ">Register
                </button>
                <LoginBtn>Log In</LoginBtn>
            </div>
        </form>
    )
}