const CopyRightNotice = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 text-center text-xs text-white">
      © {currentYear} Larry Bryan Live, LLC. All rights reserved.
    </div>
  );
};

export default CopyRightNotice;
