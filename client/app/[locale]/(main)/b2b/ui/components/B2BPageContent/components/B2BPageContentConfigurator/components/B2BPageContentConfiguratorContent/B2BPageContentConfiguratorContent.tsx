"use client";

import { ToastContainer } from "react-toastify";

import {
	B2BPageContentConfiguratorContentFooter,
	B2BList,
	B2BPageForm,
	B2BCompltedForm,
} from "./components";

export const B2BPageContentConfiguratorContent: React.FC = () => {
	return (
		<section className='flex flex-col gap-8'>
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={true}
				closeOnClick={true}
			/>
			<B2BList />
			<B2BCompltedForm />
			{/* <B2BPageContentConfiguratorContentFooter>
				<B2BPageForm />
			</B2BPageContentConfiguratorContentFooter> */}
		</section>
	);
};
