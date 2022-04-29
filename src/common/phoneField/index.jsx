import React, { useState } from 'react';
import s from './styles.module.css';
import InputField from '../inputField';
import InputMask from 'react-input-mask';

const MobileField = ({ number, onChange }) => {
	const [showForm, setShowForm] = useState(false);

	const [comment, setComment] = useState('');
	const [value, setValue] = useState('');
	const [typeNumber, setTypeNumber] = useState('Мобильный номер');
	console.log(typeNumber);
	const [dataUserMobile, setDataUserMobile] = useState([]);

	const addedNewInfo = (newobject) => {
		setDataUserMobile([...dataUserMobile, newobject]);
	};

	console.log(dataUserMobile);

	return (
		<div className={s.mobile_field}>
			<div className={s.info}>
				{dataUserMobile?.map((el, index) => {
					return (
						<div key={el.number + index} className={s.info_item}>
							<span>{el.number}</span>
							<span>{el.comment}</span>
						</div>
					);
				})}
			</div>
			{!showForm && (
				<span
					className={s.span_open}
					onClick={() => {
						setShowForm(!showForm);
					}}
				>
					Добавить номер
				</span>
			)}

			<div className={s.form} style={{ height: showForm ? '500px' : '0px' }}>
				<div>
					<p>Тип номера</p>
					<div className={s.radio_btn}>
						<select onChange={(e) => setTypeNumber(e.currentTarget.value)}>
							<option selected={typeNumber === 'Мобильный номер'} value='Мобильный номер' id=''>
								Мобильный номер
							</option>
							<option selected={typeNumber === 'Рабочий номер'} value='Рабочий номер' id=''>
								Рабочий номер
							</option>
							<option selected={typeNumber === 'Домашний номер'} value='Домашний номер' id=''>
								Домашний номер
							</option>
						</select>
					</div>

					<p>Номер</p>
					<div className={s.inputs_value}>
						{/*<InputField label={'Номер телефона'} value={value}*/}
						{/*            placeholder={'Номер телефона'}*/}
						{/*            onChange={onChange}/>*/}
						<div className={s.input}>
							<InputMask mask='+7 (999) 999-99-99' value={value} onChange={(e) => setValue(e.target.value)} placeholder={'+7 (999) 999-99-99'} />
						</div>
						<textarea onChange={(e) => setComment(e.target.value)} value={comment} placeholder={'Комментарий'} rows={5} className={s.text_area} />
					</div>
					{showForm && (
						<span
							className={s.span}
							onClick={() => {
								setShowForm(!showForm);
								addedNewInfo({ number: value, comment: comment });
								onChange(value);
								setComment('');
								setValue('');
								setTypeNumber('Мобильный номер');
							}}
						>
							Сохранить
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default MobileField;
