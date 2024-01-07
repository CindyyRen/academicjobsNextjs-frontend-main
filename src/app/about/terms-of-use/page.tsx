import Image from 'next/image';

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Review our comprehensive terms and conditions to understand the guidelines and agreements for using our academic job board. Learn about the user rights.',
  keywords: 'Terms and Conditions academicjobs, academicjobs Terms and Conditions',
};
export default function myPage() {
  return (
    <>
      <main className="content-grid">
        <div className="bg-white bg-opacity-70 p-4 text-start text-black text-base">
        <h1 className="text-amber-500 text-2xl mb-4 font-bold">Terms and Conditions</h1>
                <p>
                    Please read these Terms &amp; Conditions carefully before using
                    AcademicJobs. AcademicJobs reserves the right to modify these Terms
                    &amp; Conditions at any time.
                </p>
        
          <p>
            Welcome to AcademicJobs, the leading online platform for academic
            job seekers and employers. By using our website, you agree to comply
            with these terms and conditions, which we may update from time to
            time without notice. Please read them carefully before you proceed.
          </p>

          <strong className="block text-xl font-bold mb-2 mt-10">
            About AcademicJobs
          </strong>
          <p>
            AcademicJobs is a website that connects academic job seekers and
            employers in the field of higher education. Whether you are looking
            for a faculty position, a research fellowship, or an administrative
            role, you can find the best opportunities here. And if you are an
            employer looking for qualified candidates, you can post your job
            openings and browse through our resume database.
          </p>

          <strong className="block text-xl font-bold mb-2 mt-4">
            How to Use AcademicJobs
          </strong>
          <p>
            To use AcademicJobs, you need to register as a user and create a
            profile. You can then upload your resume, cover letter, and other
            relevant documents to showcase your skills and qualifications. You
            can also search for jobs by keywords, location, discipline, or other
            criteria. You can apply for jobs directly on the website or contact
            the employer via email or phone.
          </p>
          <p>
            If you are an employer, you need to register as a user and create a
            profile. You can then post your job openings, edit or delete them as
            needed, and manage your applications. You can also search for
            resumes by keywords, location, discipline, or other criteria. You
            can contact the candidates directly on the website or via email or
            phone.
          </p>

          <strong className="block text-xl font-bold mb-2 mt-4">
            User Responsibilities
          </strong>
          <ul>
            <li>
              The accuracy, completeness, and legality of your profile, resume,
              cover letter, and any other information you submit or post on the
              website.
            </li>
            <li>
              Your interactions with other users of the website, including
              potential employers and job seekers. We are not liable for any
              disputes, damages, or losses arising from such interactions.
            </li>
            <li>
              Not using the website for any unlawful, fraudulent, harassing,
              abusive, or discriminatory purpose. You also agree not to post or
              transmit any content that violates the rights of others, such as
              intellectual property rights, privacy rights, or confidentiality
              rights.
            </li>
            <li>
              Not using any automated means, such as bots, scripts, or spiders,
              to access, scrape, or manipulate the website or its data. You also
              agree not to interfere with the security or functionality of the
              website or its servers.
            </li>
          </ul>

          <strong className="block text-xl font-bold mb-2 mt-4">
            Website Rights
          </strong>
          <ul>
            <li>
              Modify, suspend, or terminate the website or any of its features
              at any time without notice or liability.
            </li>
            <li>
              Remove or edit any content that we deem inappropriate or violates
              these terms and conditions.
            </li>
            <li>
              Monitor and review the website and its content for quality and
              compliance purposes.
            </li>
          </ul>

          <strong className="block text-xl font-bold mb-2 mt-4">
            Website Disclaimer
          </strong>
          <p>
            We do not guarantee the availability, reliability, accuracy, or
            quality of the website or its content. We do not endorse or verify
            any employers, job seekers, or job opportunities posted on the
            website. You use the website at your own risk and discretion.
          </p>
          <p>
            We are not responsible for any errors, omissions, delays, losses,
            damages, or costs that may result from your use of or inability to
            use the website or its content. To the fullest extent permitted by
            law, we disclaim all warranties and liabilities arising from or
            related to the website or its content.
          </p>

          <strong className="block text-xl font-bold mb-2 mt-4">
            User Indemnity
          </strong>
          <p>
            You agree to indemnify and hold us harmless from any claims,
            demands, damages, liabilities, costs, or expenses (including legal
            fees) that may arise from your breach of these terms and conditions
            or your use of the website or its content.
          </p>

          <strong className="block text-xl font-bold mb-2 mt-4">
            Governing Law
          </strong>
          <p>
            These terms and conditions are governed by the laws of Australia.
            Any disputes arising from or related to these terms and conditions
            or the website shall be subject to the exclusive jurisdiction of the
            courts of Australia.
          </p>

          <strong className="block text-xl font-bold mb-2 mt-4">
            Contact Us
          </strong>
          <p>
            If you have any questions or feedback about these terms and
            conditions or the website, please contact us here.
          </p>
        </div>
      </main>
    </>
  );
}
