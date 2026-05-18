type PostDateProps ={
  dateTime: string
}

import { formatDatetime } from "@/utils/format-datetime";
import { formatDistanceToNow } from "date-fns";

export default function PostDate({dateTime}:PostDateProps) {
  return (
    <time className='text-slate-600 text-sm/tight' dateTime={dateTime} title={formatDistanceToNow(dateTime)}>
      {formatDatetime(dateTime)}
    </time>
  );
}
