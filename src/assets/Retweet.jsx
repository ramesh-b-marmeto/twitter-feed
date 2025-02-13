const RetweetIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="icon line"
    >
      <polyline
        points="12 4 14 6 12 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M14,6H4A1,1,0,0,0,3,7V17a1,1,0,0,0,1,1H6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <polyline
        points="12 20 10 18 12 16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10,18H20a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default RetweetIcon;
