import { Todo } from '@/components/Todo';
import { client } from '@/lib/wundergraph';
import { revalidatePath } from 'next/cache';

export default async function Home() {
	const { data } = await client.query({
		operationName: 'users/get',
		input: {
			id: '1',
		},
	});

	return (
		<main>
			<div className="bg-gray-100 min-h-screen py-6">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl font-bold text-center mb-6 text-gray-800">WunderGraph TodoList</h1>
					<div className="bg-white rounded-lg shadow p-6">
						<h1 className="text-2xl font-semibold mb-4 text-gray-700">Todo List</h1>
                            <div>ID: {data?.id}</div>
				            <div>Name: {data?.name}</div>
				            <div>Bio: {data?.bio}</div>
					</div>
				</div>
			</div>
		</main>
	);
}
