import { TextBox } from "@app/components";

export const B2BCompltedFormContent: React.FC<{
	resulte: string;
	fullname?: string;
	email?: string;
	date?: string;
}> = ({ resulte, fullname, email, date }) => {
	return (
		<section className='flex flex-col gap-4 p-8 w-full border border-[#C9C4D3] max-w-[50%] rounded-xl'>
			<section className='flex flex-col gap-2 w-full'>
				<section className='flex flex-row justify-between'>
					<h3 className='text-[12px] text-[#484551] font-bold'>
						SHRNUTÍ POPTÁVKY
					</h3>
					<span className='text-[14px] text-[#20026E] font-bold'>B2B</span>
				</section>
				<hr className='text-[#C9C4D3]' />
			</section>
			<section className='flex flex-row justify-between w-full'>
				<section className='flex flex-col gap-6'>
					<TextBox title={resulte} name='VYBRANÁ KONFIGURACE' />
					<TextBox title={fullname} name='KONTAKTNÍ OSOBA' />
				</section>
				<section className='flex flex-col gap-6 '>
					<TextBox title={email} name='E-MAIL' />
					<TextBox title={date} name='TERMÍN' />
				</section>
			</section>
		</section>
	);
};
