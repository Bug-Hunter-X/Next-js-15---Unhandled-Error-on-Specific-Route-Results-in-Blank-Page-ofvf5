# Next.js 15 Unhandled Error on Specific Route

This repository demonstrates a bug in Next.js 15 where an unhandled error on a specific route results in a blank page instead of the default error page. The error is intentionally thrown in `pages/about.js`.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.

You'll see a blank page instead of a proper error page.

## Solution

The solution involves using the `ErrorBoundary` component from `next/error-boundary`.  This component catches errors in child components and renders a fallback UI instead of letting the error propagate, avoiding the blank page issue.  The solution file shows the corrected implementation.
