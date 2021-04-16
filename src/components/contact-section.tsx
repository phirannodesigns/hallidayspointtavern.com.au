import * as React from 'react';

import { ContactForm } from './contact-form';
import { SideBySide } from './side-by-side';

function ContactSection(): React.ReactElement {
  return (
    <SideBySide bgColorClass="bg-teal-transparent">
      <SideBySide.TwoCols>
        <ContactForm />
      </SideBySide.TwoCols>
      <SideBySide.ThreeCols>{/*  */}</SideBySide.ThreeCols>
    </SideBySide>
  );
}

export { ContactSection };
