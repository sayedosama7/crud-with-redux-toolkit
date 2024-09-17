import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../../rtk/dataSlices';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

const DataForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [phoneError, setPhoneError] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleAdd = () => {
		setNameError(false);
		setEmailError(false);
		setPhoneError(false);

		if (name === '') setNameError(true);
		if (email === '') setEmailError(true);
		if (phone === '') setPhoneError(true);

		if (name && email && phone) {
			dispatch(addData({ id: Date.now(), name, email, phone }));
			navigate('/crud-table');
			toast.success('added successfully!', {
				position: 'top-center',
			});
		}
	};
	const handleKeyPress = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			handleAdd();
		}
	};
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1 className="my-5 text-center">
							Crud operation with rtk
						</h1>
					</div>
					<div className="d-flex flex-column">
						<TextField
							id="name"
							label="Name"
							name="name"
							value={name}
							onChange={e => setName(e.target.value)}
							placeholder="Add name"
							className="mb-3 w-50 m-auto bg-light form-input"
							error={nameError}
							onKeyPress={handleKeyPress}
						/>
						<div className="error">
							<div className="error">
								{nameError ? 'please enter your Name' : ''}
							</div>
						</div>

						<TextField
							id="email"
							label="Email"
							variant="outlined"
							name="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder="Add email"
							className="mb-3 w-50 m-auto bg-light form-input"
							onKeyPress={handleKeyPress}
						/>
						<div className="error">
							{emailError ? 'please enter your Email' : ''}
						</div>

						<TextField
							id="phone"
							label="Phone"
							variant="outlined"
							name="phone"
							value={phone}
							onChange={e => setPhone(e.target.value)}
							placeholder="Add phone"
							className="mb-3 w-50 m-auto bg-light form-input"
							error={phoneError}
							onKeyPress={handleKeyPress}
						/>
						<div className="error">
							{phoneError ? 'please enter your Phone' : ''}
						</div>
					</div>

					<div className="mt-2 text-center">
						<Button
							variant="contained"
							color="success"
							onClick={handleAdd}
						>
							Add
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataForm;
