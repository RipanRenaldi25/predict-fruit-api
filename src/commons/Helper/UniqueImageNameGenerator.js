import { v4 } from 'uuid';

export default function UniqueImageGenerator() {
  return `image-${v4()}-${Math.random() * 100 + 1}`;
}
