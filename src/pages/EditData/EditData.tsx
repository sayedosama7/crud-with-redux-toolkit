import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { editData } from '../../rtk/dataSlices';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';

const EditForm = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const { id, name, email, phone } = location.state;
	const navigate = useNavigate();

	const [nameUpdate, setNameUpdate] = useState<string>(name || '');
	const [emailUpdate, setEmailUpdate] = useState<string>(email || '');
	const [phoneUpdate, setPhoneUpdate] = useState<string>(phone || '');
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [phoneError, setPhoneError] = useState(false);

	const handleUpdate = () => {
		setNameError(false);
		setEmailError(false);
		setPhoneError(false);

		if (nameUpdate === '') setNameError(true);
		if (emailUpdate === '') setEmailError(true);
		if (phoneUpdate === '') setPhoneError(true);

		if (nameUpdate && emailUpdate && phoneUpdate) {
			dispatch(
				editData({
					id,
					name: nameUpdate,
					email: emailUpdate,
					phone: phoneUpdate,
				})
			);
			navigate('/crud-table');
			toast.info('updated successfully!', {
				position: 'top-center',
			});
		}
	};

	const handleKeyPress = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			handleUpdate();
		}
	};
	return (
		<div className="container mt-5">
			<div className="d-flex justify-content-between align-items-center">
				<h1 className="my-5 text-center">Edit Data</h1>
				<Link to="/crud-table">
					<ArrowBackIcon
						className="bg-info rounded-circle p-1 text-white"
						sx={{ fontSize: '50px' }}
					/>
				</Link>
			</div>
			<div className="d-flex flex-column">
				<TextField
					id="name"
					label="Name"
					name="name"
					className="mb-3 w-50 m-auto bg-light form-input"
					type="text"
					value={nameUpdate}
					onChange={e => setNameUpdate(e.target.value)}
					placeholder="Add name"
					onKeyPress={handleKeyPress}
				/>
				<div className="error">
					{nameError ? 'please enter your Name' : ''}
				</div>

				<TextField
					id="email"
					label="Email"
					variant="outlined"
					className="mb-3 w-50 m-auto bg-light form-input"
					type="email"
					name="email"
					value={emailUpdate}
					onChange={e => setEmailUpdate(e.target.value)}
					placeholder="Add email"
					onKeyPress={handleKeyPress}
				/>
				<div className="error">
					{emailError ? 'please enter your Email' : ''}
				</div>

				<TextField
					type="phone"
					id="phone"
					label="Phone"
					variant="outlined"
					name="phone"
					className="mb-3 w-50 m-auto bg-light form-input"
					value={phoneUpdate}
					onChange={e => setPhoneUpdate(e.target.value)}
					placeholder="Add phone"
					onKeyPress={handleKeyPress}
				/>
				<div className="error">
					{phoneError ? 'please enter your Phone' : ''}
				</div>

				<div className="mt-2 text-center">
					<Button
						variant="contained"
						color="primary"
						onClick={handleUpdate}
					>
						Update
					</Button>
				</div>
			</div>
		</div>
	);
};

export default EditForm;
