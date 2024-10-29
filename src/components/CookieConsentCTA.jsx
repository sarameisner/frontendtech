const CookieConsentCTA = ({ ctatext, handleClose }) => {
  return (
    <button className="cookie-consent-cta" onClick={handleClose}>
      {ctatext}
    </button>
  );
};

export default CookieConsentCTA;
