'use client';
import React from 'react';
import Header from "@/components/layout/Header";
import LoginForm from '@/components/forms/LoginForm';

export default function Login () {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header className=""></Header>
            <div className="bg-[linear-gradient(180deg,rgba(9,9,11,1)_0%,rgba(15,15,20,1)_23%,rgba(15,15,20,1)_24%,rgba(15,23,26,1)_65%,rgba(17,30,33,1)_100%)] flex flex-grow justify-center items-center">
                <LoginForm/>
            </div>
        </div>
    );
}