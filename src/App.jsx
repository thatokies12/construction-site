
import './index.css'
import { useState } from 'react'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'

export default function ConstructionWebsite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState('home')

  const services = [
    {
      title: 'Residential Construction',
      desc: 'Modern homes, apartment developments, and custom residential builds delivered with quality and care.',
    },
    {
      title: 'Commercial Projects',
      desc: 'Office buildings, retail spaces, and mixed-use developments designed for performance and long-term value.',
    },
    {
      title: 'Renovations & Upgrades',
      desc: 'Transforming old spaces into modern, functional environments with smart planning and expert finishes.',
    },
    {
      title: 'Project Management',
      desc: 'End-to-end coordination, budget control, scheduling, and site supervision for smooth project delivery.',
    },
  ]

  const projects = [
    {
      name: 'Skyline Office Park',
      type: 'Commercial Development',
      desc: 'A sleek multi-floor office complex built for efficiency, sustainability, and modern business operations.',
      image: img2,
    },
    {
      name: 'Greenview Residences',
      type: 'Residential Estate',
      desc: 'A premium housing development focused on comfort, quality finishes, and family-friendly living.',
      image: img3,
    },
    {
      name: 'City Mall Upgrade',
      type: 'Renovation Project',
      desc: 'A large-scale renovation that modernized retail spaces while minimizing disruption to daily operations.',
      image: img4,
    },
  ]

  const stats = [
    { value: '12+', label: 'Years Experience' },
    { value: '180+', label: 'Projects Completed' },
    { value: '45+', label: 'Expert Team Members' },
    { value: '98%', label: 'Client Satisfaction' },
  ]

  const features = [
    {
      title: 'Trusted Expertise',
      desc: 'Our team brings practical experience, technical knowledge, and a strong commitment to excellence on every project.',
    },
    {
      title: 'Modern Design Approach',
      desc: 'We combine functionality, aesthetics, and efficient building methods to deliver spaces that meet modern expectations.',
    },
    {
      title: 'Reliable Project Delivery',
      desc: 'From planning to handover, we focus on timelines, communication, and quality workmanship at every stage.',
    },
  ]

  const goToPage = (page) => {
    setActivePage(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinkClass = (page) =>
    `cursor-pointer transition ${
      activePage === page ? 'text-amber-400' : 'hover:text-amber-400'
    }`

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <h1 className="text-2xl font-extrabold tracking-wide">Mathiduba</h1>
            <p className="text-xs text-slate-400">Construction & Project Solutions</p>
          </div>

          <nav className="hidden gap-8 text-sm md:flex">
            <button type="button" onClick={() => goToPage('home')} className={navLinkClass('home')}>Home</button>
            <button type="button" onClick={() => goToPage('services')} className={navLinkClass('services')}>Services</button>
            <button type="button" onClick={() => goToPage('projects')} className={navLinkClass('projects')}>Projects</button>
            <button type="button" onClick={() => goToPage('about')} className={navLinkClass('about')}>About</button>
            <button type="button" onClick={() => goToPage('contact')} className={navLinkClass('contact')}>Contact</button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goToPage('contact')}
              className="hidden rounded-2xl bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-105 md:inline-block"
            >
              Get a Quote
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 p-2 text-white md:hidden"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'}
                />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm">
              <button type="button" onClick={() => goToPage('home')} className={navLinkClass('home')}>Home</button>
              <button type="button" onClick={() => goToPage('services')} className={navLinkClass('services')}>Services</button>
              <button type="button" onClick={() => goToPage('projects')} className={navLinkClass('projects')}>Projects</button>
              <button type="button" onClick={() => goToPage('about')} className={navLinkClass('about')}>About</button>
              <button type="button" onClick={() => goToPage('contact')} className={navLinkClass('contact')}>Contact</button>
              <button
                type="button"
                onClick={() => goToPage('contact')}
                className="mt-2 rounded-2xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-slate-950"
              >
                Get a Quote
              </button>
            </nav>
          </div>
        )}
      </header>

      {activePage === 'home' && (
        <>
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 z-10 bg-black/50" />
            <img src={img1} alt="Construction project" className="absolute inset-0 h-full w-full object-cover" />

            <div className="relative z-20 mx-auto grid min-h-[85vh] max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
              <div className="flex flex-col justify-center">
                <span className="mb-4 w-fit rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-sm text-amber-300">
                  Trusted Construction Experts
                </span>
                <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  Building strong spaces for a better future.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                  We deliver residential, commercial, and industrial construction projects with precision, transparency, and modern design thinking. Our team is committed to quality workmanship, reliable timelines, and building environments that stand the test of time.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => goToPage('projects')}
                    className="rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
                  >
                    View Projects
                  </button>
                  <button
                    type="button"
                    onClick={() => goToPage('services')}
                    className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
                  >
                    Our Services
                  </button>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                  <p className="text-sm text-slate-300">On-Time Delivery</p>
                  <h3 className="mt-2 text-3xl font-bold">Fast & Reliable</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    From planning to final handover, we keep every stage of the project on schedule.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur md:mt-10">
                  <p className="text-sm text-slate-300">Quality Materials</p>
                  <h3 className="mt-2 text-3xl font-bold">Built to Last</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    We use trusted materials and experienced teams to ensure durability and high-quality finishes.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                  <p className="text-sm text-slate-300">Client Focused</p>
                  <h3 className="mt-2 text-3xl font-bold">Clear Communication</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    We keep clients informed with transparent updates, budgets, and timelines from start to finish.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur md:mt-10">
                  <p className="text-sm text-slate-300">Safety First</p>
                  <h3 className="mt-2 text-3xl font-bold">Trusted Standards</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    Our sites follow strong safety practices to protect teams, clients, and project quality.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-slate-900/60">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4 lg:px-8">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <div className="text-3xl font-black text-amber-400">{item.value}</div>
                  <div className="mt-2 text-sm text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Who We Are</p>
              <h3 className="mt-3 text-3xl font-black sm:text-4xl">We create construction solutions that combine strength, design, and value.</h3>
              <p className="mt-5 leading-7 text-slate-300">
                  Mathiduba is a modern construction company focused on delivering quality projects for residential, commercial, and renovation clients. We believe every project should reflect careful planning, professional execution, and a strong commitment to client satisfaction.
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                From concept to completion, we work closely with our clients to understand their goals and provide practical solutions that meet their budget, timeline, and vision.
              </p>
              <button
                type="button"
                onClick={() => goToPage('about')}
                className="mt-8 rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
              >
                Learn More About Us
              </button>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
              <img src={img2} alt="Construction team" className="h-full min-h-[320px] w-full object-cover" />
            </div>
          </section>

          <section className="bg-slate-900/60 px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Why Choose Us</p>
                <h3 className="mt-3 text-3xl font-black sm:text-4xl">A construction partner you can trust.</h3>
                <p className="mt-4 text-slate-300">
                  We focus on quality, efficiency, and professional service so every project is completed with care and attention to detail.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
                    <div className="mb-4 h-12 w-12 rounded-2xl bg-amber-400/15" />
                    <h4 className="text-xl font-bold">{feature.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Service Preview</p>
                <h3 className="mt-3 text-3xl font-black sm:text-4xl">What we offer our clients.</h3>
                <p className="mt-4 text-slate-300">
                  We provide a range of construction services tailored to different project types and client needs.
                </p>
              </div>
              <button
                type="button"
                onClick={() => goToPage('services')}
                className="text-left text-sm font-semibold text-amber-300 hover:text-amber-400"
              >
                View all services →
              </button>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-amber-400/40"
                >
                  <div className="mb-4 h-12 w-12 rounded-2xl bg-amber-400/15" />
                  <h4 className="text-xl font-bold">{service.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="px-6 pb-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-amber-400 to-amber-500 p-8 text-slate-950 lg:grid-cols-2 lg:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">Start Your Next Project</p>
                <h3 className="mt-3 text-3xl font-black sm:text-4xl">Let’s build something exceptional together.</h3>
                <p className="mt-4 leading-7 text-slate-900/80">
                  Whether you are planning a commercial development, residential build, or renovation, our team is ready to bring your vision to life.
                </p>
              </div>
              <div className="flex items-center lg:justify-end">
                <button
                  type="button"
                  onClick={() => goToPage('contact')}
                  className="rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:scale-105"
                >
                  Contact Us Today
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {activePage === 'services' && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Our Services</p>
            <h3 className="mt-3 text-3xl font-black sm:text-4xl">Construction solutions designed around your needs.</h3>
            <p className="mt-4 text-slate-300">
              We provide full-service construction support for clients who want dependable workmanship, modern design, and efficient delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-amber-400/40"
              >
                <div className="mb-4 h-12 w-12 rounded-2xl bg-amber-400/15" />
                <h4 className="text-xl font-bold">{service.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {activePage === 'projects' && (
        <section className="bg-slate-900/60 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Featured Projects</p>
                <h3 className="mt-3 text-3xl font-black sm:text-4xl">A portfolio built on quality and trust.</h3>
                <p className="mt-4 text-slate-300">
                  Here are some of the projects that reflect our commitment to innovation, detail, and reliable execution.
                </p>
              </div>
              <button
                type="button"
                onClick={() => goToPage('contact')}
                className="text-left text-sm font-semibold text-amber-300 hover:text-amber-400"
              >
                Start your project →
              </button>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.name} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
                  <img src={project.image} alt={project.name} className="h-56 w-full object-cover" />
                  <div className="p-6">
                    <p className="text-sm text-amber-400">{project.type}</p>
                    <h4 className="mt-2 text-2xl font-bold">{project.name}</h4>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activePage === 'about' && (
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Why Choose Us</p>
            <h3 className="mt-3 text-3xl font-black sm:text-4xl">We build with vision, discipline, and integrity.</h3>
            <p className="mt-5 leading-7 text-slate-300">
              At Mathiduba, we combine practical construction experience with a modern approach to project delivery. Our goal is simple: create spaces that are functional, attractive, and built to last.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              Whether you need a new commercial development, a residential project, or a major renovation, our team works closely with you to understand your vision and deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-bold">Experienced Team</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Skilled professionals with years of construction, engineering, and project management experience.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-bold">Transparent Pricing</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Clear cost planning and honest communication to help clients make confident decisions.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-bold">Modern Approach</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                User-focused planning, efficient systems, and designs that match modern construction needs.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-bold">Reliable Delivery</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                We focus on timelines, quality control, and strong client relationships from start to finish.
              </p>
            </div>
          </div>
        </section>
      )}

      {activePage === 'contact' && (
        <section className="border-t border-white/10 bg-slate-900/70 px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Contact Us</p>
              <h3 className="mt-3 text-3xl font-black sm:text-4xl">Let’s build your next project together.</h3>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Tell us about your construction needs, and our team will get back to you with the right solution and a clear project plan.
              </p>
              <div className="mt-8 space-y-4 text-slate-300">
                <p>📍 Johannesburg, South Africa</p>
                <p>📞 +27 12 345 6789</p>
                <p>✉️ info@Mathiduba.co.za</p>
              </div>
            </div>

            <form className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Phone</label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm text-slate-300">Project Type</label>
                <select className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-amber-400">
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Renovation</option>
                  <option>Project Management</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm text-slate-300">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-amber-400"
                />
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      )}

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-400">
        © 2026 Mathiduba Construction. All rights reserved.
      </footer>
    </div>
  )
}