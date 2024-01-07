type FAQProps = { children: any; question: string };

const FAQ = ({ children, question }: FAQProps) => {
  return (
    <section className="faq collapse collapse-arrow">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title text-xl font-medium">
        <h2>{question}</h2>
      </div>
      <div className="collapse-content">{children}</div>
    </section>
  );
};

export default FAQ;
