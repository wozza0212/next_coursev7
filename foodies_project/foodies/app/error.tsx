"use client";

const ErrorMessage = ({ error }: { error: Error }) => {
  return (
    <main className="error">
      <h1>An error has occured while loading meals page</h1>
      <p>{error.stack ? `${error.stack}` : "unknown error"}</p>
    </main>
  );
};

export default ErrorMessage;
