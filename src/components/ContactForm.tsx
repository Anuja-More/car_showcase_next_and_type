"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import LoaderComp from './Loader';

interface FormData {
    fullName: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [success, setSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleGoBack = () => {
        router.push('/');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear the error message when the user types
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Perform form validation
        const validationErrors: Partial<FormData> = {};

        if (!formData.fullName.trim()) {
            validationErrors.fullName = 'Full Name is required';
        }

        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            validationErrors.email = 'Invalid email format';
        }

        if (!formData.message.trim()) {
            validationErrors.message = 'Message is required';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            setIsSubmitting(false);
            return;
        }

        let apiUrlCheck = '';
        if (process.env.NODE_ENV === 'production') {
            apiUrlCheck = `https://car-showcase-next-and-type-1u4i-anuja-more.vercel.app/api/contact`;
        } else {
            apiUrlCheck = `http://localhost:3000/api/contact`;
        }

        const res = await fetch(apiUrlCheck, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const { msg, success } = await res.json();
        setErrors({});
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
            <CustomButton
                title="Back to Home Page"
                containerStyles="m-4 py-[16px] rounded-full bg-primary-blue"
                textStyles="text-white text-[14px] leading-[17px] font-bold"
                handleClick={handleGoBack}
            />
            {isSubmitting && <LoaderComp />}
            {!isSubmitting && !success && (
                <form className="py-4 m-4 border-t flex flex-col gap-5">
                    <div>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            className={`inputclass ${errors.fullName ? 'border-red-500' : ''}`}
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            type="text"
                            id="fullName"
                            placeholder="John Doe"
                        />
                        {errors.fullName && <p className="text-red-600">{errors.fullName}</p>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            className={`inputclass ${errors.email ? 'border-red-500' : ''}`}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="text"
                            id="email"
                            placeholder="john828@gmail.com"
                        />
                        {errors.email && <p className="text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            className={`inputclass h-32 ${errors.message ? 'border-red-500' : ''}`}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            id="message"
                            placeholder="Type your message here"
                        />
                        {errors.message && <p className="text-red-600">{errors.message}</p>}
                    </div>
                    <CustomButton
                        title="Send Message"
                        btnType="submit"
                        containerStyles="m-4 py-[16px] rounded-full bg-green-500"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        handleClick={handleSubmit}
                    />
                </form>
            )}

            {success && (
                <div className="bg-green-100 p-4 text-green-800">
                    Thank you for your message! We will reach out to you soon.
                </div>
            )}
            <div className="bg-slate-100 flex flex-col">
                {errors &&
                    Object.keys(errors).map((key) => (
                        <div key={key} className={`${success ? 'text-green-800' : 'text-red-600'} px-5 py-2`}>
                            {errors[key]}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ContactForm;
