import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteData } from '../../rtk/dataSlices';
import { Item, RootState } from '../../types/types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CrudTable = () => {
	const data = useSelector((state: RootState) => state.crud.items);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDelete = (id: number) => {
		dispatch(deleteData({ id }));
		toast.info('deleted successfully!', {
			position: 'top-center',
		});
	};

	return (
		<div>
			<ToastContainer />
			<div className="container mt-5">
				<div className="row">
					<div className="d-flex justify-content-between align-items-center">
						<h1 className="my-5 text-center">data table</h1>
						<Link to="/">
							<ArrowBackIcon
								className="bg-info rounded-circle p-1 text-white"
								sx={{ fontSize: '50px' }}
							/>
						</Link>
					</div>
					<div className="col-md-12">
						<TableContainer component={Paper}>
							<Table aria-label="crud table">
								<TableHead>
									<TableRow>
										<TableCell className="text-center">
											Name
										</TableCell>
										<TableCell className="text-center">
											Email
										</TableCell>
										<TableCell className="text-center">
											Phone
										</TableCell>
										<TableCell className="text-center">
											Operation
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data?.map((item: Item) => (
										<TableRow key={item.id}>
											<TableCell className="text-center">
												{item.name}
											</TableCell>
											<TableCell className="text-center">
												{item.email}
											</TableCell>
											<TableCell className="text-center">
												{item.phone}
											</TableCell>
											<TableCell className="text-center">
												<Button
													variant="contained"
													color="primary"
													onClick={() =>
														navigate('/edit-form', {
															state: {
																id: item.id,
																name: item.name,
																email: item.email,
																phone: item.phone,
															},
														})
													}
													className="mx-2 mb-2"
												>
													<EditIcon />
												</Button>
												<Button
													variant="contained"
													color="error"
													onClick={() =>
														handleDelete(item.id)
													}
													className="mb-2"
												>
													<DeleteIcon />
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CrudTable;
