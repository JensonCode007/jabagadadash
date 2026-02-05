const CampusMap = () => {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden border border-neutral-800">
      <iframe
        title="Chinmaya Vishwa Vidyapeeth Global Campus (Satellite)"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.6147726627237!2d76.52308317572562!3d9.88265039021685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d924be2337d5%3A0x908a3bb9c7fcbdb!2sChinmaya%20Vishwa%20Vidyapeeth%20-%20Global%20Campus%2C%20Piravom!5e1!3m2!1sen!2sin"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
};

export default CampusMap;
