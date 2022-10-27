import React from 'react';
import { Container } from 'react-bootstrap';
import ContactUs from '../../components/ContactUs/ContactUs';
import DefaultBanner from '../../components/Default-banner/DefaultBanner';
import Footer from '../../components/Footer/Footer';
import Navabar from '../../components/Navabar/Navabar';

const BlogPage = () => {
    return (
        <>
            <Navabar></Navabar>
            <DefaultBanner data={"Recently published blogs"}></DefaultBanner>
            <Blogs></Blogs>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    );
};


const Blogs = () => {
    return (
        <Container className='my-5'>
            <div className='bg-light py-3 px-1 rounded-2 mb-4'>
             <h3 className='text-danger mb-2'>What is cors?</h3>
             <p className='lead'>Cross-origin resource sharing (CORS)
                In this section, we will explain what cross-origin resource sharing (CORS) is, describe some common examples of cross-origin resource sharing based attacks, and discuss how to protect against these attacks. This topic was written in collaboration with PortSwigger Research, who popularized this attack class with the presentation</p>
             <p className='lead'>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as csrf.</p>
             <p className='lead'>The same-origin policy is a restrictive cross-origin specification that limits the ability for a website to interact with resources outside of the source domain. The same-origin policy was defined many years ago in response to potentially malicious cross-domain interactions, such as one website stealing private data from another. It generally allows a domain to issue requests to other domains, but not to access the responses.</p>
            </div>

            <div className='bg-light py-3 px-1 rounded-2 mb-4'>
             <h3 className='text-danger mb-2'>Why are you using firebase ? What other options do you have to implement authentication?</h3>
             <p className='lead'>FirebaseUI provides a customizable, open source, drop-in auth solution that handles the UI flows for signing in users. The FirebaseUI Auth component implements best practices for authentication on mobile devices and websites, which can maximize sign-in and sign-up conversion for your app.</p>
            <p className="lead">Built by the same team that developed Google Sign-in, Smart Lock and Chrome Password Manager, Firebase security applies Google's internal expertise of managing one of the largest account databases in the world.</p>
            <p className="lead">It can take months to set up your own auth system, and it requires an engineering team to maintain that system in the future. Set up the entire authentication system of your app in under 10 lines of code, even handling complex cases like account merging.</p>
            <h4 className="lead">Others auth providers</h4>
            <li><p className="lead">Watchgaurd auth point</p></li>
            <li><p className="lead">Cisco secure access by deo</p></li>
            <li><p className="lead">The okta identity cloud</p></li>
            <li><p className="lead">Mircoshoft azure active directory</p></li>     
            </div>


            <div className='bg-light py-3 px-1 rounded-2 mb-4'>
             <h3 className='text-danger mb-2'>How does private route works?</h3>
             <p className='lead'> The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. </p>
            <p className="lead">The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
            <p className="lead">Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.</p>
            </div>

            <div className='bg-light py-3 px-1 rounded-2 mb-4'>
             <h3 className='text-danger mb-2'>What is node ? Does node work?</h3>
             <p className='lead'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
            <p className="lead">Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>

        </Container>
    );
}


export default BlogPage;