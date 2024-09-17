import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import CrudTable from './pages/DataTable/DataTable';
import { Provider } from 'react-redux';
import { store } from './rtk/store';
import EditData from './pages/EditData/EditData';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/crud-table',
		element: <CrudTable />,
	},
	{
		path: '/edit-form',
		element: <EditData />,
	},
]);

const rootElement = document.getElementById('root');
if (rootElement) {
	createRoot(rootElement).render(
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}
