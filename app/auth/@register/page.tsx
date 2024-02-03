import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import {getServerSession} from 'next-auth';
import {authOptions} from '../../../utils/auth';
import {redirect} from 'next/navigation';
import SignInForm from '../../../components/SigInForm';

export default async function AuthRoute() {
	const session = await getServerSession(authOptions);

	if (session) {
		return redirect('/');
	}

	return (
		<div className='h-screen flex items-center justify-center'>
			<Card className='w-9/12	'>
				<CardHeader>
					<CardTitle>Пожалуйста войдите </CardTitle>
					<CardDescription>
            Чтобы получить доступ к личной странице, вы должны пройти аутентификацию
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='flex flex-col wm-20'>
						<SignInForm />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
