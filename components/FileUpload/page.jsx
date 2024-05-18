"use client"
import axios from 'axios';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import { poppins } from '../Header/page';

const FileUpload = () => {
    const [dragging, setDragging] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [file, setFile] = useState({});
    const [result, setResult] = useState({
        education: [],
        experience: [],
        name: "",
        skills: []
    })
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([]);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);

        const file = e.dataTransfer.files[0]; // Only handle the first file
        setDragging(file);
        handleFile(file);

    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]; // Only handle the first file
        setFile(file);

        handleFile(file.name);
    };

    const handleFile = (file) => {
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleRemove = () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('file', file, file?.name);
        axios.post("https://api.apilayer.com/resume_parser/upload", file, {
            headers: {
                "Content-Type": "application/octet-stream",
                "apikey": "fdM6NqBxZIQ4k3hjS2y3m4RTZIrK7PUv",
            },
        }).then(res => {
            setResult(res.data)
            setLoading(false);
            setUploadedFile(null)

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className=' flex flex-col gap-1 items-center'>
            {!uploadedFile && <p>Upload CV/Resume</p>}
            {!result.name && <div
                className={`w-[100%] h-64 border-2 border-dashed border-gray-400 rounded-lg flex flex-col justify-center ${uploadedFile ? 'bg-orange-100' : ""}  ${dragging ? 'bg-gray-200' : ''}`}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {(
                    <>
                        <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            accept=".docx"
                            onChange={handleFileInputChange}
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                            <div className="text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 mx-auto mb-3 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 0 1 .832.445l4.007 5.007a1 1 0 0 1 .11.137l.02.026A.75.75 0 0 0 15.75 9h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h2a.75.75 0 0 0 .606-.306l.02-.026a1 1 0 0 1 .11-.137l4.007-5.007A1 1 0 0 1 10 3zm0 2.62L7.568 8h4.864L10 5.62zM9 17v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                {
                                    uploadedFile ? <p className={`${poppins.className} text-green-800 font-bold text-xl tracking-wider`}>{uploadedFile}</p> : <>

                                        <p className="text-sm text-gray-600">Drag and drop a file here or click to select .docx files</p>
                                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                            Select File
                                        </button>
                                    </>
                                }
                            </div>
                        </label>
                    </>
                )}

            </div>}
            {<div className='w-[100%]  py-5 flex flex-col gap-5 text-center'>
                {
                    errors.map((error, key) => <div key={key} className='p-3 rounded tracking-wide bg-black text-sm text-white'>{error.title}</div>)
                }

                {
                    (uploadedFile && errors.length == 0) && <div> <button onClick={() => handleRemove()} className='bg-slate-800 text-white px-4 py-4 text-center rounded w-[100%] text-[20px] uppercase mt-5' disabled={loading}>Scan my CV</button><p className='py-2 cursor-pointer underline' onClick={() => { setFile(null), setUploadedFile(null) }}>Upload Again</p> {loading && <p className='text-sm'>Scaning....</p>}</div>
                }
                {console.log(result)}
                {
                    <div className='grid grid-cols-1 gap-1'>
                        {result.name && <p>Name: <span>{result.name}</span></p>}
                        {result.skills.length > 0 && <div className='grid gap-1'>
                            <p>Skills</p>
                            <div className='flex gap-1 flex-wrap'>
                                {result.skills.map(res => <span key={res} className='px-4 py-1 bg-black text-white mx-3 rounded text-sm'>{res}</span>)}
                            </div>
                        </div>}
                        {result.education.length > 0 && <div className='grid gap-1'>
                            <p>Education</p>
                            <div className='flex gap-1 flex-wrap'>
                                {result.education.map((res, key) => {
                                    return <span key={key} className='px-4 py-1 bg-black text-white mx-3 rounded text-sm'>
                                        <h2>{res.name}</h2>
                                        <p>{res?.start_date}</p>
                                        <p>{res?.end_date}</p>
                                    </span>
                                })}
                            </div>
                        </div>}
                        {result.experience.length > 0 && <div className='grid gap-1'>
                            <p>Experience</p>
                            <div className='flex gap-1 flex-wrap'>
                                {result.experience.map((res, key) => {
                                    return <div key={key}>
                                        <p>{res.title}</p>
                                        <p>{res.location}</p>
                                    </div>
                                })}
                            </div>
                        </div>}

                        {(result.name) && <div>
                            <button>Upload on ResumeArchive</button>
                            <button onClick={() => { setUploadedFile(null), setLoading(false), setErrors([]) }} className='px-4 py-2 text-center rounded w-[100%] border'>Upload Again</button>
                        </div>
                        }
                    </div>
                }
            </div>}
        </div>
    );
};

export default FileUpload;