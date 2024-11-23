type MessageProps = {
  children: string;
};

function Message({ children }: MessageProps) {
  return <div className="alert alert-primary">{children}</div>;
}

export default Message;
