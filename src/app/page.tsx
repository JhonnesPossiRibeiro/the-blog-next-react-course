import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Titulo do post'
            priority
          />
        </Link>
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time className='text-slate-600 text-sm/tight' dateTime='2026-05-04'>04/05/2026 17:30</time>
          <h1 className='text-2xl/tight font-extrabold sm:text-4xl'>
            <Link href='#'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Link>
          </h1>
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
