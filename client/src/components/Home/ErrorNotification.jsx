export const ErrorNotification = ({ error }) => {
  return (
    <>{error && <div className="alert alert-primary" role="alert">{error}</div>}</>
  );
};
