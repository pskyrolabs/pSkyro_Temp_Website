import { useState, useRef } from "react";
import { ArrowUpRight, MapPin, Briefcase, GraduationCap, ChevronRight, Check, X, ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal.jsx"; 

const DEGREES = ["B.Tech / B.E.", "BCA", "B.Sc (Computer Science / IT)", "MCA", "B.Des (Design)", "Other Degree"];
const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year / Final Year"];
const SKILLS = [
  "Figma", "Adobe XD", "Wireframing & Prototyping", "UI/UX Principles",
  "JavaScript (ES6+)", "React.js", "Node.js", 
  "Express.js", "Electron.js", "React Native", "HTML5 & CSS3", 
  "Tailwind CSS", "MySQL / PostgreSQL", "Git & GitHub", "RESTful APIs"
];

const POSITIONS = [
  {
    title: "UI/UX Design Intern",
    skills: "Figma, Adobe XD, Wireframing, Prototyping",
    desc: "Design intuitive and user-centered interfaces for web, mobile, and desktop applications. Maintain and evolve design systems.",
  },
  {
    title: "Electron.js Developer Intern",
    skills: "JavaScript, React.js, Electron.js",
    desc: "Build cross-platform desktop applications. Develop modern interfaces and integrate desktop applications with backend APIs.",
  },
  {
    title: "React.js Developer Intern",
    skills: "React.js, JavaScript (ES6+), Tailwind CSS",
    desc: "Develop responsive and scalable web applications. Build modular, reusable UI components and integrate RESTful APIs.",
  },
  {
    title: "Node.js Developer Intern",
    skills: "Node.js, Express.js, MySQL/PostgreSQL",
    desc: "Develop scalable backend applications. Design databases, build secure RESTful APIs, and implement robust authentication.",
  },
  {
    title: "React Native Developer Intern",
    skills: "React Native, React.js, Mobile UI/UX",
    desc: "Develop Android and iOS applications. Build high-quality mobile UI components and optimize app performance.",
  }
];

// --- FORM FIELD HELPER ---
function Field({ label, children, error, required }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/45">
        {label} {required && <span className="text-skyro">*</span>}
      </span>
      {children}
      {error && <span className="text-[12px] font-medium text-skyro mt-1">{error}</span>}
    </label>
  );
}

export default function Careers() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalScrollRef = useRef(null);

  const initialFormState = {
    name: "", email: "", phone: "", city: "",
    year: "", college: "", degree: "", branch: "", cgpa: "",
    position: "", skills: [],
    portfolio: "", github: "", linkedin: "", project: "",
    locationAck: "Yes, I am willing to relocate and work from the Pandhurna office.",
    commitment: "I am available for a 6-month full-time internship.",
    resume: ""
  };

  const [f, setF] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);
  
  // PAGINATION STATE
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const inputCls = "w-full rounded-xl border border-black/15 bg-white px-4 py-3 sm:py-3.5 text-[14px] sm:text-[15px] outline-none transition-all placeholder:text-black/30 focus:border-skyro focus:ring-4 focus:ring-skyro/10";
  const selectCls = "w-full rounded-xl border border-black/15 bg-white px-4 py-3 sm:py-3.5 text-[14px] sm:text-[15px] outline-none transition-all focus:border-skyro focus:ring-4 focus:ring-skyro/10 appearance-none cursor-pointer";

  const set = (k) => (e) => {
    setF((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors(prev => ({ ...prev, [k]: null }));
  };

  const toggleSkill = (skill) => {
    setF((p) => ({
      ...p,
      skills: p.skills.includes(skill)
        ? p.skills.filter((s) => s !== skill)
        : [...p.skills, skill]
    }));
  };

  const openModal = (positionTitle = "") => {
    setF({ ...initialFormState, position: positionTitle });
    setErrors({});
    setStep(1);
    setSubmitted(false);
    setSent(false);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const validateStep = () => {
    const er = {};
    if (step === 1) {
      if (!f.name.trim()) er.name = "Required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) er.email = "Valid email required";
      if (!f.phone.trim()) er.phone = "Required";
      if (!f.city.trim()) er.city = "Required";
    }
    if (step === 2) {
      if (!f.college.trim()) er.college = "Required";
      if (!f.year) er.year = "Required";
      if (!f.degree) er.degree = "Required";
      if (!f.branch.trim()) er.branch = "Required";
      if (!f.cgpa.trim()) er.cgpa = "Required";
    }
    if (step === 3) {
      if (!f.position) er.position = "Required";
    }
    if (step === 4) {
      if (!f.linkedin.trim()) er.linkedin = "Required";
      if (!f.resume.trim()) er.resume = "Required";
      if (!f.project.trim()) er.project = "Required";
    }
    
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setStep(s => s + 1);
      if (modalScrollRef.current) modalScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep(s => s - 1);
    if (modalScrollRef.current) modalScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    if (!validateStep()) {
      e.preventDefault();
    } else {
      setSubmitted(true);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="px-3 sm:px-5 lg:px-8 pt-3 sm:pt-5">
        <div 
          className="relative mx-auto max-w-site 2xl:max-w-site-wide overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[34px]" 
          style={{ background: "radial-gradient(120% 90% at 18% 8%, #5a45ff 0%, #3411e3 28%, #2209be 55%, #140596 78%, #0e036e 100%)" }}
        >
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(55% 50% at 88% 18%, rgba(120,90,255,.3) 0%, transparent 60%)" }} />
          <div className="relative flex min-h-[44vh] flex-col justify-between px-5 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10">
            <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/55">Careers</p>
            <Reveal className="max-w-[40ch] py-5 sm:py-6">
              <h1 className="font-semibold leading-[0.92] tracking-[-0.025em]" style={{ fontSize: "clamp(34px,5.6vw,92px)" }}>
                <span className="text-white">Build your</span>
                <span className="text-white/40"> future with us.</span>
              </h1>
            </Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[12px] sm:text-[13px] font-medium text-white/85 ring-1 ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-launch" /> Hiring Students across all academic years
            </span>
          </div>
        </div>
      </section>

      {/* WHY JOIN US INFO & OPEN POSITIONS */}
      <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          
          <Reveal className="flex flex-col gap-7">
            <div>
              <h2 className="font-semibold leading-[1.1] tracking-[-0.02em]" style={{ fontSize: "clamp(24px,2.6vw,38px)" }}>
                Kickstart your<br />tech journey.
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-black/60">
                Work on live industry projects, learn directly from experienced engineers, and get an opportunity to secure a permanent position through our Pre-Placement Offer (PPO).
              </p>
            </div>
            
            <div className="flex flex-col gap-5 rounded-2xl bg-black/[0.03] p-5 border border-black/[0.05]">
              <div className="flex items-start gap-4">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-skyro/10 text-skyro"><Briefcase size={16} /></span>
                <div>
                  <h4 className="text-[15px] font-semibold text-black">Paid Internship</h4>
                  <p className="mt-1 text-[13px] text-black/60">3 Months + 3 Months (Performance-Based) full-time internship with a stipend.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-skyro/10 text-skyro"><MapPin size={16} /></span>
                <div>
                  <h4 className="text-[15px] font-semibold text-black">Work From Office</h4>
                  <p className="mt-1 text-[13px] text-black/60">Located in Pandhurna, Madhya Pradesh. Relocation required for remote applicants.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-skyro/10 text-skyro"><GraduationCap size={16} /></span>
                <div>
                  <h4 className="text-[15px] font-semibold text-black">Eligibility</h4>
                  <p className="mt-1 text-[13px] text-black/60">Open for 1st, 2nd, 3rd and Final Year students pursuing B.Tech, BCA, MCA, B.Sc, or B.Des.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-3">
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-black/40 mb-1">Open Positions</h3>
              
              {POSITIONS.map((pos, idx) => (
                <div 
                  key={idx} 
                  className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-[20px] border border-black/10 bg-white p-5 transition-all hover:border-skyro/30 hover:shadow-[0_8px_30px_rgba(36,0,194,0.06)]"
                >
                  <div className="flex-1">
                    <h4 className="text-[18px] sm:text-[20px] font-bold text-black group-hover:text-skyro transition-colors">
                      {pos.title}
                    </h4>
                    <p className="mt-1.5 text-[13px] font-medium text-black/45">
                      Required Skills: <span className="text-black/70">{pos.skills}</span>
                    </p>
                    <p className="mt-3 text-[14px] leading-relaxed text-black/60 max-w-[90%] line-clamp-2">
                      {pos.desc}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => openModal(pos.title)}
                    className="shrink-0 inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-skyro"
                  >
                    Apply Now
                    <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-8 sm:pt-10 lg:pt-12 pb-0">
        <Reveal>
          <div className="flex flex-col items-center justify-center text-center rounded-[24px] sm:rounded-[32px] bg-black/[0.03] border border-black/[0.05] py-8 sm:py-10 px-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">
              Ready to create an impact?
            </h2>
            <p className="mt-3.5 max-w-lg text-[15px] sm:text-[16px] text-black/60">
              Submit your application today. Our engineering and design teams review applications on a rolling basis.
            </p>
            <button 
              onClick={() => openModal()}
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-skyro"
            >
              Fill Application Form
              <span className="grid h-7 w-7 place-items-center rounded-full bg-launch text-black transition-transform group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>
        </Reveal>
      </section>

      {/* MODAL / POPUP OVERLAY */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6 bg-black/45 backdrop-blur-sm animate-backdrop-enter">
          
          <div className="relative w-full sm:max-w-[540px] md:max-w-[600px] bg-white rounded-t-[28px] sm:rounded-[28px] h-[92vh] sm:h-auto sm:max-h-[85vh] shadow-2xl animate-modal-enter flex flex-col overflow-hidden">
            
            {/* Modal Header & Progress Bar */}
            <div className="shrink-0 bg-white border-b border-black/5">
              {!sent && (
                <div className="w-full h-1.5 bg-black/5">
                  <div 
                    className="h-full bg-skyro transition-all duration-300 ease-out" 
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  />
                </div>
              )}
              
              <div className="flex items-center justify-between p-5 sm:px-8 sm:py-6">
                <div>
                  <h2 className="text-[20px] sm:text-[24px] font-bold text-black tracking-tight leading-none">
                    {sent ? "Success!" : "Application Form"}
                  </h2>
                  {!sent && (
                    <p className="mt-1.5 text-[13px] font-medium text-black/50 uppercase tracking-widest">
                      Step {step} of {totalSteps}
                    </p>
                  )}
                </div>
                <button 
                  onClick={closeModal}
                  className="grid h-10 w-10 place-items-center rounded-full bg-black/5 text-black hover:bg-black/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div ref={modalScrollRef} className="flex-1 overflow-y-auto p-5 sm:px-8 sm:py-7 custom-scrollbar bg-black/[0.01]">
              
              {!sent ? (
                <>
                  <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} onLoad={() => { if (submitted) setSent(true); }} ></iframe>

                  <form 
                    id="application-form"
                    action="https://docs.google.com/forms/d/e/1FAIpQLSewtODZOqDlWLXwlH-nZ3tcY9haIB0W1L3LVs3SHVfuUzNycw/formResponse" 
                    method="POST" 
                    target="hidden_iframe" 
                    onSubmit={handleSubmit}
                  >
                    {/* STEP 1: PERSONAL INFO */}
                    {step === 1 && (
                      <div className="flex flex-col gap-6 animate-fade-in">
                        <h3 className="text-[16px] font-bold text-black mb-1">Personal Information</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <Field label="Full Name" error={errors.name} required>
                            <input name="entry.2091916753" className={inputCls} value={f.name} onChange={set("name")} placeholder="Your name" />
                          </Field>
                          <Field label="Email Address" error={errors.email} required>
                            <input name="entry.1018097178" className={inputCls} value={f.email} onChange={set("email")} placeholder="you@example.com" />
                          </Field>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <Field label="Phone (WhatsApp)" error={errors.phone} required>
                            <input name="entry.778241129" className={inputCls} value={f.phone} onChange={set("phone")} placeholder="+91 98765 43210" />
                          </Field>
                          <Field label="Current City" error={errors.city} required>
                            <input name="entry.324655520" className={inputCls} value={f.city} onChange={set("city")} placeholder="e.g. Bhopal, MP" />
                          </Field>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: EDUCATION */}
                    {step === 2 && (
                      <div className="flex flex-col gap-6 animate-fade-in">
                        <h3 className="text-[16px] font-bold text-black mb-1">Educational Profile</h3>
                        <Field label="College / University" error={errors.college} required>
                          <input name="entry.391584542" className={inputCls} value={f.college} onChange={set("college")} placeholder="Institute Name" />
                        </Field>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <Field label="Current Year" error={errors.year} required>
                            <select name="entry.938274962" className={selectCls} value={f.year} onChange={set("year")}>
                              <option value="" disabled>Select Year</option>
                              {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                            </select>
                          </Field>
                          <Field label="Degree" error={errors.degree} required>
                            <select name="entry.1538117332" className={selectCls} value={f.degree} onChange={set("degree")}>
                              <option value="" disabled>Select Degree</option>
                              {DEGREES.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                          </Field>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <Field label="Branch / Specialization" error={errors.branch} required>
                            <input name="entry.1555988551" className={inputCls} value={f.branch} onChange={set("branch")} placeholder="e.g. Computer Science" />
                          </Field>
                          <Field label="CGPA / Percentage" error={errors.cgpa} required>
                            <input name="entry.1194839755" className={inputCls} value={f.cgpa} onChange={set("cgpa")} placeholder="e.g. 8.5 or 85%" />
                          </Field>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: ROLE & SKILLS */}
                    {step === 3 && (
                      <div className="flex flex-col gap-6 animate-fade-in">
                        <h3 className="text-[16px] font-bold text-black mb-1">Role & Technical Skills</h3>
                        <Field label="Applying For" error={errors.position} required>
                          <select name="entry.1545919967" className={selectCls} value={f.position} onChange={set("position")}>
                            <option value="" disabled>Select Position</option>
                            {POSITIONS.map(p => <option key={p.title} value={p.title}>{p.title}</option>)}
                          </select>
                        </Field>

                        <Field label="Skills Proficient In">
                          <div className="flex flex-wrap gap-2.5 mt-1.5">
                            {SKILLS.map((skill) => (
                              <label key={skill} className={`cursor-pointer rounded-full border px-4 py-2 sm:py-2.5 text-[13px] font-medium transition-all select-none ${f.skills.includes(skill) ? "border-skyro bg-skyro text-white shadow-md" : "border-black/15 bg-white text-black/70 hover:border-black/40"}`}>
                                <input type="checkbox" name="entry.1512743080" value={skill} checked={f.skills.includes(skill)} onChange={() => toggleSkill(skill)} className="hidden" />
                                {skill}
                              </label>
                            ))}
                          </div>
                        </Field>
                      </div>
                    )}

                    {/* STEP 4: PORTFOLIO */}
                    {step === 4 && (
                      <div className="flex flex-col gap-6 animate-fade-in">
                        <h3 className="text-[16px] font-bold text-black mb-1">Portfolio & Experience</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                          <Field label="LinkedIn Profile" error={errors.linkedin} required>
                            <input name="entry.1685308274" className={inputCls} value={f.linkedin} onChange={set("linkedin")} placeholder="https://linkedin.com/..." />
                          </Field>
                          <Field label="GitHub Profile">
                            <input name="entry.642912081" className={inputCls} value={f.github} onChange={set("github")} placeholder="https://github.com/..." />
                          </Field>
                        </div>
                        
                        <Field label="Portfolio Link (Optional)">
                          <input name="entry.422858739" className={inputCls} value={f.portfolio} onChange={set("portfolio")} placeholder="https://..." />
                        </Field>
                        <Field label="Resume Link (Drive/Dropbox)" error={errors.resume} required>
                          <input name="entry.1781518276" className={inputCls} value={f.resume} onChange={set("resume")} placeholder="Must be set to public access" />
                        </Field>

                        <Field label="Best Project / Case Study" error={errors.project} required>
                          <textarea name="entry.1565549174" rows={3} className={`${inputCls} resize-none`} value={f.project} onChange={set("project")} placeholder="Briefly describe your role and tools used..." />
                        </Field>
                      </div>
                    )}

                    {/* STEP 5: LOGISTICS */}
                    {step === 5 && (
                      <div className="flex flex-col gap-6 animate-fade-in">
                        <h3 className="text-[16px] font-bold text-black mb-1">Logistics & Acknowledgment</h3>
                        
                        <Field label="Work Location" required>
                          <select name="entry.1770577051" className={selectCls} value={f.locationAck} onChange={set("locationAck")}>
                            <option value="Yes, I am willing to relocate and work from the Pandhurna office.">Yes, I am willing to relocate & work from Pandhurna MP office.</option>
                            <option value="No, I am looking for remote work (Please note: this will disqualify your application).">No, I am looking for remote work (Disqualifies application).</option>
                          </select>
                        </Field>

                        <Field label="Commitment" required>
                          <select name="entry.438433621" className={selectCls} value={f.commitment} onChange={set("commitment")}>
                            <option value="I am available for a 3-month full-time internship.">Available for 3-month full-time internship.</option>
                            <option value="I am available for a 6-month full-time internship.">Available for 6-month full-time internship.</option>
                            <option value="I am not available full-time right now.">Not available full-time right now.</option>
                          </select>
                        </Field>
                        
                        <div className="mt-2 rounded-xl bg-skyro/5 border border-skyro/10 p-5 text-[13px] text-skyro leading-relaxed">
                          <strong>Final Review:</strong> Please ensure all provided links are working and your email address is correct before submitting. Our team will use these to contact you.
                        </div>
                      </div>
                    )}
                  </form>
                </>
              ) : (
                /* SUCCESS SCREEN */
                <div className="flex flex-col items-center justify-center h-full text-center py-10 sm:py-16 animate-fade-in">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2400C2]/10 text-skyro mb-6">
                    <Check size={40} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight leading-tight">
                    Application Sent!
                  </h3>
                  <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-black/60 max-w-[320px] mx-auto">
                    Thank you, <strong>{f.name.split(" ")[0]}</strong>. Your application for <strong>{f.position || "the internship"}</strong> has been successfully received. 
                  </p>
                  <p className="mt-4 text-[14px] leading-normal text-black/45 max-w-[320px] mx-auto">
                    Our team will review your profile and get back to you via email or WhatsApp if shortlisted.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-10 w-full sm:w-auto px-12 rounded-full bg-black text-white py-4 text-[15px] font-semibold transition-all hover:bg-skyro hover:shadow-[0_8px_25px_rgba(36,0,194,0.25)]"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer / Navigation Buttons */}
            {!sent && (
              <div className="shrink-0 bg-white border-t border-black/10 p-5 sm:px-8 sm:py-5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`flex items-center gap-2 text-[14px] font-semibold transition-colors ${step === 1 ? "text-transparent pointer-events-none" : "text-black/60 hover:text-black"}`}
                >
                  <ArrowLeft size={16} /> Back
                </button>
                
                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2 rounded-full bg-black px-6 sm:px-8 py-3 text-[14px] font-semibold text-white transition-all hover:bg-skyro"
                  >
                    Next Step <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    form="application-form"
                    disabled={submitted}
                    className={`flex items-center gap-2 rounded-full px-6 sm:px-8 py-3 text-[14px] font-semibold text-white transition-all ${submitted ? "bg-black/50 cursor-not-allowed" : "bg-black hover:bg-skyro hover:shadow-[0_8px_25px_rgba(36,0,194,0.25)]"}`}
                  >
                    {submitted ? "Submitting..." : "Submit Application"} 
                    {!submitted && <ArrowUpRight size={16} />}
                  </button>
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.15); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(0,0,0,0.3); }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}