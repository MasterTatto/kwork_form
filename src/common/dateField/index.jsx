import React, { useRef, useState } from 'react';
import s from './style.module.css';
import { ReactComponent as CalendarSVG } from '../../assets/calendar.svg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DateField = ({ onChange, value, type }) => {
	const [valueCalendar, onChangeValue] = useState(new Date());
	const [showCalendare, setShowCalendare] = useState(false);
	const month = valueCalendar.getMonth() + 1;
	const day = valueCalendar.getDate();
	const currentlyDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${valueCalendar.getFullYear()}`;

	return (
		<div className={s.date_box}>
			<div className={s.input} onClick={() => setShowCalendare(true)}>
				<CalendarSVG />
			</div>

			<div>
				{showCalendare && (
					<div className={s.calendare}>
						<Calendar
							onClickDay={() => {
								setTimeout(() => setShowCalendare(false), 1);
							}}
							onChange={onChangeValue}
							value={valueCalendar}
						/>
					</div>
				)}
			</div>
			{/*<span>{value === type ? value : currentlyDate}</span>*/}
			<span className={s.show_date}>{currentlyDate}</span>
		</div>
	);
};

export default DateField;
