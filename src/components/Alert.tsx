type AlertProps = {
  children: string;
  onClose: () => void;
};

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{children}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        />
      </div>
    </>
  );
};

export default Alert;
