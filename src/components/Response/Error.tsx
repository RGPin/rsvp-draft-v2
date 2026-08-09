type ErrorProps = {
  errors: Record<string, string[] | undefined>;
};

export const Error = ({ errors }: ErrorProps) => {
  if (!errors) return null;

  return (
    <>
      {Object.values(errors)
        .flat()
        .map((error, index) => (
          <p key={index} className="error-text">
            {error}
          </p>
        ))}
    </>
  );
};
