import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Contact our knowledgeable team today for assistance and information on our number 1 academic job board site in higher education and academia. ',
  keywords: 'Contact Us Academicjobs, Contact Academic Jobs, Academicjobs Contact',
};
export default function myPage() {
  return (
    <>
      <main className="content-grid">
        <div className="prose">
          <h1>Let’s Get Together!</h1>
          <h2 className="mt-4">
            Tell us what you need, and we will be straight back to you. We make
            it easy for you at Academic Jobs!
          </h2>
          <h4 className="mt-4">
            <span className="font-bold mt-">Fun Fact: </span> AcademicJobs.com
            is the go-to job board in higher education, experiencing rapid
            growth with a larger audience and more job opportunities than any
            other. Join the success story that even has our mothers beaming with
            pride!
          </h4>
        </div>

        <div className="full-width bg-slate-100 py-6 px-8 mt-12">
          <h3 className="text-[#f4a10c] font-bold pb-4">
            GLOBAL OFFICE PHONE NUMBERS
          </h3>
          <div className="grid grid-cols-1 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:md:grid-cols-2 gap-8 text-lg">
            <ul>
              <li>
                <a className="footer-nav__link" href="tel:+852-3730021">
                  Asia: +852-3730021(Hong Kong)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+61-452070156">
                  Australia: +61-452070156 (Melbourne)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:778 819 1866">
                  Canada: 778 819 1866(Vancouver)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+415 819 0021">
                  United States: 415 819 0021 (San Francisco )
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="footer-nav__link" href="tel:+49-4158730021">
                  Europe: +49-4158730021(Berlin)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+61-452070156">
                  New Zealand: +61-452070156 (Wellington)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+91-2250972736">
                  India: +91-2250972736 (Mumbai)
                </a>
              </li>

              <li>
                <a className="footer-nav__link" href="tel:+44-2045876329">
                  United Kingdom: +44-2045876329(London)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
