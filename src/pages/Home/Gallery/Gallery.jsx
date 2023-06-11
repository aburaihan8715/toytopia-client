const Gallery = () => {
  return (
    <div className="py-8 bg-red-50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl inline-block underline underline-offset-8 uppercase font-semibold text-secondary">Gallery</h2>
        </div>
        <div className="grid  sm:grid-cols-4 gap-4">
          <div className="row-start-1 row-end-1 col-start-1 col-end-2">
            <img className="w-full h-full object-cover rounded" src="https://i.ibb.co/cJ7WvB0/toy1.jpg" alt="gallery" />
          </div>

          <div className="row-start-1 row-end-3 col-start-2 col-end-3">
            <img className="w-full h-full object-cover rounded" src="https://i.ibb.co/JQq5VK0/toy2.jpg" alt="gallery" />
          </div>

          <div className="row-start-1 row-end-3 col-start-3 col-end-5">
            <img className="w-full h-full object-cover rounded" src="https://i.ibb.co/N2y7qHG/toy3.jpg" alt="gallery" />
          </div>

          <div className="row-start-2 row-end-4 col-start-1 col-end-2">
            <img className="w-full h-full object-cover rounded" src="https://i.ibb.co/x3s8kht/toy4.jpg" alt="gallery" />
          </div>

          <div className="row-start-3 row-end-4 col-start-2 col-end-3">
            <img className="w-full h-full object-cover rounded" src="https://i.ibb.co/G30XKn5/toy5.jpg" alt="gallery" />
          </div>

          <div className="row-start-3 row-end-4 col-start-3 col-end-4">
            <img className="w-full h-full object-cover rounded" src="https://i.ibb.co/VM0F1Jc/toy6.jpg" alt="gallery" />
          </div>

          <div className="row-start-3 row-end-5 col-start-4 col-end-5">
            <img className="w-full h-full object-cover rounded" src="https://i.ibb.co/MV0F4wt/toy7.jpg" alt="gallery" />
          </div>

          <div className="row-start-4 row-end-6 col-start-1 col-end-3">
            <img className="w-full h-full object-cover rounded" src="https://i.ibb.co/ph3VDkc/toy8.jpg" alt="gallery" />
          </div>

          <div className="row-start-4 row-end-6 col-start-3 col-end-4">
            <img className="w-full h-full object-cover rounded" src="https://i.ibb.co/5jRGcfz/toy9.jpg" alt="gallery" />
          </div>

          <div className="row-start-5 row-end-6 col-start-4 col-end-5">
            <img className="w-full h-full object-cover rounded" src="https://i.ibb.co/02QSyZ2/toy10.jpg" alt="gallery" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
