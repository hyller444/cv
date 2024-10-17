import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PdfT = () => {
    const [photoUrl, setPhotoUrl] = useState('');
    const location = useLocation();
    const {
        name = 'invalid',
        title = 'invalid',
        email = 'invalid',
        phone = 'invalid',
        linkedin = 'invalid',
        jobtitle = 'invalid',
        company = 'invalid',
        responsibilitiesList = [],
        degree = 'invalid',
        institution = 'invalid',
        years = 'invalid',
        skillsList = [],
    } = location.state || {};

    const printCV = () => window.print();

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={photoUrl || "https://via.placeholder.com/100"} alt="Profile" style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }} />
                <h1>{name}</h1>
                <h2 style={{ fontStyle: 'italic' }}>{title}</h2>
            </header>

            <input type="text" placeholder="Enter Photo URL" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />

            <section>
                <h3>Contact Information</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>LinkedIn: {linkedin}</p>
            </section>

            <section>
                <h3>Experience</h3>
                <h4>{jobtitle}</h4>
                <p>{company}</p>
                <ul>
                    {responsibilitiesList.length ? responsibilitiesList.map((res, idx) => <li key={idx}>{res}</li>) : <li>No responsibilities listed.</li>}
                </ul>
            </section>

            <section>
                <h3>Education</h3>
                <p>{degree}</p>
                <p>{institution}, {years}</p>
            </section>

            <section>
                <h3>Skills</h3>
                <ul>
                    {skillsList.length ? skillsList.map((skill, idx) => <li key={idx}>{skill}</li>) : <li>No skills listed.</li>}
                </ul>
            </section>

            <button onClick={printCV} style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff', borderRadius: '5px' }}>Print CV</button>
        </div>
    );
};

export default PdfT;
