import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Contact = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate();

  const handleSend = () => {
    const email = 'mkerrouche.contact@gmail.com';
    const subject = `Contact from ${name} ${lastName}`;
    const body = `Name: ${name}\nLastname: ${lastName}\n\nContent:\n${content}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="bg-base-300 flex justify-center min-h-screen pt-10">
        <div className="p-5 w-2/5 bg-base-100 h-full">
          <div className="flex flex-col space-y-5">
            <div className="text-3xl text-accent">Contact Me</div>
            <div>
              <p className="">Feel free to reach out anytime for a project collaboration or any other inquiries !</p>
            </div>
            <div className="space-y-3">
              <div className="flex flex-row gap-5">
                <div className='flex flex-col flex-1'>
                  <label className="label flex-shrink-0">Name</label>
                  <input className="input input-bordered w-full max-w-xs" value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Steve" />
                </div>
                <div className='flex flex-col flex-1'>
                  <label className="label flex-shrink-0">Lastname</label>
                  <input className="input input-bordered w-full max-w-xs" value={lastName} onChange={(e) => { setLastName(e.target.value) }} type="text" placeholder="Harvey" />
                </div>
              </div>
              <div className='flex flex-col items-start'>
                <label className="label flex-shrink-0">Content</label>
                <textarea value={content} onChange={(e) => { setContent(e.target.value) }} className="textarea textarea-bordered w-full" placeholder="I love potatoes..."></textarea>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-5">
              <button className="btn btn-warning" onClick={() => navigate(-1)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleSend}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact