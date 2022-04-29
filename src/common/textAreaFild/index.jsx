import React from 'react';
import s from './style.module.css';

const TextAreaFild = ({ placeholder, value, onChange, label, className, type = 'text' }) => {
	return (
		<div className={`${s.input_field} ${className}`}>
			{value && <label>{label}</label>}
			<textarea onChange={onChange} value={value} placeholder={placeholder} rows={1} className={s.text_area} />
		</div>
	);
};

export default TextAreaFild;
