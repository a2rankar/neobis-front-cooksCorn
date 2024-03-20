import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';
import LoadingScreen from "../Logo/LoadingScreen.png";

const LoadingPage = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            navigate('/login');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="preload" style={{ display: loading ? 'flex' : 'none' }}>
            <img src={LoadingScreen.png} alt="Loading..." />
        </div>
    );
};

export default LoadingPage;
