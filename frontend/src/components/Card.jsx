export const Card = () => {
    return (
      <div className="p-2 w-1/3 bg-gray-300">
        <div className="shadow-lg p-4">
          <div className=" p-2 relative" style={{ paddingTop: '100%' }}>
            <img 
              src="https://www.offerpalika.com/images/about.webp" 
              alt="" 
              className="absolute top-0 left-0 w-full h-full object-cover" 
            />
          </div>
          <div className="p-4" style={{ height: 'calc(100% - 100px)' }}>Fitness</div>
        </div>
      </div>
    );
  };
  