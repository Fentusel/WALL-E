'use client';
import React from 'react';
import styles from './register.module.css';
import Header from "@/app/components/layout/Header";
import LoginForm from "@/app/components/forms/RegisterForm";

export default function Page () {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header/>
            <div className={`${styles.body} flex flex-grow justify-center items-center`}>
                <LoginForm/>
            </div>
        </div>
    );
}