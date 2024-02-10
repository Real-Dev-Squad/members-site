import { NOT_FOUND_CONSTANT } from '@/constants/NotFound';
import NotFound from '@/src/components/NotFound';

export default function NotFoundPage() {
  return <NotFound text={NOT_FOUND_CONSTANT.PAGE_NOT_FOUND} />;
}
