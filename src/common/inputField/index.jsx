import React from 'react';
import s from './style.module.css';

const InputField = ({ placeholder, value, onChange, label, className, type = 'text', length }) => {
	return (
		<div className={`${s.input_field} ${className}`}>
			{value && <label>{label}</label>}
			<input type={type} placeholder={placeholder} value={value} onChange={onChange} maxLength={length} />
		</div>
	);
};

export default InputField;
