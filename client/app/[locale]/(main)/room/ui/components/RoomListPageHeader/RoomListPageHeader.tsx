import { useTranslations } from "next-intl";

export const RoomListPageHeader: React.FC = () => {
	const t = useTranslations("RoomListPageHeader");

	return (
		<section className='flex flex-col gap-7.5'>
			<section className='flex flex-col gap-6'>
				<h2 className='text-[#090030] text-[48px] font-bold max-md:text-[38px]'>
					{t("h2_text")}
				</h2>
				<p className='text-[18px] text-[#484551] font-medium max-w-147 max-md:text-[16px]'>
					{t("p_text")}
				</p>
			</section>
			<hr className='text-[#C9C4D3]' />
		</section>
	);
};
