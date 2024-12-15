"use client";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen m-auto flex flex-col items-center justify-center">
      <p className="inline-flex items-center gap-4">
        <strong className="text-4xl">404</strong> Page not Found
      </p>
      <Link className="btn-orange mt-12" href="/">
        Back to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
