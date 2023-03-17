interface ErrorMessageProps {
    errorMessage: string | undefined;
  }
  
  const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
    return (
      <>
        {errorMessage && (
          <div style={{ color: "red", marginTop: "0.5rem" }}>
            {errorMessage}
          </div>
        )}
      </>
    );
  };
  export default ErrorMessage;