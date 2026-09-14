import { useTranslations } from "next-intl";

export const B2BCompltedFormHeader: React.FC<{ email?: string }> = ({
	email,
}) => {
	const t = useTranslations("B2BCompltedFormHeader");

	return (
		<section className='flex flex-col gap-2 items-center'>
			<h2 className='text-[32px] text-[#1C1B21] font-semibold'>
				{t("h2_text")}
			</h2>
			<p className='max-w-140 text-[16px] text-[#484551] leading-[25.6px] text-center'>
				{t("p_text.step_1")} {""}
				<span className='text-[#1C1B21] font-semibold'>{email}</span>.{" "}
				{t("p_text.step_2")}
			</p>
		</section>
	);
};
