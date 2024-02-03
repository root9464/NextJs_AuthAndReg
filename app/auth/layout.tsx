
export default function InfoLayout({children, register}: {
	children: React.ReactNode;
	register: React.ReactNode;

}) {
	return (
		<div className='container mx-auto flex flex-col items-center justify-center'>
			{children}
			{register}
		</div>
	);
}
