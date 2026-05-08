import { PostFetured } from '@/components/PostFeatured';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFetured />
      </Suspense>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  );
}
