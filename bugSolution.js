```javascript
// pages/about.js
import { ErrorBoundary } from 'next/error-boundary';

function About() {
  throw new Error('Intentional error');
}

export default function AboutPage() {
  return (
    <ErrorBoundary>
      <About/>
    </ErrorBoundary>
  );
}
```