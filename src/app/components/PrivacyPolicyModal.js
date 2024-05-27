const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center overflow-auto"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 max-h-full overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Privacy Policy</h2>
          <button onClick={onClose} className="text-xl font-bold">
            &times;
          </button>
        </div>
        <div className="mt-4">
          <p>
            We are committed to protecting your privacy. This policy explains
            how we collect, use, and protect your personal information.
          </p>
          <h3 className="mt-2 font-semibold">What Data We Collect</h3>
          <p>
            We collect your email address to notify you when our website goes
            live.
          </p>
          <h3 className="mt-2 font-semibold">How We Use Your Data</h3>
          <p>
            We will use your email address to send a one-time notification when
            our website launches. We will not share your email address with any
            third parties.
          </p>
          <h3 className="mt-2 font-semibold">Data Security</h3>
          <p>
            We implement appropriate security measures to protect your email
            address from unauthorized access, alteration, disclosure, or
            destruction.
          </p>
          <h3 className="mt-2 font-semibold">Your Rights</h3>
          <p>
            You can request to see the data we have collected about you or
            withdraw your consent at any time by contacting us at
            https://www.facebook.com/profile.php?id=61558231244720
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
