import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Pdf = () => {
    const styles = {
        formContainer: { maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#f9f9f9' },
        inputGroup: { marginBottom: '15px' },
        input: { width: '100%', padding: '10px', borderRadius: '5px' },
        button: { marginTop: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#007BFF', color: '#fff' }
    };

    const [formData, setFormData] = useState({
        name: '', title: '', email: '', phone: '', linkedin: '', jobtitle: '', company: '',
        responsibilities: '', degree: '', institution: '', years: '', skills: ''
    });
    const [skillsList, setSkillsList] = useState([]);
    const [responsibilitiesList, setRespoList] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/CVhome', { state: { ...formData, skillsList, responsibilitiesList } });
    };

    const addItem = (field, list, setList) => {
        if (formData[field].trim()) {
            setList([...list, formData[field]]);
            setFormData({ ...formData, [field]: '' });
        }
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <form style={styles.formContainer}>
            <h2>CV Input Form</h2>
            {['name', 'title', 'email', 'phone', 'linkedin', 'jobtitle', 'company', 'responsibilities', 'degree', 'institution', 'years', 'skills'].map((field) => (
                <div key={field} style={styles.inputGroup}>
                    <input style={styles.input} type="text" name={field} placeholder={field} value={formData[field]} onChange={handleChange} />
                </div>
            ))}
            <button type="button" style={styles.button} onClick={() => addItem('responsibilities', responsibilitiesList, setRespoList)}>Add Experience</button>
            <button type="button" style={styles.button} onClick={() => addItem('skills', skillsList, setSkillsList)}>Add Skill</button>
            <button type="submit" style={styles.button} onClick={handleSubmit}>Submit</button>
        </form>
    );
};

export default Pdf;
