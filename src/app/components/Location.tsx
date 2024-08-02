const Location = () => {
  return (
    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden shadow-lg shadow-gray-500/50">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d220.77339509492282!2d85.31836510924599!3d27.70572667570126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1722581809568!5m2!1sen!2snp"
        className="absolute top-0 left-0 w-full h-full "
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Location;
