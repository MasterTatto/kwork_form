import React, { useState } from 'react';
import s from './styles.module.css';
import InputField from '../../common/inputField';
import DateField from '../../common/dateField';
import MobileField from '../../common/phoneField';
import TextAreaFild from '../../common/textAreaFild';

const AddedClientForm = () => {
	const [fullName, setFullName] = useState({
		name: '',
		lastName: '',
		fatherName: '',
	});

	const [userPasport, setUserPasport] = useState({
		seris: '',
		number: '',
		issuedBy: '',
		dateIssued: 'Дата выдачи',
		registration: '',
	});
	
	const [userInfo, setUserInfo] = useState({
		address: '',
		number: '',
		email: '',
	});

	const [workUserInfo, setWorkUserInfo] = useState({
		position: '',
		nameCompany: '',
		numberCompany: '',
	});

	const [dateValue, setDateValue] = useState('dd/mm/yy');

	return (
		<div className={s.added_client_form}>
			<div className={s.first_box}>
				<div>
					<div className={s.block_item}>
						<p>Инициалы</p>
						<br />
						<InputField
							label={'Фамилия'}
							value={fullName.lastName}
							placeholder={'Фамилия'}
							onChange={(e) => setFullName({ ...fullName, lastName: e.target.value })}
						/>
						<InputField
							label={'Имя'}
							value={fullName.name}
							placeholder={'Имя'}
							onChange={(e) => setFullName({ ...fullName, name: e.target.value })}
						/>
						<InputField
							label={'Отчество'}
							value={fullName.fatherName}
							placeholder={'Отчество'}
							onChange={(e) => setFullName({ ...fullName, fatherName: e.target.value })}
						/>
					</div>

					<div className={s.block_item}>
						<p>Дата рождения</p>
						<br />
						<DateField type={'dd/mm/yy'} value={dateValue} onChange={(e) => setDateValue(e.target.value)} />
					</div>

					<div className={s.block_item}>
						<p>Адрес, номер телефона и почта</p>
						<br />
						<TextAreaFild
							label={'Фактический адресс'}
							value={userInfo.address}
							placeholder={'Фактический адресс'}
							onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
						/>
						<MobileField number={userInfo.number} onChange={(number) => setUserInfo({ ...userInfo, number: number })} value={userInfo.number} />

						<InputField
							label={'Электронная почта'}
							value={userInfo.email}
							placeholder={'Электронная почта'}
							onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
							type={'email'}
						/>
					</div>
				</div>

				<div className={s.second_box}>
					<div className={s.block_item}>
						<p>Работа</p>
						<br />
						<InputField
							label={'Должность'}
							value={workUserInfo.position}
							placeholder={'Должность'}
							onChange={(e) => setWorkUserInfo({ ...workUserInfo, position: e.target.value })}
						/>

						<InputField
							label={'Название компании'}
							value={workUserInfo.nameCompany}
							placeholder={'Название компании'}
							onChange={(e) => setWorkUserInfo({ ...workUserInfo, nameCompany: e.target.value })}
						/>

						<MobileField
							number={workUserInfo.numberCompany}
							onChange={(number) =>
								setWorkUserInfo({
									...workUserInfo,
									numberCompany: number,
								})
							}
							value={workUserInfo.numberCompany}
						/>
					</div>

					<div className={s.block_item}>
						<p>Паспортные данные</p>
						<br />
						<div className={s.pasport_number}>
							<InputField
								className={s.pasport}
								label={'Серия'}
								type='number'
								value={userPasport.seris}
								placeholder={'Серия'}
								onChange={(e) => {
									if (e.target.value.length > 4) return;
									setUserPasport({ ...userPasport, seris: e.target.value });
								}}
							/>

							<InputField
								className={s.pasport}
								label={'Номер'}
								type='number'
								length={'4'}
								value={userPasport.number}
								placeholder={'Номер'}
								onChange={(e) => {
									if (e.target.value.length > 6) return;
									setUserPasport({ ...userPasport, number: e.target.value });
								}}
							/>
						</div>
						<TextAreaFild
							label={'Кем выдан'}
							value={userPasport.issuedBy}
							placeholder={'Кем выдан'}
							onChange={(e) => setUserPasport({ ...userPasport, issuedBy: e.target.value })}
						/>

						<DateField
							type={'Дата выдачи'}
							value={userPasport.dateIssued}
							onChange={(e) => setUserPasport({ ...userPasport, dateIssued: e.target.value })}
						/>

						<TextAreaFild
							label={'Прописка'}
							value={userPasport.registration}
							placeholder={'Прописка'}
							onChange={(e) => setUserPasport({ ...userPasport, registration: e.target.value })}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddedClientForm;
