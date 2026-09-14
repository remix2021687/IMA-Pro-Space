"use client";

import { ToastContainer } from "react-toastify";

import { useAppSelector } from "@lib/store/hooks";
import {
	B2BPageContentConfiguratorContentFooter,
	B2BList,
	B2BPageForm,
	B2BCompltedForm,
} from "./components";

export const B2BPageContentConfiguratorContent: React.FC = () => {
	const SuccessState = useAppSelector((state) => state.B2BSlice.Success);

	return (
		<section className='flex flex-col gap-8'>
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={true}
				closeOnClick={true}
			/>
			<B2BList />
			{SuccessState ? (
				<B2BCompltedForm />
			) : (
				<B2BPageContentConfiguratorContentFooter>
					<B2BPageForm />
				</B2BPageContentConfiguratorContentFooter>
			)}
		</section>
	);
};
