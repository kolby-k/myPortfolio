import React, { useState, useRef, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';

import Alert from '../components/Alert';
import useAlert from '../hooks/useAlert';
import Dog from '../models/Dog';

const Contact = () => {
const formRef = useRef(null);
const [form, setForm] = useState({name: "", email: "", message: ""});
const [isLoading, setIsLoading] = useState(false);
const [currentAnimation, setCurrentAnimation] = useState('Idle');

const { alert, showAlert, hideAlert } = useAlert();

const handleChange = (e) => {
  setForm({... form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true);

  emailjs.send(
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    {
      from_name: form.name,
      to_name: 'Kolby',
      from_email: form.email,
      to_email: 'kolby.k16@gmail.com',
      message: form.message
    },
    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  ).then(() => {
    setIsLoading(false);
    setCurrentAnimation('Pleased');
    showAlert({ show: true, text: 'Message sent successfully!', type: 'success'});
    
    setTimeout(() => {
      hideAlert()
      setCurrentAnimation('Idle')
      setForm({name: "", email: "", message: ""});
    }, [3000])

  }).catch((error) => {
    setCurrentAnimation('Hide');
    setIsLoading(false);
    console.log(error);
    showAlert({ show: true, text: 'Error: Message failed to send.', type: 'danger'});
  })
};

const handleFocus = () => {
  setCurrentAnimation('_CharacterSucceeds');
};
const handleBlur = () => {
  setCurrentAnimation('ClickedOn');
};


  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert}/> }

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Reach Out To Me </h1>

        <form 
          className='w-full flex flex-col gap-2 mt-14'
          onSubmit={handleSubmit}
          >
          <label className='text-white font-semibold'>
            Name
          </label>
          <input 
            type="text"
            name="name"
            className="input"
            placeholder="Jim"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className='text-white font-semibold'>
            Email
          </label>
          <input 
            type="email"
            name="email"
            className='input'
            placeholder='jimmy@gmail.com'
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className='text-white font-semibold'>
            Your Message
          </label>
          <textarea 
            type="text"
            name="message"
            className='input'
            placeholder='What can I do for you?'
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending ..." : "Submit ⇾"}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] dog-style'>
        <Canvas
          camera={{
            position: [0,0,5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <Suspense fallback={null} >
            <directionalLight intensity={3.5} position={[0,0,1]} />
            <ambientLight color="white" intensity="2" />

            <Dog 
              position={[0,.5,0]}
              rotation={[0.6,0,0]}
              scale={[1,1,1]}
              currentAnimation={currentAnimation}
              
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact