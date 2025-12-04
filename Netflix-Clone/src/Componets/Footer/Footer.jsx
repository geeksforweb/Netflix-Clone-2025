import React from 'react';
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
// Assuming you'd also need a Twitter Icon for completeness
import TwitterIcon from "@mui/icons-material/Twitter"; 
function Footer() {
  return (
 // The outermost container for the entire footer area
    <div className='footer_outer_container'>
      
      {/* The inner container to control width and center the content */}
      <div className='footer_inner_container'>

        {/* === 1. Social Media Icons === */}
        <div className='footer_icons'>
          {/* Using the imported MUI Icon components */}
          <FacebookOutlinedIcon /> 
          <InstagramIcon />
          <TwitterIcon /> {/* Added for a standard social media set */}
          <YouTubeIcon />
        </div>

        {/* === 2. Footer Links (Four Columns) === */}
        <div className='footer_data'>
          
          {/* Column 1 (from image_9dd2c6.png) */}
          <div className='footer_column'>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          {/* Column 2 (from image_9d6a65.png) */}
          <div className='footer_column'>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>

          {/* Column 3 (from image_9d6a65.png) */}
          <div className='footer_column'>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          
          {/* Column 4 (from image_9d6a65.png) */}
          <div className='footer_column'>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>

        </div> 
        {/* End of footer_data container */}

        {/* === 3. Service Code Button (Often included at the bottom) === */}
        <div className='service_code'>
            <p>Service Code</p>
        </div>

        {/* === 4. Copyright/Location === */}
        <div className='footer_copyright'>
            {/* Replace this text with the required copyright/location text */}
            <p> &copy; 1997-2025 Netflix, Inc.</p>
        </div>

      </div> 
      {/* End of footer_inner_container */}
    </div>

  )
}

export default Footer;