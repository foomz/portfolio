import emailjs from '@emailjs/browser';
import axios from 'axios';

export async function trackVisitor() {
  try {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by this browser.');
      return;
    }

    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true, // Request high accuracy
        timeout: 10000, // Set a timeout (10 seconds)
        maximumAge: 0 // Do not use cached position
      });
    });

    const { latitude, longitude } = position.coords;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`); // Log coordinates

        // Fetch the IP address
    const ipResponse = await axios.get('https://api.ipify.org?format=json');
    const ipAddress = ipResponse.data.ip;
    console.log(`IP Address: ${ipAddress}`); // Log IP address
    
    // Get additional visitor information
    const visitorInfo = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      timestamp: new Date().toISOString(),
      location: {
        latitude,
        longitude
      },
      ipAddress: ipAddress
    };

    // Initialize EmailJS with your public key
    emailjs.init("YAtT5PaZsRKGAZovT");

    // Send email using EmailJS
    await emailjs.send(
      'default_service', // Your default EmailJS service
      'template_9eqi7x8', // Create a template with this ID in EmailJS
      {
        to_email: 'johnraydeluna@gmail.com',
        visitor_info: JSON.stringify(visitorInfo, null, 2),
        location: `${latitude}, ${longitude}`,
        timestamp: new Date().toLocaleString(),
        ip_address: ipAddress
      }
    );

    console.log('Visitor information sent successfully');
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
}