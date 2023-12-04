export const ErrorNotification = ({error}) => {
  
  return (
    <div className="alert alert-primary" role="alert">
      {error}
    </div>
  );
};
