import { Container } from '@/components/Container';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <header className='text-6xl font-bold text-center py-8'>
        Aqui é a header
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer className='text-6xl font-bold text-center py-8'>Footer</footer>
    </Container>
  );
}
