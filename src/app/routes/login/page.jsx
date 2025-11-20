'use client';
import React from 'react';
import Header from "@/app/components/layout/Header";
import styles from './login.module.css';
import LoginForm from '@/app/components/forms/LoginForm';

export default function Login () {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header className=""></Header>
            <div className={`${styles.body} flex flex-grow justify-center items-center`}>
                <LoginForm/>
            </div>
        </div>
    );
}