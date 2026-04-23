import { useMemo, useState } from 'react';
import { submitSignIn } from '../services/authService';
import { mapFieldsWithIcons } from '../utils/iconMap';
import { SIGN_IN_FIELDS } from '../utils/formSchemas';

const SUCCESS_MESSAGE = 'Access granted. Redirecting...';

function createInitialValues() {
	return {
		email: '',
		password: '',
	};
}

function useAdminSignIn() {
	const fields = useMemo(() => mapFieldsWithIcons(SIGN_IN_FIELDS), []);
	const [values, setValues] = useState(createInitialValues);
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	function handleChange(event) {
		const { name, value } = event.target;
		setValues((previousValues) => ({
			...previousValues,
			[name]: value,
		}));

		if (errorMessage) {
			setErrorMessage('');
		}

		if (isSuccess) {
			setIsSuccess(false);
			setSuccessMessage('');
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();

		if (isLoading) {
			return false;
		}

		setIsLoading(true);
		setErrorMessage('');
		setIsSuccess(false);
		setSuccessMessage('');

		try {
			await submitSignIn(values);
			setIsSuccess(true);
			setSuccessMessage(SUCCESS_MESSAGE);
			return true;
		} catch (error) {
			setErrorMessage(error.message || 'Unable to sign in.');
			return false;
		} finally {
			setIsLoading(false);
		}
	}

	return {
		fields,
		values,
		isLoading,
		isSuccess,
		errorMessage,
		successMessage,
		handleChange,
		handleSubmit,
	};
}

export default useAdminSignIn;
