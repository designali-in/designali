'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
	category: z.string().max(500),
});
export default function Search({ className }: { className?: string }) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			category: '',
		},
	});
	const router = useRouter();

	const onSubmit = () => {
		if (form.getValues('category'))
			router.push(`/graphic/${form.getValues('category')}`);
		form.reset();
	};

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className={`${className}`}>
					<FormField
						control={form.control}
						name='category'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Search...'
										{...field}
										className='pl-6 text-primary h-12 my-3 bg-transparent w-full rounded-lg'
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</>
	);
}
