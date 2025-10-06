import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                Timeless Aesthetic ("we," "our," or "us") values your trust and is committed to protecting 
                your privacy. This Privacy Policy explains how we collect, use, and protect your personal 
                information when you visit our website, make a purchase, or engage with our brand through 
                online platforms such as Instagram, Facebook, and other marketing channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium mb-2">Personal Information</h3>
              <p>We may collect the following personal details when you interact with us:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>Shipping and billing address</li>
                <li>Purchase history and product preferences</li>
                <li>Messages or inquiries sent through our website or social media</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-2 mt-4">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Device type, browser, and IP address</li>
                <li>Website usage data (pages visited, time spent, clicks)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Process and deliver your product orders</li>
                <li>Provide personalized skincare recommendations</li>
                <li>Send promotional offers, newsletters, and updates (if subscribed)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our products, website, and overall user experience</li>
                <li>Comply with legal and tax requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Marketing & Advertising</h2>
              <p>
                We may use your contact and browsing information to share personalized product 
                recommendations and special offers. Our advertising partners (like Google or Meta) 
                may also use cookies to show you relevant ads based on your interests. You can opt 
                out of marketing emails anytime using the unsubscribe link in our messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
              <p>We only share your data with trusted third parties who help us run our business, such as:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Payment processors (for secure transactions)</li>
                <li>Shipping and delivery partners</li>
                <li>Marketing and analytics service providers</li>
                <li>Legal authorities, when required by law</li>
              </ul>
              <p className="mt-2">
                We do not sell or rent your personal data to any third parties for profit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We use modern encryption and security practices to protect your personal data 
                from unauthorized access, misuse, or disclosure. While we take all reasonable 
                measures to ensure your information is safe, no system is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request access to your stored data</li>
                <li>Ask for corrections or updates to your information</li>
                <li>Request deletion of your data (where legally possible)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
              <p>
                We use cookies to improve your browsing experience and understand how you use 
                our website. You can adjust your browser settings to disable cookies, but some 
                parts of the website may not function properly without them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>For any questions about our Privacy Policy or your data, please contact us:</p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Timeless Aesthetic</strong></p>
                <p>Customer Care Department</p>
                <p>Email: support@timelessaesthetic.com</p>
                <p>Phone: +91 8088113333</p>
                <p>Business Hours: Monday to Saturday, 10:00 AM – 6:00 PM</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our 
                business or legal requirements. The latest version will always be available 
                on our website, along with the effective date of revision.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
