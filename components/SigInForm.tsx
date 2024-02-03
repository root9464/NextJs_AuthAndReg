'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {toast} from '@/components/ui/use-toast';
import {Github} from 'lucide-react';
import {signIn} from 'next-auth/react';
import {useState} from 'react';

export default function SignInForm() {
	const [email, setEmail] = useState<string>('');

	async function SignInWithEmail() {
		const signInResult = await signIn('email', {
			email,
			callbackUrl: `${window.location.origin}`,
			redirect: false,
		});

		if (!signInResult?.ok) {
			return toast({
				title: 'Well this did not work...',
				description: 'Something went wrong, please try again',
				variant: 'destructive',
			});
		}

		return toast({
			title: 'Check your email',
			description: 'A magic link has been sent to you',
		});
	}

	return (
		<form action={SignInWithEmail} className='wm-1/3'>
			<div className='flex flex-col gap-y-2'>
				<Label>Email</Label>
				<Input
					className='wm-40 text-sm'
					onChange={e => {
						setEmail(e.target.value);
					}}
					name='email'
					type='email'
					placeholder='name@example.com'
				/>
				<div className='flex flex-row items-center  gap-y-2 gap-x-20' >
					<Button type='submit' className='mt-6 wm-40'>Login with Email</Button>
					<Button
						onClick={async () =>
							signIn('github', {callbackUrl: `${window.location.origin}`})} className='mt-6' variant='secondary'>
					Login with Github <Github className='w-4 h-4 ml-4' />
					</Button>
				</div>
			</div>

		</form>
	);
}
