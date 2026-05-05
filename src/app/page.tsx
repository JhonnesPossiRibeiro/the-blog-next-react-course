import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{ href: '#' }}
          imageProps={{
            src: '/images/bryen_9.png',
            alt: 'alt da imagem',
            width: 1200,
            height: 720,
            priority: true,
          }}
        />
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time className='text-slate-600 text-sm/tight' dateTime='2026-05-04'>
            04/05/2026 17:30
          </time>

          <PostHeading url='#' as='h1'>
            culpa? Ducimus ipsum sequi dolorum? Magni.
          </PostHeading>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            voluptate nobis totam nisi vitae dolores blanditiis praesentium,
            repellendus saepe itaque voluptas similique consequuntur ducimus
            culpa? Ducimus ipsum sequi dolorum? Magni.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer className='text-6xl font-bold text-center py-8'>Footer</footer>
    </Container>
  );
}
