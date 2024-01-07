import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';


  export const metadata: Metadata = {
    // title: 'About', //Option 1 replaces the %s in layout.tsx
    title: {
      absolute: 'FAQ Academic Jobs Online', //Option 2 overrides the title in layout.tsx
    },
    description:
      'Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily.',
    keywords: 'FAQ academicjobs, academicjobs FAQ, Frequently Asked Questions',
  };
  export default function myPage() {
    return (
         
      <main className="content-grid">
      <div className="prose">
      <h1 className="text-3xl font-bold text-orange-400 ">University Student Jobs FAQ</h1>
     
     
       <FAQ question="Where Do Uni Students Usually Work - University Student Jobs FAQ">
        <p>
          Working in the retail or hospitality industries is really popular with uni students as casual shift work is often flexible. You can let your employer know your availability and preferred days and times - and usually weekends and weeknights work well for both parties!
        </p>
      </FAQ>

       <FAQ question="Can You Do Uni and Have a Full-Time Job?">
        <p>
          Although it may at times feel like too much hard work balancing both work and study, the benefits are enormous, especially if you have on-the-job experience to draw from that can enrich your studies, and vice versa. You'll also still be earning a salary, therefore avoiding the debt that lots of students fall into.
        </p>
      </FAQ>

       <FAQ question="How Much Should a Uni Student Be Working?">
        <p>
          How many hours do you work a week as a full-time college student? The recommended amount is no more than 10–15 hours/week, but you can work more if you have good time management skills.
        </p>
      </FAQ>

       <FAQ question="How Do People Study and Work Full-Time?">
        <p>
          Instead, set one day per week where you focus on completing your studies, track how much work you can get done, and how many hours it takes. This will help you figure out how long you need to schedule for each study session in order to meet the requirements for your course and how quickly you can get it all finished.
        </p>
      </FAQ>

       <FAQ question="Can You Work Part-Time and Do Uni?">
        <p>
          You can successfully attend university full-time and work part-time by creating to-do lists. You may write a to-do list for each day or week and focus on prioritizing important tasks over ones that don't require immediate completion.
        </p>
      </FAQ>

       <FAQ question="How Do I Find a Job as a Student at University?">
        <p>
          Your university itself is a tremendous resource – you can look everywhere from noticeboards in student services buildings and libraries to your institution's careers hub. Many universities have careers portals that you can log into to receive updates regarding any on or off-campus job vacancies.
        </p>
      </FAQ>

       <FAQ question="How Can Universities Help Students Find Jobs?">
        <p>
          Below are five uni-run facilities that can help you boost your employability prospects while studying:
        </p>
        <ul className="list-disc pl-4">
          <li>Careers and employment services</li>
          <li>Student and industry recruitment events</li>
          <li>Research centers or institutes</li>
          <li>Meeting different kinds of people</li>
          <li>Professional industry associations</li>
        </ul>
      </FAQ>

       <FAQ question="Is It Hard to Get a Job in Australia as a Student?">
        <p>
          Working in Australia is very easy to do while you are a student – after graduation, it's more difficult. Remember, as an international student, you should never expect to live on the money you make while studying, but the extra income can certainly help you meet your financial needs.
        </p>
      </FAQ>

       <FAQ question="How Can Students Earn More Money in Australia?">
        <p>
          International students can work full-time, or up to 38 hours a week, during the holidays. Working full-time over holidays is an excellent way for international students to supplement their income. International students working full-time in retail and hospitality can earn between AUD 600 to AUD 1,000 per week.
        </p>
      </FAQ>

       <FAQ question="What Is the Average Income of Australian Uni Students?">
        <p>
          Median annual income for full-time domestic undergraduate students is $18,000, while their median spending is $14,000. One-third of domestic undergraduate students have estimated expenses exceeding their estimated income.
        </p>
      </FAQ>

       <FAQ question="How Do You Juggle Uni Life?">
        <p>
          How to juggle university and part-time work:
        </p>
        <ul className="list-disc pl-4">
          <li>Let work know your uni schedule. Most places that employ students understand the temporary nature of uni schedules.</li>
          <li>If possible, try and get a job near uni.</li>
          <li>Don't always sleep in.</li>
          <li>You don't always have to attend lectures!</li>
          <li>Find that balance.</li>
        </ul>
      </FAQ>
 
      <div className="mb-16">&nbsp;</div>
        </div>
      </main>
    
);
}
