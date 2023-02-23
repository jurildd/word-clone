import React from "react";

import Banner from '../Banner';

function LoseBanner({ answer }) {
  return (
    <Banner status="sad">
        Sorry, the correct answer is <strong>{answer}</strong>.
    </Banner>
  );
}

export default LoseBanner;
