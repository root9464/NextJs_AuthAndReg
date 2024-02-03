import {getServerSession} from 'next-auth';
import {authOptions} from '../utils/auth';
import LogoutButton from '../components/LogoutButton';
import {Button} from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
	const session = await getServerSession(authOptions);

	return (
		<div className='p-10'>
			<h1>Войти в систему</h1>
			{session ? (
				<div>
					<h1>ты зареган сучка </h1>
					<LogoutButton />
				</div>
			) : (
				<div>
					<h1>ты не зареган сучка</h1>
					<Button asChild>
						<Link href='/auth'>Login</Link>
					</Button>
				</div>
			)}
		</div>
	);
}
