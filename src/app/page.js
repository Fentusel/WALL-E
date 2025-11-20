'use client';
import React from 'react';
import Link from 'next/link';
import "./home.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Headset } from 'lucide-react';

export default function Home() {
    return (
        <div className="body h-[100%] w-full">
            <div className="part text-white w-full h-full pt-[50px] flex flex-col items-center">
                <nav className="h-[50px] w-[800px] bg-[#19191f]/50 rounded-[50px] border-[2px] border-gray-600 flex items-center justify-between pl-[50px] pr-[50px] shadow-lg shadow-black/60">
                    <InstagramIcon className="scale-[1.5] text-gray-200"/>
                    <div className="flex items-center justify-center gap-[50px] font-bold text-lg">
                        <p className="hover:cursor-pointer hover:scale-[1.05] hover:text-[#8cc6d4] transition-all duration-300 ease-out">More Info</p>
                        <Headset size="25px"  className="hover:cursor-pointer hover:scale-[1.5] hover:text-[#8cc6d4] transition-all duration-300 ease-out"/>
                    </div>
                </nav>
                <h1 className="mt-[100px] font-bold text-gray-200 text-[50px]">
                    Wall-e Is For Swipers
                </h1>
                <div className="mt-[200px] w-[800px] flex justify-between">
                    <button className="bg-gradient-to-r from-[#1b2424] via-[#0f2121] to-[#003030] text-white hover:bg-gradient-to-l hover:from-[#1b2424] hover:via-[#0f2121] hover:to-[#003030] font-semibold h-[50px] w-[150px] text-lg rounded-[10px] hover:cursor-pointer hover:scale-[1.05] shadow-lg shadow-black/30 mr-[20px] duration-200 ease-out">
                        Get Started
                    </button>
                    <Link href="routes/register"
                        className="bg-gradient-to-r from-[#003030] via-[#0f2121] to-[#1b2424] text-white hover:bg-gradient-to-l hover:from-[#003030] hover:via-[#0f2121] hover:to-[#1b2424] font-semibold h-[50px] w-[150px] text-lg rounded-[10px] hover:cursor-pointer hover:scale-[1.05] shadow-lg shadow-black/30 duration-200 ease-out flex justify-center items-center">
                            Sign Up
                    </Link>
                </div>
                <div className="bg-[#121216] mt-[200px] h-[700px] w-[1300px] rounded-[10px] text-white">
                    <div className="w-full h-[80%] px-[80px] py-[30px]">
                        <div className="h-full w-full grid grid-cols-3">
                            <img src="/card-image.jpg"
                                 alt="image" className="col-span-1 w-full h-full object-cover rounded-[20px]"/>
                            <div className="bg-gray-00 col-span-2 px-[50px] grid">
                                <h1 className="font-bold text-[30px]">
                                    Iveri Gvimradze
                                </h1>
                                <h2 className="font-bold text-lg flex gap-[10px]">
                                    Career -
                                    <p className="font-normal">Front End Developer</p>
                                </h2>
                                <h2 className="font-bold text-lg flex gap-[10px]">
                                    Education -
                                    <p className="font-normal">Georgian Technical University</p>
                                </h2>
                                <h2 className="font-bold text-lg flex gap-[10px]">
                                    Skills -
                                    <p className="font-normal">HTML CSS TAILWIND JS React</p>
                                </h2>
                                <h2 className="font-bold text-lg flex gap-[10px]">
                                    Experience -
                                    <p className="font-normal">None</p>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[20%] bg-[#09090B] grid p-[10px]">
                        <h2 className="font-semibold text-lg text-gray-200">Welcome to [Your Website Name] – The Job Matching Platform for HRs and Job Seekers</h2>
                        <p className="text-md text-gray-200">
                            Finding the perfect job or the ideal candidate doesn’t have to be complicated. Our platform connects job seekers and HR professionals in a fast, intuitive, and interactive way – inspired by swipe-based matchmaking technology, but for careers.
                        </p>
                    </div>
                </div>
                <div className="w-full h-[100px] bg-[#09090B] mt-[50px] flex justify-between items-center px-[150px]">
                    <div className="flex flex-wrap gap-5 text-gray-200">
                        <InstagramIcon className="scale-[1.5]"/>
                        <FacebookIcon className="scale-[1.5]"/>
                    </div>
                    <ul className="flex flex-wrap gap-5 text-gray-200">
                        <li className="hover:underline cursor-pointer">About Us</li>
                        <li className="hover:underline cursor-pointer">Features</li>
                        <li className="hover:underline cursor-pointer">Contact Us</li>
                        <li className="hover:underline cursor-pointer">Feedback</li>
                        <li className="hover:underline cursor-pointer">help</li>
                        <li className="hover:underline cursor-pointer">Partners</li>
                    </ul>
                </div>
            </div>
            <div className="home-2 text-white"></div>
        </div>
    );
}