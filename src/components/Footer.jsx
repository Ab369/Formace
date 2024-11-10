// import emailjs from '@emailjs/browser';
import { useRef } from 'react';

 export default function Footer(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_60lg6ol','template_q6gvcwy', form.current, {
          publicKey:'i2JrmKDSR_LrRsBn9',
        })
        .then(
          () => {
            alert('SEND SUCCESSFULLY');
          },
          (error) => {
            alert('FAILED...', error.text);
          },
        );
    };

    return(
        <div className="footer bg-cream2 flex flex-col">
            <div className="top grid md:grid-cols-2 lg:p-10 md:px-3 md:py-10 py-5 px-2 md:gap-0 gap-5 text-center">
             <div className="top-left lg:text-7xl md:text-5xl text-3xl font-semibold text-white">
                CONNECT WITH US
             </div>
             <div className="top-right flex md:flex-col items-center text-white">
                <div className="fb">Facebook Logo</div>
                <div className="insta">Instagram Logo</div>
                <div className="whatsapp">Whatsapp Logo</div>
                <div className="whatsapp">Phone number</div>
             </div>
            </div>

            <div className="bottom bg-cream1 grid md:grid-cols-2 p-10 md:items-center md:gap-0 gap-6">
                
                <div className="bottom-left w-1/2">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.405463352571!2d83.43055267488877!3d26.731434267858592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915ca3e2aa136b%3A0xc039bdf0211338a9!2sMMM%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1731215274960!5m2!1sen!2sin" className='lg:w-[500px] lg:h-96 md:w-80 md:h-72' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="bottom-right flex flex-col  items-center lg:gap-10 md:gap-8 gap-6 justify-center">
            <p className="flex justify-center items-center gap-2 lg:text-2xl md:text-xl text-xl">Drop your Message Below<span class="material-symbols-outlined">mail</span></p>

        <form ref={form} onSubmit={sendEmail} className="form flex flex-col gap-4 lg:text-xl">

            <input type="email"  name="user_name" placeholder="Enter Your Email" className="bg-zinc-500   placeholder-zinc-300 text-white px-8 py-4 rounded-xl hover:scale-105" />

            <textarea name="message"  placeholder="Write your message/queries" className="bg-zinc-500 placeholder-zinc-300 text-white px-8 py-10 rounded-xl hover:scale-105" />

            <button type='submit' className=" border-2 border-dark rounded-lg hover:bg-zinc-500 hover:text-white transform transition-all duration-300 lg:py-2 hover:scale-105">
                Send
            </button>
            
            </form>
        </div>
            </div>
            <div className="copyright bg-black text-white flex flex-col items-center py-2">
              <div>FORMACE ARCHITECT SOLUTIONS</div>
              <div>&copy;images subjected to copyright</div>
            </div>
        </div>
    )
 }