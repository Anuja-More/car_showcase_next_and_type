

const LoaderComp = () => {
    const loaderStyle: React.CSSProperties = {
        borderTop: '4px solid blue', 
        borderRight: '4px solid transparent',
        borderBottom: '4px solid transparent',
        borderLeft: '4px solid transparent',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 2s linear infinite',
      };
  return (
    <div className="flex justify-center items-center h-screen">
      <div style={loaderStyle}></div>
    </div>
  );
};

export default LoaderComp;
