"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import LoaderComp from './Loader';

const ContactForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
   
    const handleGoBack = () => {
        router.push("/");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const res = await fetch('api/contact', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const { msg, success } = await res.json();
        setErrors(msg);
        setSuccess(success);
        setIsSubmitting(false);

        if (success) {
            setFormData({
                fullName: '',
                email: '',
                message: '',
            });
        }
    };

    return (
        <div className="m-8">
             <CustomButton title='Back to Home Page'
                    containerStyles='m-4 py-[16px] rounded-full bg-primary-blue'
                    textStyles='text-white text-[14px] leading-[17px] font-bold' handleClick={handleGoBack} />
            {isSubmitting && <LoaderComp />}
            {!isSubmitting && !success && (<form className="py-4 m-4 border-t flex flex-col gap-5">
                <div>
                    <label htmlFor="fullName">FullName</label>
                    <input
                        className="inputclass"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        type="text"
                        id="fullName"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        className="inputclass"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="text"
                        id="email"
                        placeholder="john828@gmail.com"
                    />
                </div>
                <div>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        className="inputclass h-32"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        id="message"
                        placeholder="Type your message here"
                    />
                </div>
                <CustomButton title='Send Message'
                    btnType='submit'
                    containerStyles='m-4 py-[16px] rounded-full bg-green-500'
                    textStyles='text-white text-[14px] leading-[17px] font-bold' handleClick={handleSubmit} />
            </form>)
            }

            <div className="bg-slate-100 flex flex-col">
                {errors &&
                    errors.map((error, index) => (
                        <div
                            key={index}
                            className={`${success ? 'text-green-800' : 'text-red-600'} px-5 py-2`}
                        >
                            {error}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ContactForm;
