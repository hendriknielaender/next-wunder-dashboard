import { Content } from '@/components/home/content';
import { client } from '@/lib/wundergraph';
import { revalidatePath } from 'next/cache';

export default async function Home() {
	return (
		<main>
            <Content />
		</main>
	);
}
