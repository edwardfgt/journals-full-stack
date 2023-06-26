import { useState } from "react";
import NewsletterModal from "../newsletter-modal/newsletterModal";

const NewsletterGrid = ({ newsletters }) => {
  const [open, setOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const handleOpen = (newsletter) => {
    setCurrentModal(newsletter);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentModal(null);
    setOpen(false);
  };

  return (
    <>
      <div className="flex justify-center mb-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6">
          {newsletters.map((newsletter, index) => (
            <div
              className="card w-96 bg-base-100 shadow-xl image-full hover:border"
              key={index}
              onClick={() => handleOpen(newsletter)}
            >
              <figure>
                <img src={newsletter.image} alt={newsletter.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{newsletter.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NewsletterModal
        open={open}
        onClose={handleClose}
        newsletter={currentModal}
      />
    </>
  );
};

export default NewsletterGrid;
