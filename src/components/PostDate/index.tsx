type PostDateProps ={
  datetime: string
}

import { formatDatetime } from "@/utils/format-datetime";

export default function PostDate({datetime}:PostDateProps) {
  return (
    <time className='text-slate-600 text-sm/tight' dateTime={datetime}>
      {formatDatetime(datetime)}
    </time>
  );
}
