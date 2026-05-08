import { formatDatetime } from '@/utils/format-datetime';
import { PostHeading } from '../PostHeading';
import { PostModel } from '@/models/post/post-models';

type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export async function PostSummary({ postHeading, postLink, createdAt,title,excerpt }: PostSummaryProps) {
  return (
    <div className='flex flex-col gap-4 sm:justify-center'>
      <time className='text-slate-600 text-sm/tight' dateTime={createdAt}>
        {formatDatetime(createdAt)}
      </time>

      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
