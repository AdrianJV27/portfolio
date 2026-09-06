export function Contact() {
    return (
    <section id="contact" className=" flex place-content-between p-8 md:p-12 rounded-3xl bg-linear-to-br space-y-6">
      <div className="max-w-xl space-y-3">
        <h2 className="text-3xl font-bold ">Contact me!</h2>
        <p className="text-sm leading-relaxed">
            I am available to join a team as a web developer or take on new challenges in full-stack projects.</p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <a href="mailto:adrianjjvv@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all">
          Send Email
        </a>
      </div>
    </section>
    )
}