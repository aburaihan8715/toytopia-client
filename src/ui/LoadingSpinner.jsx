const LoadingSpinner = () => {
  return (
    <div className="max-w-5xl mx-auto text-gray-600 px-2">
      <div className="text-center mt-8 text-5xl">
        <span>L</span>
        <span className="animate-spin border-dotted border-4 border-green-600 w-8 h-8 rounded-full bg-transparent inline-block"></span>
        <span>ading</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
