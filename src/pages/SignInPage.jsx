import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';
import Button from '../components/Button';
import ContactModal from '../components/ContactModal';
import FormField from '../components/FormField';
import Logo from '../components/Logo';
import PromoPanel from '../components/PromoPanel';
import TextButton from '../components/TextButton';
import useAdminSignIn from '../hooks/useAdminSignIn';
import { BRAND, ROUTES, SIGN_IN_CONTENT } from '../utils/constants';

function SignInPage() {
	const navigate = useNavigate();
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	const {
		fields,
		values,
		isLoading,
		isSuccess,
		errorMessage,
		successMessage,
		handleChange,
		handleSubmit,
	} = useAdminSignIn();

	function openContactModal() {
		setIsContactModalOpen(true);
	}

	async function handleSignInSubmit(event) {
		const isAuthenticated = await handleSubmit(event);

		if (isAuthenticated) {
			await new Promise((resolve) => {
				setTimeout(resolve, 400);
			});
			navigate(ROUTES.DASHBOARD);
		}
	}

	return (
		<main className="min-h-screen px-5 py-8 md:px-8 md:py-12">
			<AuthCard
				invertOnDesktop
				leftSection={
					<section className="flex h-full jus  flex-col p-8 md:p-12">
						<div className="my-auto  flex flex-col gap-8">
							<h1 className="m-0 text-[length:var(--font-size-3xl)] font-bold text-[var(--color-brand)]">
								{SIGN_IN_CONTENT.formTitle}
							</h1>
							<form onSubmit={handleSignInSubmit} className="flex flex-col gap-6">
								<div className="flex flex-col gap-4">
									{fields.map((field) => (
										<FormField
											key={field.name}
											label={field.label}
											name={field.name}
											value={values[field.name]}
											onChange={handleChange}
											placeholder={field.placeholder}
											type={field.type}
											Icon={field.Icon}
										/>
									))}
								</div>
								<div className="min-h-6">
									{errorMessage ? (
										<p className="m-0 text-[length:var(--font-size-sm)] font-semibold text-red-600">
											{errorMessage}
										</p>
									) : null}
									{isSuccess ? (
										<p className="m-0 text-[length:var(--font-size-sm)] font-semibold text-green-700">
											{successMessage}
										</p>
									) : null}
								</div>
							
								<div className="pt-8 text-center">
									<Button
										label={isLoading ? 'Signing In...' : SIGN_IN_CONTENT.submitLabel}
										type="submit"
										className={isLoading ? 'opacity-80' : ''}
									/>
								</div>
							</form>
						</div>
					</section>
				}
				rightSection={
					<PromoPanel
						brandName={BRAND.name}
						showLogo={true}
						title={SIGN_IN_CONTENT.panelTitle}
						description={SIGN_IN_CONTENT.panelDescription}
						actionLabel={SIGN_IN_CONTENT.panelActionLabel}
						onAction={openContactModal}
						align="center"
						className="flex h-full flex-col items-center justify-start text-center"
					/>
				
				}
			/>		
				
			<ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
		</main>
	);
}

export default SignInPage;
