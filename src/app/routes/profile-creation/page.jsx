'use client'
import React, {useState} from "react";
import Link from "next/link";
import { ArrowLeft, Upload, User, Mail, Calendar, Menu } from "lucide-react"
export default function Support() {

    const jobs = [
        // Tech
        "Backend Developer", "Customer Support", "DevOps Engineer",
        "Frontend Developer", "Full Stack Developer", "Product Manager",
        "Project Manager", "QA Tester", "Recruiter",
        "Sales", "UI/UX Designer", "Web Developer",
        "AI Engineer", "Cloud Engineer", "Cybersecurity Specialist",
        "Data Analyst", "Data Scientist", "Database Administrator",
        "IT Support Specialist", "Machine Learning Engineer", "Mobile Developer", "Network Engineer",
        // Creative / Design / Media
        "Actor", "Content Creator", "Graphic Designer",
        "Illustrator", "Motion Designer", "Music Producer",
        "Photographer", "Social Media Manager", "Video Editor",
        "Web Designer", "Writer",
        // Healthcare
        "Dentist", "Doctor", "Nurse",
        "Pharmacist", "Psychologist", "Veterinarian",
        // Education
        "Professor", "Teacher", "Tutor",
        // Hospitality / Kitchen
        "Bartender", "Baker", "Chef",
        "Cook", "Restaurant Manager", "Waiter",
        // Transport / Travel
        "Flight Attendant", "Pilot",
        "Taxi Driver", "Truck Driver",
        // Other / Misc
        "Architect", "Civil Engineer", "Lawyer"
    ]

    const [ selected, setSelected] = useState([])
    const [ open, setOpen ] = useState(false)

    const toggleSection = (job) => {
        if (selected.includes(job)) {
            setSelected(selected.filter((j) => j !== job));
        } else {
            setSelected([...selected, job]);
        }
    }

    const removeSelected = (job) => {
        setSelected(selected.filter((j) => j !== job));
    };

    return (
        <div className="min-h-screen flex flex-col text-white bg-[linear-gradient(180deg,rgba(9,9,11,1)_0%,rgba(15,15,20,1)_23%,rgba(15,15,20,1)_24%,rgba(15,23,26,1)_65%,rgba(17,30,33,1)_100%)]">
            <header className="w-full h-16 bg-[#09090b] px-20 flex  items-center">
                <Link href="/" className="text-white text-2xl font-bold hover:text-[#76c2bc]">
                    <span className="flex items-center gap-2">
                        <ArrowLeft className="size-7"/>
                        WALL-E
                    </span>
                </Link>
            </header>
            <div className="flex-1">
                <h1 className="font-bold py-10 text-2xl text-center">CREATE PROFILE</h1>
                <div className="flex flex-1 flex-col max-w-4xl mx-auto p-2 pl- gap-10 bg-[#19191f] rounded-xl shadow-lg shadow-black/40">
                    <div className="flex w-full h-[180px]">
                        <div className=" flex justify-around items-center flex-1 mr-5">
                            <div className="flex justify-center items-center gap-5">
                                <div>
                                    <p className="font-bold">Add Your Profile Picture</p>
                                    <p className="text-xs text-gray-500 mt-1 text-center">(JPG, JPEG, PNG, SVG, GIF)</p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-6 bg-[#0E0E12] rounded-lg  w-12 h-12">
                                    <label
                                        htmlFor="file-upload"
                                        className="cursor-pointer flex flex-col items-center justify-center text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Upload className="w-6 h-6 text-gray-400 hover:text-gray-200" />
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="w-32 h-44 rounded-xl  overflow-hidden border-2 border-gray-700 shadow-inner flex items-center justify-center bg-[#0E0E12]">
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 ml-5 gap-2">
                            <div className="flex flex-col flex-1">
                                <div className="relative">
                                    <h2 className="font-bold my-2">Username</h2>
                                    <User className="absolute left-3 top-14 text-gray-400 w-5 h-5"/>
                                    <input
                                        type="text"
                                        className="w-full bg-[#0E0E12] border border-gray-700 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    />
                                </div>
                                <div className="relative">
                                    <h2 className="font-bold my-2">Email</h2>
                                    <Mail className="absolute left-3 top-14 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        className="w-full bg-[#0E0E12] border border-gray-700 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col  flex-1">
                                <div className="relative">
                                    <h2 className="font-bold my-2">Select Your Age</h2>
                                    <Calendar className="absolute left-3 top-14 text-gray-400 w-5 h-5" />
                                    <select
                                        className="w-full bg-[#0E0E12] border border-gray-700 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none"
                                    >
                                        {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                                            <option key={age} value={age}>
                                                {age}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full h-[180px]">
                        <div className="flex flex-col flex-1 mr-5 pl-3 gap-5 justify-center items-center">
                            <p className="font-bold">Select Your Speciality</p>
                            <div className=" relative">
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="w-[200px] h-[50px] bg-[#0E0E12] border border-gray-700 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition flex justify-center"><Menu/>
                                </button>
                                {open && (
                                    <div className="absolute z-50 mt-2 rounded-xl px-5 py-3 bg-[#0E0E12] border border-gray-700 focus:ring-2  transition max-h-60 overflow-y-auto">
                                        {jobs.map((job) => (
                                            <div
                                                key={job}
                                                onClick={() => toggleSection(job)}
                                                className={`px-4 py-2 cursor-pointer hover:bg-zinc-700
                                                rounded-lg my-2 
                                            ${
                                                    selected.includes(job) ? "bg-[#1F2937]" : ""
                                                }`}
                                            >
                                                {job}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className=" flex flex-wrap flex-1 ml-5 gap-2 justify-start max-w-[414px] content-start overflow-y-auto">
                            {selected.map((job) => (
                                <span
                                    key={job}
                                    className="flex items-center gap-2  bg-[#0E0E12] px-3 py-1 rounded-full text-sm h-[50px] w-[180px] justify-center ">
                                        {job}
                                    <button
                                        onClick={() =>
                                            removeSelected(job)}>✕</button>
                                    </span>))}
                        </div>
                    </div>
                    <div className="flex w-full h-[180px]">
                        <div className="flex flex-col flex-1 mr-5 pl-3 gap-5  items-center font-bold">
                            <p>Your Experience years</p>
                            <div className="flex flex-wrap gap-1">
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                    <input type="checkbox"
                                           className="mr-2"/>
                                    none
                                </label>
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                    <input type="checkbox"
                                           className="mr-2"/>
                                    internship</label>
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                    <input type="checkbox"
                                           className="mr-2"/>
                                    1</label>
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                    <input type="checkbox"
                                           className="mr-2"/>
                                    2</label>
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                    <input type="checkbox"
                                           className="mr-2"/>
                                    3</label>
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                    <input type="checkbox"
                                           className="mr-2"/>
                                    4</label>
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                    <input type="checkbox"
                                           className="mr-2"/>
                                    5</label>
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                <input type="checkbox"
                                       className="mr-2"/>
                                6</label>
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                    <input type="checkbox"
                                           className="mr-2"/>
                                    7</label>
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                    <input type="checkbox"
                                           className="mr-2"/>
                                    8</label>
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                    <input type="checkbox"
                                           className="mr-2"/>
                                    9</label>
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                    <input type="checkbox"
                                           className="mr-2"/>
                                    10</label>
                                <label className="flex items-center bg-[#0E0E12] px-2 py-1 border border-gray-700 rounded-md cursor-pointer select-none hover:bg-[#1f1f26]">
                                    <input type="checkbox"
                                           className="mr-2"/>
                                    10+</label>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 mr-5 pl-3 gap-5  items-center">
                            <p className="font-bold">Tell About Yourself</p>
                            <textarea
                                placeholder="Write a short bio..."
                                className="w-full h-32 bg-[#0E0E12] border border-gray-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}